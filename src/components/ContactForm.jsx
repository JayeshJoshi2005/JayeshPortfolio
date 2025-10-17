"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6xgifnh",
        "template_mmdfqsc",
        form.current,
        "koilwKuVAVJPkX9b4"
      )
      .then(
        () => alert("Message sent successfully! 🚀"),
        (err) => alert("Failed to send: " + err.text)
      );
  };

  return (
    <div className="md:w-1/2 w-full">
      {/* Heading with underline */}
      <div className="text-left mb-6 ">
        <h2 className="text-4xl  text-center font-bold mx-auto text-white mb-2">
          Contact Me
        </h2>
        <div className="h-1 w-30 bg-[#7F5AF0] rounded-full mx-auto mb-3"></div>
        <p className="text-gray-400 mx-auto max-w-md text-center">
          Got a project, collaboration, or just want to chat about tech and
          ideas? Drop me a message below!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-transparent p-6 rounded-2xl border border-white/10 backdrop-blur-[2px]"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="bg-transparent border border-white/10 px-4 py-2 rounded-md focus:outline-none focus:border-[#7F5AF0]"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="bg-transparent border border-white/10 px-4 py-2 rounded-md focus:outline-none focus:border-[#7F5AF0]"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message..."
          required
          className="bg-transparent border border-white/10 px-4 py-2 rounded-md focus:outline-none focus:border-[#7F5AF0]"
        ></textarea>

        <button className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-gray-200 rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline  focus:outline-white focus:outline-offset-4 overflow-hidden">
          <span className="relative z-20">Send Message</span>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </form>
    </div>
  );
}
