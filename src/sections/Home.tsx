import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import mouseDown from "../assets/mouseDown.png";

export default function Home() {
  const roles = ["Web Developer", "Software Developer", "UI & UX Designer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // ganti setiap 3 detik
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center text-center pt-50">
      <h1 className="text-4xl md:text-[64px] font-extrabold text-black dark:text-white animate-typing">
        AZKA HARTAMI
      </h1>
      <p className="text-lg md:text-2xl font-bold text-black dark:text-gray-300 mt-2 transition-opacity duration-700 ease-in-out">
        {roles[currentIndex]}
      </p>

      <div className="flex space-x-[20px] md:space-x-[90px] mt-4">
        <a
          href="https://github.com/AzkaHartami"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent group-hover:bg-gray-700 dark:group-hover:bg-gray-400 transition-all duration-300">
            <FaGithub
              className="text-gray-900 dark:text-white group-hover:text-white transition-all duration-300  md:w-[78px] w-[60px] md:h-[57px] h-[40px]"
              size={32}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/azka-hartami-9a0944225/"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent group-hover:bg-blue-500 transition-all duration-300">
            <FaLinkedin
              className="text-gray-900 dark:text-white group-hover:text-white transition-all duration-300 md:w-[78px] w-[60px] md:h-[57px] h-[40px]"
              size={32}
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/azka_hrtmi?igsh=cGpsdW5lcWdmdTZ0&utm_source=qr"
          className="group"
          target="_blank"
        >
          <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent group-hover:bg-[#C13584] transition-all duration-300">
            <FaInstagram
              className="text-gray-900 dark:text-white group-hover:text-white transition-all duration-300 md:w-[78px] w-[60px] md:h-[57px] h-[40px]"
              size={32}
            />
          </div>
        </a>
      </div>
      <div className="hidden md:flex font-bold absolute bottom-0 left-180 -translate-x-1/2">
        <img
          src={mouseDown}
          alt=""
          className="w-[50px] h-[50px] mb-2 animate-bounce dark:invert"
        />
        <p className="text-2xl">scroll down</p>
      </div>
    </div>
  );
}
