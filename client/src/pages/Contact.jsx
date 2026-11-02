import PageHero from "../components/PageHero.jsx";
import ContactForm from "../sections/Contact.jsx";
import { useScrollTop } from "../hooks/useScrollTop.js";

export default function Contact() {
  useScrollTop();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="IT that works."
        description="Whether you're looking for ongoing IT support or help improving your existing technology infrastructure, Fannin Technologies is ready to start the conversation."
      />
      <ContactForm />
    </>
  );
}
