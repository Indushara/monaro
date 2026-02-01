import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Contact Us | Monaro Lands",
  description: "Get in touch with Monaro Lands. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero - CONTACT US overlaid on building image */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[60vh] sm:min-h-[70vh] flex items-start justify-center pt-8 sm:pt-12 md:pt-16">
          {/* Building image as background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80)",
            }}
          />
          {/* Dark overlay so text is readable */}
          <div className="absolute inset-0 bg-black/40" />
          {/* CONTACT US centered on top of image */}
          <h1 className="relative z-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold uppercase tracking-wider text-center text-purple-400 sm:text-purple-300 fade-in drop-shadow-lg">
            CONTACT US
          </h1>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          {/* Info circles */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                label: "Information",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                label: "Call Directly",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                label: "Email Us",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                label: "Opening Hours",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 p-4 rounded-full bg-purple-50 border border-purple-100 text-purple-700"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm text-purple-600">
                  {item.icon}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We'd Love To Hear From You - Contact Form */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              We&apos;d Love To Hear From You
            </h2>
            <p className="text-purple-700/80 text-sm sm:text-base mb-8">
              Our team is available 24/7 to assist you. Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl bg-purple-50/80 border border-purple-200 px-4 py-3 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl bg-purple-50/80 border border-purple-200 px-4 py-3 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-xl bg-purple-50/80 border border-purple-200 px-4 py-3 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full rounded-xl bg-purple-50/80 border border-purple-200 px-4 py-3 text-purple-900 placeholder:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Find Us Here - Map */}
      <section className="py-12 sm:py-16 md:py-20 bg-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Find Us Here
          </h2>
          <p className="text-purple-700/80 text-sm sm:text-base mb-6 max-w-2xl">
            Visit our headquarters in Colombo. We&apos;re here to help you find your perfect property.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-purple-100">
            <div className="aspect-video w-full bg-purple-100 relative">
              <iframe
                title="Monaro Lands Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.140798840393!2d79.8637!3d6.8947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnNDEuMCJOIDc5wrA1MSc0OS4zIkU!5e0!3m2!1sen!2slk!4v1635000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
            <div className="bg-white p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-purple-800 font-medium">
                Monaro Lands Headquarters, 77/7 Havelock Road, Colombo 05, Sri Lanka
              </p>
              <a
                href="https://www.google.com/maps/search/77+Havelock+Road+Colombo+05+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2.5 text-sm transition-colors shrink-0"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
