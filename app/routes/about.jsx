// src/pages/About.jsx
import { Link } from "react-router";
import { AiOutlineMail } from "react-icons/ai";
import { Phone } from "lucide-react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

export function meta() {
  return [
    { title: "collinsOlucho" },
    { name: "description", content: "collinsolucho About" },
  ];
}

const roleTags = ["Educator", "Full Stack Developer", "UI/UX Enthusiast"];

const infoFields = [
  { key: "location", value: "Eldoret, Kenya" },
  { key: "focus", value: "Civic Tech ·Agri-Tech" },
  { key: "availability", value: "Open to remote & freelance work" },
  { key: "currently_learning", value: "Networking & offensive security" },
];

const skillFiles = [
  {
    file: "frontend.jsx",
    title: "Frontend Development",
    items: [
      "React & React Router",
      "JavaScript",
      "Typescript",
      "Tailwind CSS",
      "Responsive Design",
      "PWA (offline apps)",
    ],
  },
  {
    file: "backend",
    title: "Backend Development",
    items: [
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "Authentication (Google OAuth)",
    ],
  },
  {
    file: "for-kids.scratch",
    title: "Educational Tools: Programming for Kids",
    items: [
      "Scratch",
      "Game Design Basics",
      "Block-based Logic",
      "Animation & Storytelling",
    ],
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-[#DCE4F5]  selection:bg-amber-400/30 selection:text-amber-200">
      <div
        className="relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/images/aboutPortfolio.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0B1220]/30"></div>

        <div className="relative z-10 py-10 px-4 sm:px-6 md:py-16">
          {/* === PROFILE SECTION === */}
          <section className="max-w-5xl mx-auto rounded-md border border-[#223252] bg-[#0F1A2E]/90 shadow-2xl mt-20 overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#223252] bg-[#101B2E]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="ml-3 text-xs font-mono text-[#7C89A8]">
                collins@portfolio — about.md
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center p-6 sm:p-8 md:p-10">
              {/* photo, editor-selection framing to match the rest of the site */}
              <div className="relative shrink-0 mx-auto md:mx-0">
                <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400"></span>
                <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400"></span>
                <img
                  src="/images/photo.jpg"
                  alt="Collins Olucho"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mx-auto rounded-sm border border-[#2A3B5C] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="text-center md:text-left space-y-4">
                <p className="font-mono text-sm text-[#5FBFAE]">
                  $ cat identity.json
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F3F6FC]">
                  Collins Olucho
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {roleTags.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 rounded-sm border border-[#2A3B5C] bg-[#101B2E] text-xs font-mono text-amber-300/90"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <p className="text-[#B7C2DC] leading-relaxed max-w-md mx-auto md:mx-0">
                  Passionate about coding and building meaningful digital
                  solutions that empower learning and creativity.
                </p>

                {/* === QUICK LINKS === */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 pt-2 font-mono text-sm">
                  <Link
                    to={"mailto:collinsolucho@gmail.com"}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm bg-amber-400 text-[#0B1220] font-semibold hover:bg-amber-300 transition-colors"
                  >
                    <AiOutlineMail /> mail
                  </Link>

                  <Link
                    to={"tel:+254743709582"}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-[#2A3B5C] text-[#DCE4F5] hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <Phone size={16} /> call
                  </Link>

                  <Link
                    to={"https://www.linkedin.com/in/collins-olucho-419922325/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-[#2A3B5C] text-[#DCE4F5] hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <FaLinkedin size={16} /> linkedin
                  </Link>

                  <Link
                    to={"https://github.com/collinsolucho"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm border border-[#2A3B5C] text-[#DCE4F5] hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <FaGithubAlt size={16} /> github
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* === ABOUT SUMMARY === */}
          <section className="relative max-w-4xl mx-auto mt-10 md:mt-16 overflow-hidden rounded-md border border-[#223252] bg-[#0F1A2E]/60 px-5 py-10 sm:px-8 md:px-12 md:py-12">
            {/* decorative node-graph svg — subtle, tech-grounded, not neon */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-amber-400/60"
              viewBox="0 0 600 300"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <g stroke="currentColor" strokeWidth="1">
                <line x1="40" y1="60" x2="160" y2="30" />
                <line x1="160" y1="30" x2="300" y2="80" />
                <line x1="300" y1="80" x2="460" y2="40" />
                <line x1="300" y1="80" x2="340" y2="200" />
                <line x1="340" y1="200" x2="180" y2="230" />
                <line x1="180" y1="230" x2="60" y2="190" />
                <line x1="460" y1="40" x2="560" y2="120" />
                <line x1="340" y1="200" x2="520" y2="240" />
              </g>
              <g fill="currentColor">
                <circle cx="40" cy="60" r="4" />
                <circle cx="160" cy="30" r="4" />
                <circle cx="300" cy="80" r="5" />
                <circle cx="460" cy="40" r="4" />
                <circle cx="340" cy="200" r="5" />
                <circle cx="180" cy="230" r="4" />
                <circle cx="60" cy="190" r="4" />
                <circle cx="560" cy="120" r="4" />
                <circle cx="520" cy="240" r="4" />
              </g>
            </svg>

            <div className="relative z-10 space-y-6">
              <p className="font-mono text-sm text-[#7C89A8]">~/about</p>

              <p className="text-[#C7D1E8] text-base sm:text-lg leading-relaxed">
                I'm a developer and ICT educator with a strong interest in
                full-stack development, networking, and user experience design.
                My goal is to craft modern, responsive web applications that
                solve real-world challenges and enhance digital learning
                experiences.
              </p>
              <p className="text-[#C7D1E8] text-base sm:text-lg leading-relaxed">
                I enjoy working with new technologies, exploring backend
                systems, and designing clean, user-focused interfaces that blend
                functionality with simplicity — often with a Kenyan context in
                mind, from USSD-friendly flows to mobile-money integrations.
              </p>

              {/* quick-reference info panel — the kind of detail visitors
                  usually have to dig for */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 font-mono text-sm">
                {infoFields.map((f) => (
                  <div
                    key={f.key}
                    className="rounded-sm border border-[#223252] bg-[#101B2E] px-4 py-3"
                  >
                    <span className="text-[#5FBFAE]">{f.key}:</span>{" "}
                    <span className="text-[#DCE4F5]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* === SKILLS SECTION === */}
          <section className="max-w-5xl mx-auto mt-10 md:mt-16">
            <p className="font-mono text-sm text-[#7C89A8] mb-1">~/skills</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#F3F6FC] mb-6 md:mb-8">
              What I work with
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skillFiles.map((group) => (
                <div
                  key={group.file}
                  className="rounded-sm border border-[#223252] bg-[#0F1A2E]/80 overflow-hidden"
                >
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-[#223252] bg-[#101B2E]">
                    <span className="text-amber-400/80 font-mono text-xs">
                      ▸
                    </span>
                    <span className="font-mono text-xs text-[#8FA0C4]">
                      {group.file}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-amber-300 mb-3">
                      {group.title}
                    </h3>
                    <ul className="text-[#B7C2DC] space-y-1.5 text-sm">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-[#5FBFAE] mt-0.5">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
