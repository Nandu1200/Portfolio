import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl text-cyan-400 font-bold mb-8">
          About Me
        </h1>

        <p className="text-xl leading-8 max-w-4xl">
          I am Narendra Singh Bhadouriya, a Computer Science
          Engineering student at Amity University.
          I have strong interests in Full Stack Development,
          Artificial Intelligence and Machine Learning.
        </p>

        <h2 className="text-3xl font-bold text-cyan-400 mt-12 mb-5">
          Internship Experience
        </h2>

        <div className="bg-slate-800 p-6 rounded-lg">

          <h3 className="text-2xl font-semibold">
            LLM Trainer Intern
          </h3>

          <p className="text-cyan-300 mt-2">
            Ethara
          </p>

          <p className="mt-4 text-gray-300">
            Worked on AI model training, prompt evaluation,
            response quality assessment and data annotation.
            Gained practical experience with Large Language Models,
            NLP concepts and Prompt Engineering.
          </p>

        </div>

      </div>
    </>
  );
}