import { useEffect, useRef, useState } from "react";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "../components/Navbar";

export default function Section() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "project", ref: projectRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% dari height section terlihat, baru dianggap aktif
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="bg-[#F9F9F9] dark:bg-[#0f0f0f] text-black dark:text-white">
        {/* Section 1 */}
        <section
          id="home"
          ref={homeRef}
          className="relative min-h-screen md:min-h-screen w-full flex flex-col items-center"
        >
          <Home />
        </section>

        {/* Section 2 */}
        <section
          id="about"
          ref={aboutRef}
          className="relative min-h-screen md:min-h-screen w-full flex items-center justify-center"
        >
          <AboutMe setActiveSection={setActiveSection} />
        </section>

        {/* Section 3 */}
        <section
          id="project"
          ref={projectRef}
          className="relative min-h-screen w-full flex items-center justify-center"
        >
          <Projects setActiveSection={setActiveSection} />
        </section>
      </main>
    </>
  );
}
