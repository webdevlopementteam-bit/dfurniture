import { Link } from "react-router-dom";
import banner from "../assets/modular-kitchen/banner.webp";
import mod1 from "../assets/modular-kitchen/mod1.webp";
import mod2 from "../assets/modular-kitchen/mod2.webp";
import mod3 from "../assets/modular-kitchen/mod3.webp";
import mod4 from "../assets/modular-kitchen/mod4.webp";
import mod5 from "../assets/modular-kitchen/mod5.webp";
import mod6 from "../assets/modular-kitchen/mod6.webp";
import SEO from "../components/SEO";
import ProductFAQ from "../components/ProductFAQ";

const kitchenItems = [
  {
    src: mod1,
    alt: "mod1",
    title: "Modern Straight Kitchen",
    description:
      "A clean, single-wall layout ideal for smaller flats and studio apartments where space is limited and a minimal design is preferred.",
  },
  {
    src: mod2,
    alt: "mod2",
    title: "Minimal L-Shaped Kitchen",
    description:
      "Best suited for apartments and mid-sized homes. Efficient use of corner space, smooth movement, and generous storage.",
  },
  {
    src: mod3,
    alt: "mod3",
    title: "Modern Parallel Kitchen",
    description:
      "Ideal for long, narrow kitchens in compact homes. Two facing rows of cabinets keep everything within easy reach.",
  },
  {
    src: mod4,
    alt: "mod4",
    title: "Modern U-Shaped Kitchen",
    description:
      "Built for larger kitchens and families who cook daily — maximum countertop space, extensive storage, and dedicated zones for cooking, washing, and prep.",
  },
  {
    src: mod5,
    alt: "mod5",
    title: "Island Kitchen",
    description:
      "For open-plan and larger homes, an island layout adds extra counter space and works well for entertaining alongside daily cooking.",
  },
  {
    src: mod6,
    alt: "mod6",
    title: "Modern U-Shaped Kitchen",
    description:
      "The most efficient layout for large families. Covers three walls with cabinets and countertop — providing maximum workspace, extensive storage, and a highly organized cooking environment.",
  },
];

const kitchenFaqs = [
  {
    question: "Which is the best Modular Kitchen Manufacturer in Delhi?",
    answer:
      "Dfurniture is a trusted modular kitchen manufacturer in Delhi with 15+ years of experience, offering customized designs, quality materials, in-house manufacturing, and professional installation across Delhi NCR.",
  },
  {
    question: "How much does a modular kitchen cost in Delhi?",
    answer:
      "Cost depends on kitchen size, layout, materials, and finishes. After a free site visit, we provide a detailed, itemized quotation with transparent pricing and no hidden charges.",
  },
  {
    question: "Do you provide modular kitchen interiors across all of Delhi NCR?",
    answer:
      "Yes. We design and install modular kitchen interiors in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and surrounding NCR areas.",
  },
  {
    question: "How long does it take to complete a modular kitchen?",
    answer:
      "Most projects are completed in 4–5 weeks, including design, manufacturing, and installation. Timelines can vary with the level of customization.",
  },
  {
    question: "Which modular kitchen layout works best for small homes?",
    answer:
      "L-shaped, straight, and parallel layouts work best for compact spaces. Our designers recommend the right layout after reviewing your space and storage needs.",
  },
  {
    question: "Which materials are best for a modular kitchen?",
    answer:
      "BWP plywood, HDHMR boards, premium laminates, acrylic finishes, and branded hardware are the most reliable choices for strength, durability, and moisture resistance in Indian conditions.",
  },
  {
    question:
      "What's the difference between a modular kitchen and a traditional kitchen?",
    answer:
      "A modular kitchen uses factory-manufactured units that are easier to install, maintain, and reconfigure. Traditional kitchens are built entirely on-site and offer far less flexibility for future changes.",
  },
  {
    question: "Why choose Dfurniture for modular kitchen interiors in Delhi?",
    answer:
      "15+ years of experience, in-house factory manufacturing, transparent pricing, premium materials, and one accountable team from design to installation and after-sales support.",
  },
];

