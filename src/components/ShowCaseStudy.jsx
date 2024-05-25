import { useParams } from "react-router-dom";
import projects from "../../json/casestudy.json";
import { GoArrowUpRight } from "react-icons/go";
const ShowCaseStudy = () => {
  const { slug } = useParams(); // Access the slug sfrom the URL
  const project = projects.find((p) => p.link === slug);

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <div className="">
      <header className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-20">
        <h1 className="mb-12 font-[inter] text-5xl font-bold">
          {project.subHeader}
        </h1>
        <button className="mb-4 bg-blue-100 text-blue-800 text-lg font-medium font-[inter] me-2 px-6 py-2 rounded-full">
          {project.development}
        </button>
      </header>
      <img
        src={project.headerImage}
        alt={`${project.name} logo`}
        className="cover-image w-full h-[700px] object-cover rounded-md"
      />
      <div className="mt-12 max-w-7xl mx-auto flex gap-4">
        <div className="w-1/4">
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] text-xl">Industry</h1>
            <p className="mb-2 font-[inter] text-md text-gray-600">
              {project.industry}
            </p>
          </section>
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] text-xl">Duration</h1>
            <p className="mb-2 font-[inter] text-md text-gray-600">
              {project.duration}
            </p>
          </section>
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] text-xl">
              Company Size
            </h1>
            <p className="mb-2 font-[inter] text-md text-gray-600">
              {project.companySize}
            </p>
          </section>

          <section className="mb-4 mt-20">
            <button
              className=" flex items-center gap-2 font-[inter] font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-12 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
              type="button"
            >
              Visit Website <GoArrowUpRight size={20} />
            </button>
          </section>
        </div>

        <div className="w-3/4">
          <p className="mb-4 font-[inter] text-">{project.description}</p>
          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">
              Problem Statement
            </h1>
            <p className="font-[inter] text-md">{project.problemStatement}</p>
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">
              Objectives & Goals
            </h1>
            {project.objectives && (
              <ul className="list-disc ml-4">
                {Object.values(project.objectives).map((obj, index) => (
                  <li key={index} className="text-black">
                    {obj}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">
              Business Challenges
            </h1>
            <p className="font-[inter] text-md">{project.businessChallenges}</p>
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">User Needs</h1>
            {project.userNeeds && (
              <ul className="list-disc ml-4">
                {Object.values(project.userNeeds).map((needs, index) => (
                  <li key={index} className="text-black">
                    {needs}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">Solution</h1>
            {project.solution && (
              <ul className="list-disc ml-4">
                {Object.values(project.solution).map((sol, index) => (
                  <li key={index} className="text-black">
                    {sol}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 text-2xl">
              Closing Remarks
            </h1>
            <p className="font-[inter] text-md">{project.closingRemarks}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseStudy;
