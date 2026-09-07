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
    <main className="text-gray-200 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* === HERO SECTION === */}

      <section
        className="relative text-center md:text-left py-16 px-6 flex flex-col justify-center items-center md:items-start bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 50 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: 20,
            repeatType: "loop", // moves back and forth
          }}
          className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg bg-gray-50 p-2 "
        >
          Welcome
        </motion.h1>
        <div className="relative z-10 max-w-4xl ld:max-w-5xl lg:mx-auto">
          <h1 className="font-extrabold text-5xl md:text-6xl bg-gradient-to-r from-blue-700 via-purple-950 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            Hi, I’m Collins
          </h1>

          <p className="mt-3 text-lg md:text-xl text-gray-200 tracking-wide">
            Full Stack Developer
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <div className="md:w-2/3 text-center md:text-left space-y-4 lg:border-r-4 border-amber-600 lg:p-2">
              <p className="text-lg text-gray-100 leading-relaxed">
                I craft user-focused digital solutions and help learners
                understand the technology behind them. My work blends
                engineering, creativity, and clear communication.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold rounded-lg hover:opacity-90 transition"
                >
                  View My Work
                </a>
                <Link
                  to="https://github.com/collinsolucho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold hover:opacity-90 transition"
                >
                  GitHub
                </Link>{" "}
              </div>{" "}
            </div>

            <img
              src="/images/photo.jpg"
              alt="Collins Olucho"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-amber-400 shadow-2xl object-cover saturate-125 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* === SKILLS SECTION === */}
      <section className="py-12 px-6 text-center  md:max-w-5xl md:mx-auto">
        <p className="text-xl md:text-2xl font-medium text-amber-300 mb-6">
          I’m a Full Stack Developer skilled in the following tools and
          technologies:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-3">
          <Skills
            title="FrontEnd"
            tools={[
              "HTML",
              "React",
              "Tailwind CSS",
              "JavaScript",
              "Responsive Design",
            ]}
          />
          <Skills
            title="BackEnd"
            tools={[
              "MongoDB",
              "Node.js",
              "REST APIs",
              "JavaScript",
              "Authentication (Bcrypt)",
            ]}
          />
          <Skills
            title="Tools"
            tools={["Git", "Vercel", "GitHub", "VS Code", "Firefox DevTools"]}
          />
          <Skills
            title="Educational Tools: Programming for Kids"
            tools={[
              "Scratch",
              "Game Design Basics",
              "Block-based Logic",
              "Animation & Storytelling",
            ]}
          />
          <Skills title="Automation & Workflow" tools={["Vibe Coding"]} />
        </div>
      </section>

      {/* === PROJECTS SECTION === */}
      <section className="py-10 md:max-w-5xl md:mx-auto" id="projects">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 text-amber-400">
          Some of My Works
        </h2>
        <div className="p-4 grid md:grid-cols-2 gap-3 lg:grid-cols-4">
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
            description="Collins Delicacies is a restaurant/food business website built with React Router, showcasing menu items and dishes with an elegant amber/stone serif-themed design (dark mode supported). It serves as the digital storefront for the business — letting customers browse offerings and get a feel for the brand online."
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
            description="A School Management System is software that digitizes a school's daily operations — student records, attendance, grading, fee payments, and staff scheduling — into one platform. It replaces manual paperwork with centralized, real-time data accessible to admins, teachers, and parents. The goal is faster, more accurate school administration with less error-prone manual work."
            href="https://school360-olive.vercel.app/"
          />
        </div>
        <Link
          to="/contact"
          className="px-12 py-5  text-xl  rounded-lg bg-gradient-to-r from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] text-white font-semibold hover:opacity-80 transition"
        >
          Reach Us!
        </Link>{" "}
      </section>
    </main>
  );
}