const ModularKitchen = () => {
  return (
    <>
      <SEO
        title="Modular Kitchen Manufacturer in Delhi | Dfurniture"
        description="Dfurniture is a trusted Modular Kitchen Manufacturer in Delhi with 15+ years of experience. Get custom modular kitchen interiors in Delhi NCR. Free 3D design."
        keywords="Modular Kitchen Manufacturer in Delhi, Modular Kitchen Interiors in Delhi"
        url="https://www.dfurniture.in/modular-kitchen/"
      />
      {/* banner */}
      <section
        className="flex flex-col items-center justify-center h-[250px] sm:h-[350px] lg:h-[450px] text-center relative"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></section>
      {/* category link */}
      <section className="py-5 px-4 sm:px-10 lg:px-20">
        <div className="flex overflow-x-auto gap-3 sm:gap-5 p-1 scrollbar-hide">
          {[
            { to: "/modular-kitchen", label: "Kitchen" },
            {
              to: "/architectural-master-bedroom-interiors-in-delhi",
              label: "Master Bedroom",
            },
            { to: "/living-room", label: "Living Room" },
            { to: "/bathroom", label: "Bathroom" },
            { to: "/wardrobe", label: "Wardrobe" },
            { to: "/study-room-interior-designer", label: "Study Room" },
            { to: "/kids-bedroom-designer-company", label: "Kid's" },
            { to: "/modular-tv-unit", label: "TV Unit" },
            { to: "/pooja-room", label: "Pooja Room" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} className="flex-shrink-0">
              <p className="py-[6px] px-5 bg-primary text-white font-semibold tracking-wide rounded-full whitespace-nowrap text-sm sm:text-base">
                {label}
              </p>
            </Link>
          ))}
        </div>
      </section>
      {/* design catalogue heading */}
      <section className="px-4 sm:px-10 lg:px-20 text-center">
        <h1 className="text-primary mt-3 font-extrabold text-[28px] sm:text-[36px] lg:text-[45px] leading-tight">
          Modular Kitchen Manufacturer in Delhi
        </h1>
        <p className="text-black/80 mt-5 text-left">
          Looking for a reliable Modular Kitchen Manufacturer in Delhi? At{" "}
          <a href="/contact-us" className="text-primary">
            <strong>Dfurniture</strong>
          </a>
          , we design and build fully customized modular kitchen interiors
          in Delhi — planned around your space, manufactured in our own
          factory, and installed by our own trained team. No middlemen, no
          third-party contractors, no compromises on quality.
        </p>
        <p className="text-black/80 mt-5 text-left">
          With over 15 years in the business and 500+ kitchens delivered
          across Delhi NCR, we understand what Indian kitchens actually
          need — heat, moisture, daily wear, and real cooking habits — and
          we build for that.
        </p>
        <h2 className="text-primary mt-8 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          Dfurniture — Modular Kitchen Manufacturer in Delhi with 15+ Years
          of Experience
        </h2>
        <p className="text-black/80 mt-5 text-left">
          Dfurniture is a Delhi-based modular kitchen manufacturer serving
          homeowners across South Delhi, West Delhi, East Delhi, North
          Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Every kitchen we
          build starts with a free site visit, followed by 3D design,
          in-house manufacturing at our own factory in Bawana, and
          professional installation — all handled by one team, start to
          finish.
        </p>
        <p className="text-black/80 mt-5 text-left">
          Unlike manufacturers who outsource production or resell
          factory-made modules, we make every unit ourselves. That means
          tighter quality control, faster turnaround, and better pricing —
          because you're not paying for a middleman's margin.
        </p>
        <h2 className="text-primary mt-8 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          Modular Kitchen Interiors in Delhi — Designed Around Your Home
        </h2>
        <p className="text-black/80 mt-5 text-left">
          Every home in Delhi is different — flat sizes, ventilation,
          vastu preferences, and family cooking habits all vary. That's
          why our modular kitchen interiors in Delhi are never templated.
          Our designers visit your site, take exact measurements,
          understand your storage and workflow needs, and only then start
          on a 3D layout you can review before a single panel is cut.
        </p>
        <p className="text-black/80 mt-5 text-left">
          From compact 1BHK kitchens in East Delhi to large U-shaped
          kitchens in independent houses in South Delhi, we've built
          interiors for practically every kind of home in the NCR.
        </p>
      </section>
      {/* catalogue grid — Kitchen Layouts We Offer */}
      <section className="pt-8 pb-12 px-4 text-center sm:px-10 lg:px-20">
        <h4 className="text-primary mt-3 font-extrabold text-[22px] sm:text-[30px] lg:text-[40px] leading-tight">
          Kitchen Layouts We Offer
        </h4>
        <p className="text-black/80 mt-3">
          Every home is different. We build kitchens in every major layout
          to suit different space sizes and cooking styles.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
          {kitchenItems.map((item) => (
            <div
              key={item.alt}
              className="border-[1px] border-category rounded-lg p-3 group"
            >
              <div className="h-60 overflow-hidden rounded-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-[22px] mt-2 text-heading font-semibold">
                {item.title}
              </h3>
              <p>{item.description}</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="bg-category py-3 w-full text-sm text-white rounded-full transition-all duration-300 hover:bg-[#BB9A65]">
                  <a href="https://wa.me/919818855471">
                    Book Free Consultation
                  </a>
                </button>
                <button className="border-[1px] border-black py-3 w-full text-sm text-black rounded-full transition-all duration-300 hover:bg-heading hover:text-white">
                  <a href="https://wa.me/919818855471">Get Quote</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* SEO sections */}
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Why Choose Dfurniture as Your Modular Kitchen Manufacturer in
          Delhi
        </h4>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            <strong>Factory-Direct Manufacturing —</strong> Every kitchen
            is made in our own factory. Better quality control, faster
            delivery, lower cost.
          </li>
          <li className="text-black/80">
            <strong>100% Customized Design —</strong> Built to your exact
            space. See the complete 3D design before anything is
            manufactured.
          </li>
          <li className="text-black/80">
            <strong>Premium Materials —</strong> BWR/BWP moisture-resistant
            boards, soft-close hardware, and finishes built for Indian
            kitchen conditions.
          </li>
          <li className="text-black/80">
            <strong>Transparent Pricing —</strong> One itemized quote
            upfront. No hidden charges, no surprise costs later.
          </li>
          <li className="text-black/80">
            <strong>On-Time Delivery —</strong> Most kitchens are completed
            in 4–5 weeks from design to installation.
          </li>
          <li className="text-black/80">
            <strong>Single Point of Contact —</strong> One team manages
            design, manufacturing, and installation, so you're not
            coordinating multiple vendors.
          </li>
        </ul>
      </section>
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h2 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Our Expertise
        </h2>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">
            Free site visit and kitchen measurement
          </li>
          <li className="text-black/80">
            Space planning and layout recommendation
          </li>
          <li className="text-black/80">3D design visualization</li>
          <li className="text-black/80">Premium material selection</li>
          <li className="text-black/80">In-house factory manufacturing</li>
          <li className="text-black/80">Smart storage planning</li>
          <li className="text-black/80">Professional installation</li>
          <li className="text-black/80">After-sales support</li>
        </ul>
      </section>
      <section className="px-4 sm:px-10 lg:px-20 pb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          15+ Years of Trust Across Delhi NCR
        </h4>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li className="text-black/80">15+ years of industry experience</li>
          <li className="text-black/80">
            500+ modular kitchens delivered across Delhi NCR
          </li>
          <li className="text-black/80">
            100% in-house manufacturing — no outsourcing
          </li>
          <li className="text-black/80">
            Strict quality checks at every production stage
          </li>
          <li className="text-black/80">
            Growth built almost entirely on customer referrals
          </li>
        </ul>
      </section>
      <ProductFAQ faqs={kitchenFaqs} />
      <section className="px-4 sm:px-10 lg:px-20 pb-5 mb-5">
        <h4 className="text-primary mt-3 font-extrabold text-[24px] sm:text-[30px] leading-tight">
          Create Your Dream Kitchen with Dfurniture
        </h4>
        <p className="text-black/80 mt-1">
          Looking for a dependable{" "}
          <a
            href="/blog/modular-kitchen-manufacturer-in-delhi"
            className="text-primary"
          >
            <strong>Modular Kitchen Manufacturer in Delhi</strong>
          </a>{" "}
          for your next renovation? Dfurniture delivers complete modular
          kitchen interiors in Delhi — smart design, in-house
          manufacturing, professional installation, and full after-sales
          support, built around your home and your budget.
        </p>
        <h6 className="text-primary mt-3 font-extrabold text-[18px] sm:text-[20px] leading-tight">
          Contact us today for a free site visit and 3D design
          consultation.
        </h6>
        <a
          href="https://wa.me/919818855471"
          className="inline-block mt-4 bg-category py-3 px-8 text-sm text-white rounded-full transition-all duration-300 hover:bg-[#BB9A65]"
        >
          Book Free Consultation
        </a>
      </section>
    </>
  );
};

export default ModularKitchen;
