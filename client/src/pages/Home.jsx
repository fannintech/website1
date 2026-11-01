import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero.jsx";
import Services from "../sections/Services.jsx";
import About from "../sections/About.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import Contact from "../sections/Contact.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Contact />
    </>
  );
}
