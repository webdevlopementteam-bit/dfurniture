import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import helmet from "helmet";
import compression from "compression";
import hpp from "hpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

const app = express();

app.disable("x-powered-by");

app.use(
  helmet({
    // No CSP and no cross-origin isolation headers — this site embeds
    // third-party tags (GTM, gtag.js, Google Fonts, WhatsApp links) that
    // change independently of the codebase, and a locked-down CSP kept
    // breaking every time a new tag was added. The remaining helmet
    // defaults below (X-Content-Type-Options, X-Frame-Options, Referrer-
    // Policy, HSTS, etc.) are safe, inert response headers that don't
    // block anything from loading.
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    hsts: isProduction,
  }),
);

app.use(compression());
app.use(hpp());

let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  app.use(
    base,
    express.static(path.resolve(__dirname, "dist/client"), { index: false }),
  );
}

app.use(async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "/");

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;
    } else {
      template = await fs.readFile(
        path.resolve(__dirname, "dist/client/index.html"),
        "utf-8",
      );
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const { appHtml, helmetContext } = render(url);
    const { helmet } = helmetContext;
    const headTags = helmet
      ? helmet.title.toString() + helmet.meta.toString() + helmet.link.toString()
      : "";

    const html = template
      .replace("<!--ssr-head-->", headTags)
      .replace("<!--ssr-outlet-->", appHtml);

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (err) {
    vite?.ssrFixStacktrace(err);
    console.error(err);
    res.status(500).end("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
