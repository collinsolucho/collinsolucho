import { Link } from "react-router";
import { ProjectCard, Skills } from "../components/components";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "Personal Portfolio" },
    { name: "description", content: "Personal Bio!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[#0B1220] text-[#DCE4F5] font-sans selection:bg-amber-400/30 selection:text-amber-200">
      {/* === HERO SECTION === */}
      <section
        className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-[#0B1220]/80"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* terminal window */}
          <div className="rounded-md border border-[#223252] bg-[#0F1A2E]/90 shadow-2xl overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#223252] bg-[#101B2E]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#2A3B5C]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="ml-3 text-xs font-mono text-[#7C89A8]">
                collins@portfolio — zsh
              </span>
            </div>

            {/* window body */}
            <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm text-[#5FBFAE] mb-2">
                  $ whoami
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-[#F3F6FC] tracking-tight">
                  Collins
                  <span className="inline-block w-[3px] h-9 md:h-11 bg-amber-400 ml-2 align-middle animate-pulse"></span>
                </h1>
                <p className="mt-2 font-mono text-sm text-amber-300/90">
                  role: "Full Stack Developer"
                </p>

                <p className="mt-6 text-[#B7C2DC] leading-relaxed max-w-md">
                  I craft user-focused digital solutions and help learners
                  understand the technology behind them. My work blends
                  engineering, creativity, and clear communication.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-8 font-mono text-sm">
                  <a
                    href="#projects"
                    className="px-5 py-2.5 rounded-sm bg-amber-400 text-[#0B1220] font-semibold hover:bg-amber-300 transition-colors"
                  >
                    view --work
                  </a>
                  <Link
                    to="https://github.com/collinsolucho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-sm border border-[#2A3B5C] text-[#DCE4F5] hover:border-amber-400 hover:text-amber-300 transition-colors"
                  >
                    git clone github.com/collinsolucho
                  </Link>
                </div>
              </div>

              {/* photo, editor-selection framing instead of a gradient ring */}
              <div className="relative shrink-0 mx-auto md:mx-0">
                <span className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400"></span>
                <span className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400"></span>
                <img
                  src="/images/photo.jpg"
                  alt="Collins Olucho"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-sm border border-[#2A3B5C] object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SKILLS + PROJECTS === one shared background image runs the full
          length of this wrapper, from ~/skills through the reach --us CTA */}
      <div
        className="relative bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/images/portfolioImage.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0B1220]/50"></div>

        {/* === SKILLS SECTION === */}
        <section className="relative z-10 py-16 px-6 md:max-w-5xl md:mx-auto">
          <p className="font-mono text-sm text-[#7C89A8] mb-1">~/skills</p>
          <p className="text-xl md:text-2xl font-semibold text-[#F3F6FC] mb-8 max-w-2xl">
            Tools and technologies I reach for day to day
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {skillFiles.map((group) => (
              <div
                key={group.file}
                className="rounded-sm border border-[#223252] bg-[#0F1A2E]/80 overflow-hidden"
              >
                <div className="flex items-center gap-2 px-4 py-2 border-b border-[#223252] bg-[#101B2E]">
                  <span className="text-amber-400/80 font-mono text-xs">▸</span>
                  <span className="font-mono text-xs text-[#8FA0C4]">
                    {group.file}
                  </span>
                </div>
                <div className="p-4">
                  <Skills title={group.title} tools={group.tools} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === PROJECTS SECTION === */}
        <section
          className="relative z-10 py-16 px-6 md:max-w-5xl md:mx-auto"
          id="projects"
        >
          <p className="font-mono text-sm text-[#7C89A8] mb-1">~/projects</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#F3F6FC] mb-8">
            Some of my work
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProjectCard
              imgSrc="/images/e-commerce.png"
              title="E-commerce Platform"
              description="Full-featured online store with cart, payments, and authentication."
              href="https://collins-edu-mart.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/movies.png"
              title="vibe-coding with Ai"
              description="Modern movie and shows app featuring search, trending titles, and detailed previews — built with React and Tailwind CSS for a fast, responsive experience"
              href="https://movie-shows-lime.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/to-do.png"
              title="Personal Note-Taker"
              description="Track, add, and manage your daily tasks with a clean modern interface."
              href="https://to-do-app-iwyw.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/farm.jpg"
              title="Farm Management App"
              description="A comprehensive app for managing farm operations, including crop tracking, livestock management, and sales analytics."
              href="https://farm-helper-khaki.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/delicacies.jpeg"
              title="Collins Delicacies"
              description="A restaurant/food business website, showcasing menu items and dishes with an elegant amber/stone serif-themed design (dark mode supported). 
              It serves as the digital storefront for the business.It lets customers browse offerings and get a feel for the brand online."
              href="https://collins-delicacies.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/payments.png"
              title="M-PESA Online Payments Integration"
              description="A real-time payment integration built with M-PESA Daraja API — enabling users to send and receive mobile payments securely through a modern web interface."
              href="https://online-payments-pctp.vercel.app/"
            />
            <ProjectCard
              imgSrc="/images/school.jpg"
              title="School Management System"
              description="Digitizes a school's daily operations — student records, attendance, grading, fee payments, and staff scheduling — 
              into one platform replacing manual paperwork.Real-time data accessible to admins, teachers, and parents. Faster, more accurate school administration
               with less error-prone manual work."
              href="https://school360-olive.vercel.app/"
            />
          </div>

          <div className="mt-10 flex items-center gap-3 font-mono text-sm">
            <span className="text-[#5FBFAE]">$</span>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-sm bg-amber-400 text-[#0B1220] font-semibold hover:bg-amber-300 transition-colors"
            >
              reach --us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
const skillFiles = [
  {
    file: "frontend.jsx",
    title: "FrontEnd",
    tools: [
      "HTML",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Typescript",
      "Responsive Design",
      "PWA (offline apps)",
    ],
  },
  {
    file: "backend",
    title: "BackEnd",
    tools: [
      "MongoDB",
      "Node.js",
      "REST APIs",

      "Authentication (Bcrypt)",
      "Authentication (Google OAuth)",
    ],
  },
  {
    file: "tools.sh",
    title: "Tools",
    tools: ["Git", "Vercel", "GitHub", "VS Code", "Firefox DevTools"],
  },
  {
    file: "for-kids.scratch",
    title: "Educational Tools: Programming for Kids",
    tools: [
      "Scratch",
      "Game Design Basics",
      "Block-based Logic",
      "Animation & Storytelling",
    ],
  },
  {
    file: "workflow.yml",
    title: "Automation & Workflow",
    tools: ["Vibe Coding"],
  },
];
