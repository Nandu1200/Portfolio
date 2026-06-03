import Navbar from "../components/Navbar";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">

        <div className="text-center">

          <img
            src={profileImg}
            alt="Narendra Singh Bhadouriya"
            className="w-52 h-52 rounded-full border-4 border-cyan-400 object-cover mx-auto mb-8"
          />

          <h1 className="text-5xl md:text-7xl font-bold">
            Narendra Singh
            <span className="text-cyan-400"> Bhadouriya</span>
          </h1>

          <p className="mt-5 text-2xl">
            Full Stack Developer | Machine Learning Enthusiast
          </p>

          <p className="mt-3 text-cyan-400">
            Former LLM Trainer Intern at Ethara
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            Passionate about building AI-powered applications,
            scalable web solutions and solving real-world problems.
          </p>

        </div>

      </div>
    </>
  );
}