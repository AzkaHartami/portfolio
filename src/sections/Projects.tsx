import { useEffect, useState } from "react";
import { ArrowUp, DotIcon } from "lucide-react";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiStreamlit, SiSupabase, SiVite } from "react-icons/si";
import clsx from "clsx"; // install clsx jika belum: npm i clsx
import { FaPython } from "react-icons/fa";
import projek1 from "../assets/projek1.jpg";
import projek2 from "../assets/projek2.jpg";
import projek3 from "../assets/projek3.jpg";
import projek4 from "../assets/projek4.jpg";
import projek5 from "../assets/projek5.jpg";

type AboutMeProps = {
  setActiveSection: (section: string) => void;
};

export default function Projects({ setActiveSection }: AboutMeProps) {
  const handleScrollToTop = () => {
    const homeSection = document.getElementById("about");
    homeSection?.scrollIntoView({ behavior: "smooth" });
    setActiveSection("about");
  };

  const Icon = {
    react: <RiReactjsFill className="w-10 h-10 text-white dark:text-black" />,
    vite: <SiVite className="w-10 h-10 text-white dark:text-black" />,
    supabase: <SiSupabase className="w-10 h-10 text-white dark:text-black" />,
    tw: <RiTailwindCssFill className="w-10 h-10 text-white dark:text-black" />,
    python: <FaPython className="w-10 h-10 text-white dark:text-black" />,
    st: <SiStreamlit className="w-10 h-10 text-white dark:text-black" />,
  };

  const cardProjects = [
    {
      title: "Accounting for Rental",
      description:
        "I make Web App for rent business to count their expanse and income. this Web App have to login and the features is add incomes, add expenses, anlysis all the incomes and exspenses using React Vite for Frontend and Supabase for Backend.",
      imageUrl: projek1,
      icons: {
        react: Icon.react,
        vite: Icon.vite,
        supabase: Icon.supabase,
        tailwind: Icon.tw,
      },
    },
    {
      title: "Accounting for Rental 2",
      description:
        "Same as accounting for rent before, but it can show vehicle and room that already booked and show when the rent is over. This App  using React Vite for Frontend and Supabase for Backend.",
      imageUrl: projek2,
      icons: {
        react: Icon.react,
        vite: Icon.vite,
        supabase: Icon.supabase,
      },
    },
    {
      title: "Landing Page for Rental Business",
      description:
        "This landing page made for advertisement rental at Yogyakarta. It show all the vehicle including Car and Motorcyle with each picture and price and also customer can contact rental business to rent their vehicle. This web App using Vite and Tailwind",
      imageUrl: projek3,
      icons: {
        react: Icon.react,
        vite: Icon.vite,
        tailwind: Icon.tw,
      },
    },
    {
      title: "Portfolio Web",
      description:
        "I make Portfolio Web for my friend. This portfolio show his summary personal data, all the projects that hes done, and all the experience job. This Web App build with Vite and Tailwind.",
      imageUrl: projek4,
      icons: {
        react: Icon.react,
        vite: Icon.vite,
        tailwind: Icon.tw,
      },
    },
    {
      title: "Digital image correlation (thesis)",
      description:
        "For my thesis i made program for monitoring deformation on Dome Merapi Mount at Yogyakarta using Digital Image Correlation method and Digital Elevation Model data. This App build by Python, miniconda, and streamlit for UI",
      imageUrl: projek5,
      icons: {
        python: Icon.python,
        streamlit: Icon.st,
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // auto scroll setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardProjects.length]);

  return (
    <div className="flex flex-col items-center pt-16 pb-10 overflow-x-hidden">
      <h1 className="text-[42px] font-bold">Projects</h1>

      {/* Card aktif */}
      <div className="w-full flex justify-center mt-7 transition-all duration-500">
        <div
          key={activeIndex}
          className="flex flex-col items-center w-[607px] h-[411px] bg-[#272727] rounded-[20px] dark:bg-[#F9F9F9] p-4 shadow-lg animate-fade"
        >
          <img
            src={cardProjects[activeIndex].imageUrl}
            className="bg-white rounded-[15px] w-[421px] h-[192px] mt-5 dark:bg-black drop-shadow-xl/50"
          />
          <p className="mt-5 text-white font-extrabold text-[20px] uppercase dark:text-black">
            {cardProjects[activeIndex].title}
          </p>
          <p className="text-white text-[12px] text-center px-5 dark:text-black">
            {cardProjects[activeIndex].description}
          </p>
          <div className="flex py-2 gap-5">
            {Object.values(cardProjects[activeIndex].icons).map(
              (Icon, index) => (
                <span key={index}>{Icon}</span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Dot navigasi */}
      <div className="flex gap-2 mt-5">
        {cardProjects.map((_, i) => (
          <button key={i} onClick={() => setActiveIndex(i)}>
            <DotIcon
              className={clsx(
                "w-5 h-5 rounded-full transition-all",
                i === activeIndex
                  ? "bg-gray-900 text-gray-900 dark:bg-white dark:text-white"
                  : "bg-gray-600 text-gray-600 dark:bg-gray-300 dark:text-gray-300"
              )}
            />
          </button>
        ))}
      </div>

      {/* Tombol scroll ke atas */}
      <div
        onClick={handleScrollToTop}
        className="font-bold absolute right-5 bottom-5 bg-[#4E4E4E] dark:bg-[#F9F9F9] p-2 rounded cursor-pointer animate-bounce"
      >
        <ArrowUp className="text-white dark:text-black" />
      </div>
    </div>
  );
}
