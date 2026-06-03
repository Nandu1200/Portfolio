import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl text-cyan-400 font-bold mb-8">
          Contact
        </h1>

        <p className="text-xl mb-4">
          📧 narendrabhadou18@gmail.com
        </p>

        <p className="text-xl mb-8">
          📱 6268176912
        </p>

        <div className="flex gap-8 text-2xl">

          <a
            href="https://github.com/Nandu1200"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/narendra-bhadouriya-948b97325/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </>
  );
}