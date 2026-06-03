import Navbar from "../components/Navbar";

export default function Skills() {

  const skills = [
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Machine Learning",
    "GitHub",
    "Prompt Engineering",
    "LLM Evaluation",
    "NLP",
    "AI Training"
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl text-cyan-400 font-bold mb-10">
          Skills
        </h1>

        <div className="grid md:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </>
  );
}