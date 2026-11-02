import PageHero from "../components/PageHero.jsx";
import AboutSection from "../sections/About.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import { useScrollTop } from "../hooks/useScrollTop.js";

export default function About() {
  useScrollTop();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology you can depend on."
        description="Fannin Technologies helps businesses simplify IT management and get more from their technology investments."
        primaryCta={{ to: "/contact", label: "Contact Us" }}
      />
      <AboutSection hideIntro />
      <WhyChoose />
    </>
  );
}
