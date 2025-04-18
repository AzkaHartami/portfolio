import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false); // close menu on mobile
  };

  const navItemClass = (section: string) =>
    `text-base transition-all duration-300 ${
      activeSection === section
        ? "font-semibold underline underline-offset-4"
        : "font-normal"
    } hover:underline`;

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 shadow-md fixed bg-[#FFFFFF] dark:bg-[#000000] text-[#000000] dark:text-[#FFFFFF] z-50">
      <div className="text-2xl font-bold">HARTAMI</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        <li>
          <a
            href="#home"
            onClick={() => handleClick("home")}
            className={navItemClass("home")}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => handleClick("about")}
            className={navItemClass("about")}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#project"
            onClick={() => handleClick("project")}
            className={navItemClass("project")}
          >
            PROJECT
          </a>
        </li>
      </ul>

      {/* Hamburger Button */}
      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FFFFFF] dark:bg-[#000000] shadow-md px-6 py-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#home"
                onClick={() => handleClick("home")}
                className={navItemClass("home")}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleClick("about")}
                className={navItemClass("about")}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => handleClick("project")}
                className={navItemClass("project")}
              >
                PROJECT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
