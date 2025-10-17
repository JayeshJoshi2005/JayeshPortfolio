"use client";
import ContactForm from "./ContactForm";
import Contact3D from "./Contact3D";

export default function ContactMe() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 pt-20 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl   pb-5">
        <ContactForm />
        <Contact3D />
      </div>
    </section>
  );
}
