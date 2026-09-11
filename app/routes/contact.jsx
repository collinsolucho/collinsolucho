import { Form, Link, redirect } from "react-router";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { Phone } from "lucide-react";
import { AddMessages } from "../model/database";
import {
  commitSession,
  getSession,
  setSuccessMessage,
} from "../.server/session";

export function meta() {
  return [
    { title: "collinsOlucho" },
    { name: "description", content: "collinsolucho contacts" },
  ];
}

export async function action({ request }) {
  let session = await getSession(request.headers.get("Cookie"));
  let messages = session.get("messages") || [];
  let formData = await request.formData();

  let phone = formData.get("phone");
  let email = formData.get("email");
  let message = formData.get("message");

  let update = await AddMessages(phone, email, message);
  if (update) {
    setSuccessMessage(session, "Message Sent successfully!");
  } else {
    setErrorMessage(session, "Failed to send message. Please try again.");
  }

  return redirect("/", {
    headers: { "Set-Cookie": await commitSession(session) },
  });
}

const contactRows = [
  {
    icon: AiOutlineMail,
    label: "email",
    value: "collinsolucho@gmail.com",
    href: "mailto:collinsolucho@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "0743709582",
    href: "tel:+254743709582",
  },
  {
    icon: FaLinkedin,
    label: "linkedin",
    value: "linkedin.com/in/collins-olucho-419922325",
    href: "https://www.linkedin.com/in/collins-olucho-419922325/",
    external: true,
  },
  {
    icon: FaGithubAlt,
    label: "github",
    value: "github.com/collinsolucho",
    href: "https://github.com/collinsolucho",
    external: true,
  },
];

const detailFields = [
  { key: "location", value: "Eldoret, Kenya (GMT+3)" },
  { key: "response_time", value: "Usually within 24 hours" },
  { key: "availability", value: "Open to remote & freelance work" },
];

export default function Contact() {
  return (
    <main className="relative min-h-screen mt-10 md:mt-15 bg-[#0B1220] text-[#DCE4F5] selection:bg-amber-400/30 selection:text-amber-200">
      {/* background image layer, runs the full page length */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/images/contactPortfolio.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-[#0B1220]/10"></div>

      {/* dot-grid backdrop — quiet, tech-grounded, not a decorative gradient */}
      <svg
        className="pointer-events-none fixed inset-0 h-full w-full text-amber-400/[0.07]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="contact-dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-dot-grid)" />
      </svg>

      <div className="relative z-10 py-10 px-4 sm:px-6 md:py-16">
        <section className="max-w-4xl mx-auto rounded-md border border-[#223252] bg-[#0F1A2E]/90 shadow-2xl overflow-hidden">
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#223252] bg-[#101B2E]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
            <span className="ml-3 text-xs font-mono text-[#7C89A8]">
              collins@portfolio — contact.js
            </span>
          </div>

          <div className="p-5 sm:p-8 md:p-10">
            {/* === Intro === */}
            <div className="text-center mb-8 md:mb-10">
              <p className="font-mono text-sm text-[#5FBFAE] mb-2">
                // building something? let's talk
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F6FC]">
                Get in touch
              </h2>
              <p className="mt-3 text-[#B7C2DC] max-w-md mx-auto leading-relaxed">
                Modern, responsive websites for corporate or personal projects —
                reach out and let's figure out what you need.
              </p>
            </div>

            {/* === Contact Info + Form === */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 md:items-start">
              {/* === Contact Info === */}
              <div className="flex-1 w-full space-y-6">
                <div className="rounded-sm border border-[#223252] bg-[#101B2E] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-[#223252]">
                    <span className="text-amber-400/80 font-mono text-xs">
                      ▸
                    </span>
                    <span className="font-mono text-xs text-[#8FA0C4]">
                      contact.json
                    </span>
                  </div>
                  <div className="p-4 space-y-3">
                    {contactRows.map(
                      ({ icon: Icon, label, value, href, external }) => (
                        <div
                          key={label}
                          className="flex items-center gap-3 text-sm sm:text-base"
                        >
                          <Icon className="text-amber-400 text-lg shrink-0" />
                          <span className="font-mono text-[#7C89A8] shrink-0">
                            {label}:
                          </span>
                          <Link
                            to={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="text-[#DCE4F5] hover:text-amber-300 transition-colors break-all"
                          >
                            {value}
                          </Link>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="rounded-sm border border-[#223252] bg-[#101B2E] p-4 space-y-2 font-mono text-sm">
                  {detailFields.map((f) => (
                    <p key={f.key}>
                      <span className="text-[#5FBFAE]">{f.key}:</span>{" "}
                      <span className="text-[#DCE4F5]">{f.value}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* === Form === */}
              <Form
                method="post"
                className="flex-1 w-full rounded-sm border border-[#223252] bg-[#101B2E] overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b border-[#223252]">
                  <span className="text-amber-400/80 font-mono text-xs">▸</span>
                  <span className="font-mono text-xs text-[#8FA0C4]">
                    POST /contact
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-mono text-xs text-[#7C89A8] mb-2"
                    >
                      phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+254............"
                      className="w-full rounded-sm border border-[#2A3B5C] bg-[#0F1A2E] px-3 py-2 text-sm text-[#DCE4F5] placeholder:text-[#5A6884] focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-xs text-[#7C89A8] mb-2"
                    >
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="joedoe@gmail.com"
                      className="w-full rounded-sm border border-[#2A3B5C] bg-[#0F1A2E] px-3 py-2 text-sm text-[#DCE4F5] placeholder:text-[#5A6884] focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-xs text-[#7C89A8] mb-2"
                    >
                      message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Add your message..."
                      className="w-full rounded-sm border border-[#2A3B5C] bg-[#0F1A2E] px-3 py-2 text-sm text-[#DCE4F5] placeholder:text-[#5A6884] focus:outline-none focus:ring-1 focus:ring-amber-400 focus:border-amber-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-mono text-sm bg-amber-400 text-[#0B1220] font-semibold py-2.5 rounded-sm hover:bg-amber-300 transition-colors"
                  >
                    send()
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
