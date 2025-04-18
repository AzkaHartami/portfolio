import { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./sections/Section";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Section />
    </>
  );
}
