import { CheckCircle, Phone, Home, ArrowRight } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#8B5E3C] via-[#B08968] to-[#D4A373]" />

        <div className="p-8 md:p-14 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-14 w-14 text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
            Thank You!
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Your enquiry has been submitted successfully.
            <br />
            Thank you for choosing <span className="font-semibold">DFurniture</span>.
            Our interior design experts will review your requirements and
            contact you shortly to discuss your project.
          </p>

          {/* Information Card */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              What Happens Next?
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C] text-white text-xl font-bold">
                  1
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">
                  Requirement Review
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Our team will carefully review your enquiry and project
                  requirements.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C] text-white text-xl font-bold">
                  2
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">
                  Expert Consultation
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  One of our furniture specialists will contact you for a
                  detailed discussion.
                </p>
              </div>

              <div>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8B5E3C] text-white text-xl font-bold">
                  3
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">
                  Custom Proposal
                </h4>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  We'll provide a customised solution tailored to your space,
                  style and budget.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-[#8B5E3C] px-8 py-4 font-semibold text-white transition hover:bg-[#73492d]"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </a>

            <a
              href="tel:+919718613986"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[#8B5E3C] px-8 py-4 font-semibold text-[#8B5E3C] transition hover:bg-[#8B5E3C] hover:text-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Our Team
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-gray-600 leading-7">
              We appreciate your interest in DFurniture. Our mission is to
              create beautiful, functional, and customised furniture and
              interior solutions that perfectly complement your lifestyle.
            </p>

            <div className="mt-6 inline-flex items-center font-semibold text-[#8B5E3C]">
              Creating Beautiful Spaces, One Project at a Time
              <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}