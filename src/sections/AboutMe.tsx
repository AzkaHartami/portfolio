import { ArrowUp } from "lucide-react";
import hero from "../assets/hero.jpg";
import { FaDownload } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

type AboutMeProps = {
  setActiveSection: (section: string) => void;
};

export default function AboutMe({ setActiveSection }: AboutMeProps) {
  const handleScrollToTop = () => {
    const homeSection = document.getElementById("home");
    homeSection?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("home");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Kiri - Gambar */}
      <div className="md:w-1/3 flex justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <img
          src={hero}
          alt="Profile"
          className="rounded-[70px] w-[266px] h-[240px] md:w-[466px] md:h-[440px] object-cover object-top mt-10"
        />
      </div>

      {/* Kanan - Teks */}
      <div className="md:w-2/3 text-center md:text-left w-[466px] h-[440px]">
        <h2 className="text-[32px] md:text-[42px] font-extrabold text-gray-900 dark:text-white p-0 ">
          About Me
        </h2>
        <p className="text-[12px] md:text-[18px] text-gray-800 dark:text-gray-300 leading-relaxed text-center md:text-justify mb-2 md:mb-10 max-w-3xl x-100 md:px-0 pl-20 pr-20 md:pr-80 ">
          Hi, I'm a fresh graduate with a{" "}
          <strong>Computer Science Bachelor's</strong> degree from{" "}
          <strong>UPN "Veteran" Yogyakarta</strong>. I specialize in{" "}
          <strong>Web</strong> and <strong>Software Development</strong>, with
          expertise in both <strong>FRONTEND</strong> and{" "}
          <strong>BACKEND</strong> technologies. I enjoy collaborating in a team
          environment and thrive on solving complex problems with creative and
          efficient solutions. Let's build something amazing together!
        </p>

        {/* Tombol */}
        <div className="flex flex-col md:flex-row gap-1 md:gap-1 items-center justify-center md:justify-start">
          <a
            href="/your-cv.pdf"
            download
            className="text-[12px] md:text-[18px] inline-flex items-center justify-center gap-2 py-2 md:px-6 md:py-3 
               bg-black text-white dark:bg-white dark:text-black 
               rounded-[15px] shadow hover:bg-gray-500 dark:hover:bg-gray-300 
               hover:font-bold transition-all duration-300 w-[200px] md:w-[220px]"
          >
            Download CV
            <FaDownload className="w-[20px] h-[23px] md:w-[30px] md:h-[33px]" />
          </a>

          <a
            href="https://wa.me/6281275939914"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] md:text-[18px] inline-flex items-center justify-center gap-2 py-2 md:px-6 md:py-3 
               bg-black text-white dark:bg-white dark:text-black 
               rounded-[15px] shadow hover:bg-gray-500 dark:hover:bg-gray-300 
               hover:font-bold transition-all duration-300 w-[200px] md:w-[220px]"
          >
            Lets Connect!
            <FaWhatsapp className="w-[20px] h-[23px] md:w-[30px] md:h-[33px]" />
          </a>
        </div>
      </div>
      <div
        onClick={handleScrollToTop}
        className="font-bold absolute bottom-20 right-5  md:right-5 md:bottom-5 bg-[#4E4E4E] dark:bg-[#F9F9F9] p-2 rounded cursor-pointer animate-bounce"
      >
        <ArrowUp className="text-white dark:text-black" />
      </div>
    </div>
  );
}
