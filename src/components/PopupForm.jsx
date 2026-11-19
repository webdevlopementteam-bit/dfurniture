import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { submitLead } from "../utils/web3forms";

// sessionStorage lives as long as the browser tab: it survives reloads and
// in-site navigation, and is cleared when the tab is closed. So the popup
// shows once per tab, and again only after the tab is closed and reopened.
const STORAGE_KEY = "dfurniture_popup_shown";
const DELAY_MS = 5000;

const alreadyShown = () => {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
};

const markShown = () => {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // storage blocked (private mode etc.) — popup simply shows once per page load
  }
};

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  botcheck: false,
};

const inputClass =
  "w-full py-[10px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary bg-white";

const PopupForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState(emptyForm);

  // Start the 5-second timer once, on first load of whichever page the
  // visitor lands on (home or any direct link).
  useEffect(() => {
    if (alreadyShown()) return;
    const timer = setTimeout(() => {
      if (alreadyShown()) return;
      markShown();
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape and lock background scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Honeypot: real users never fill this hidden field.
    if (formData.botcheck) return;

    setSubmitting(true);

    const payload = {
      subject: "dfurniture new lead",
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      form_source: `Website Popup (${pathname})`,
    };

    try {
      if (await submitLead(payload)) {
        setOpen(false);
        setFormData(emptyForm);
        navigate("/thank-you");
        return;
      }
      setError("Something went wrong. Please try again.");
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-form-title"
    >
      <div
        className="relative w-full max-w-[480px] max-h-full overflow-y-auto bg-[#F3F7FA] rounded-[28px] px-6 sm:px-10 pt-10 pb-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-90 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-primary uppercase font-semibold flex items-center gap-2 text-sm">
          <span className="w-2 h-4 rounded-t-full rounded-l-full rounded-r-none bg-primary"></span>
          Free Consultation
        </p>
        <h3
          id="popup-form-title"
          className="text-[28px] sm:text-[32px] leading-tight font-extrabold text-heading mt-2"
        >
          Get Your Dream Interiors
        </h3>
        <p className="text-black/60 mt-2 mb-5 text-[15px]">
          Share your details and our design team will get back to you shortly.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            name="botcheck"
            checked={formData.botcheck}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile Number *"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            rows={3}
            name="message"
            placeholder="Your Requirement (Kitchen, Wardrobe, Pooja Room...)"
            value={formData.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending..." : "Book Free Consultation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
