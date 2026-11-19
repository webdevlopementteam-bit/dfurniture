import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import contactHero from "../assets/contact/contactHero.jpeg";
import { FaHome } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MapPin, Mail, Phone } from "lucide-react";
import { submitLead } from "../utils/web3forms";

const Contact = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    enquiry_subject: "",
    message: "",
    botcheck: false,
  });

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

    // Honeypot: real users never check/fill this hidden field. If it's
    // set, silently drop the submission instead of sending it anywhere.
    if (formData.botcheck) {
      return;
    }

    setSubmitting(true);

    const payload = {
      // Web3Forms uses this as the actual email subject line — a
      // fixed, predictable subject (rather than their auto-generated
      // one) helps the notification land in the inbox instead of spam.
      subject: "dfurniture new lead",
      from_name: `${formData.first_name} ${formData.last_name}`,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      enquiry_subject: formData.enquiry_subject,
      message: formData.message,
    };

    try {
      if (await submitLead(payload)) {
        navigate("/thank-you");
        return;
      }

      setSubmitting(false);
      setError("Something went wrong. Please try again.");
    } catch {
      setSubmitting(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <SEO
        title="Contact Dfurniture | Free Home Interior Consultation"
        description="Get in touch with Dfurniture for modular kitchens, wardrobes & home interior design in Delhi NCR. Book a free consultation today."
        keywords="Contact Dfurniture, Home Interior Consultation Delhi"
        url="https://www.dfurniture.in/contact-us/"
      />
      {/* Page Banner */}
      <section
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="mx-5 rounded-3xl px-7 h-[490px] flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h2 className="text-[45px] lg:text-[55px] text-white font-extrabold">
            Contact Us
          </h2>
          <div className="flex gap-4 items-center">
            <Link to="/" className="flex gap-2 text-white">
              <FaHome className="text-white w-5 h-5" /> <p>D Furniture</p>
            </Link>
            <p>
              <FaAngleRight className="text-white" />
            </p>
            <p className="text-white">Contact Us</p>
          </div>
        </div>
      </section>

      {/* contact info and form */}
      <section className="py-14 px-5 lg:px-16">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 items-start">
          {/* Left Side */}
          <div>
            <p className="text-primary uppercase font-semibold flex items-center gap-2 text-sm">
              <span className="w-2 h-4 rounded-t-full rounded-l-full rounded-r-none bg-primary"></span>
              Contact Us
            </p>

            <h2 className="text-[48px] leading-[1.05] font-extrabold text-heading mt-4">
              Happy to answer all
              <br />
              your questions
            </h2>

            <p className="text-black/60 text-[17px] leading-[1.5] mt-5">
              Feel free to reach out to us through the form below, and we'll get
              back to you as soon as possible. Our team is available For You.
              Your feedback and inquiries are important to us!
            </p>

            {/* Contact Card */}
            <div className="bg-[#886E45] rounded-[28px] p-8 mt-8 text-white">
              {/* Address */}
              <div className="flex gap-5 items-center">
                <div className="w-24 h-[68px] rounded-full bg-primary flex justify-center items-center">
                  <MapPin className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-[30px] font-bold">Address:</h4>

                  <p className="leading-[1.8]">
                    3/28, basement, sector 18 Rohini Delhi 110085
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 items-center mt-7">
                <div className="w-[68px] h-[68px] rounded-full bg-primary flex justify-center items-center">
                  <Mail className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-[30px] font-bold">Email:</h4>

                  <p>info@dfurniture.in</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 items-center mt-7">
                <div className="w-[68px] h-[68px] rounded-full bg-primary flex justify-center items-center">
                  <Phone className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-[30px] font-bold">Phone:</h4>

                  <p>+91 97186 13986</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-[#F3F7FA] rounded-[32px] pt-[50px] pb-[40px] px-10 lg:px-[65px]">
            <h3 className="text-[40px] leading-none font-extrabold text-heading mb-7">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* honeypot spam trap — kept visually hidden, real users never fill it in */}
              <input
                type="checkbox"
                name="botcheck"
                checked={formData.botcheck}
                onChange={handleChange}
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-3">First Name</label>

                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full py-[11px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-3">Last Name</label>

                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full py-[11px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-3">
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-[11px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-medium mb-3">
                  Mobile Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-[11px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-medium mb-3">Subject</label>

                <input
                  type="text"
                  name="enquiry_subject"
                  placeholder="Subject"
                  value={formData.enquiry_subject}
                  onChange={handleChange}
                  className="w-full py-[11px] px-[15px] rounded-xl border border-gray-300 outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-medium mb-3">
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={3}
                  name="message"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-[15px] py-4 rounded-xl border border-gray-300 outline-none resize-none focus:border-primary"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="bg-primary text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Submit Form"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* map */}
      <div className="pb-14 px-5 lg:px-24">
        <iframe
          src="https://www.google.com/maps?q=28.7408623,77.1332361&z=17&hl=en&output=embed"
          width="100%"
          height="600"
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;