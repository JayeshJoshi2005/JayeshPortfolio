"use client";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export default function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen text-center md:text-left"
    >
      <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mt-10 px-6 w-full gap-8">
        {/* Left side - Text */}
        <div className="flex-1 flex flex-col items-center md:items-start mt-10">
          <h1 className=" text-4xl md:text-4xl font-semibold mb-3 text-gray-100">
            Hey, I’m <span className="text-[#7F5AF0]">Jayesh Joshi</span> 👋
          </h1>
          <p className=" font-light text-gray-200 mb-6 flex items-center gap-2">
            <LocationOnIcon className="text-gray-200 w-5 h-5" />
            Delhi, India • Student at Delhi Technological University (DTU)
          </p>
          <p className="text-xl font-light text-white mb-6 ">
          A passionate Software Developer skilled in Full-Stack Development, passionate about crafting efficient, user-focused solutions, and constantly exploring emerging technologies.
          </p>
          <div className="flex gap-4 mt-4 justify-center items-center">
            {/* Email */}
            <a
              href="mailto:jayeshjoshi2005@gmail.com"
              className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/20 rounded-lg hover:scale-110 transition-transform text-white shadow-md"
            >
              <EmailIcon fontSize="large" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JayeshJoshi2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/20 rounded-lg hover:scale-110 transition-transform text-white shadow-md"
            >
              <GitHubIcon fontSize="large" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jayesh-joshi-b99464294/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/20 rounded-lg hover:scale-110 transition-transform text-white shadow-md"
            >
              <LinkedInIcon fontSize="large" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/JayeshJoshi2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/20 rounded-lg hover:scale-110 transition-transform text-white shadow-md"
            >
              <XIcon fontSize="large" />
            </a>

            
          </div>
        </div>

        {/* Right side - Picture */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/ghibli.png" // replace with your image
            alt="Jayesh"
            className="w-64 md:w-120 rounded-full shadow-2xl "
          />
        </div>
      </div>
    </section>
  );
}
