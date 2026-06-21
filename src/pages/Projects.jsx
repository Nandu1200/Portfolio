import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-10">

        <h1 className="text-5xl text-cyan-400 font-bold mb-10">
          Projects
        </h1>

        <div className="space-y-8">

          {/* AI Resume & Job Matcher */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              AI Resume & Job Matcher
            </h2>

            <p className="text-gray-300">
              AI-powered application that analyzes resumes,
              extracts skills, and matches candidates with
              relevant job opportunities. It provides ATS-style
              analysis and intelligent job recommendations.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="bg-cyan-500 px-3 py-1 rounded">
                Python
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                Streamlit
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                Machine Learning
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                NLP
              </span>
            </div>
          </div>

          {/* Doctor Appointment System */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Doctor Appointment System
            </h2>

            <p className="text-gray-300">
              Full-stack healthcare platform that enables patients
              to discover doctors, book appointments, and manage
              schedules efficiently. Includes pagination, filtering,
              validation, and RESTful APIs.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="bg-cyan-500 px-3 py-1 rounded">
                NestJS
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                PostgreSQL
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                TypeScript
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                REST API
              </span>
            </div>
          </div>

          {/* Car Price Prediction System */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">
              Car Price Prediction System
            </h2>

            <p className="text-gray-300">
              Machine Learning based application that predicts
              vehicle prices using parameters such as vehicle age,
              fuel type, transmission, ownership history and brand.
            </p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="bg-cyan-500 px-3 py-1 rounded">
                Python
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                Flask
              </span>

              <span className="bg-cyan-500 px-3 py-1 rounded">
                Machine Learning
              </span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}