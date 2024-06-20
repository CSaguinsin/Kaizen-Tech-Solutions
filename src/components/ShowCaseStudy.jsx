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
      <header className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-20 p-6">
        <h1 className="xs:mb-6 md font-[inter] xs:text-md md:text-4xl xl:text-5xl font-bold text-white dark:text-black ">
          {project.subHeader}
        </h1>
        <button className="mb-4 bg-blue-100 text-blue-800 font-medium  font-[inter] me-2 px-6 py-2 rounded-full xs:text-sm md:text-lg">
          {project.development}
        </button>
      </header>
      <img
        src={project.headerImage}
        alt={`${project.name} logo`}
        className="cover-image w-full h-[700px] object-cover rounded-md"
      />
      <div className="mt-12 max-w-7xl mx-auto lg:flex gap-4">
        <div className="lg:w-1/4 lg:block xs:w-full xs:p-4 sm:grid sm:grid-cols-3">
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] xs:text-md md:text-xl text-white dark:text-black ">
              Industry
            </h1>
            <p className="mb-2 font-[inter] xs:text-sm md:text-md text-gray-600 text-white dark:text-black ">
              {project.industry}
            </p>
          </section>
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] xs:text-md md:text-xl text-white dark:text-black ">
              Duration
            </h1>
            <p className="mb-2 font-[inter] xs:text-sm md:text-md text-gray-600 text-white dark:text-black  ">
              {project.duration}
            </p>
          </section>
          <section className="mb-4">
            <h1 className="mb-2 font-bold font-[inter] xs:text-md md:text-xl text-white dark:text-black ">
              Company Size
            </h1>
            <p className="mb-2 font-[inter] xs:text-sm md:text-md text-gray-600 text-white dark:text-black ">
              {project.companySize}
            </p>
          </section>

          <section className="mb-4 mt-20 w-full text-center">
            <button
              className="xs:w-full text-center justify-center flex items-center gap-2 font-[inter] font-bold transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-12 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
              type="button"
              onClick={() => window.open(project.url, "_blank")}
            >
              Visit Website <GoArrowUpRight size={20} />
            </button>
          </section>
        </div>

        <div className="p-4 lg:w-full">
          <p className="mb-4 font-[inter] xs:text-sm md:text-lg text-white dark:text-black ">
            {project.description}
          </p>
          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black ">
              Problem Statement
            </h1>
            <p className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black ">
              {project.problemStatement}
            </p>
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black ">
              Objectives & Goals
            </h1>
            {project.objectives && (
              <ul className="list-disc ml-4">
                {Object.values(project.objectives).map((obj, index) => (
                  <li
                    key={index}
                    className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black"
                  >
                    {obj}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black">
              Business Challenges
            </h1>
            {project.userNeeds && (
              <ul className="list-disc ml-4">
                {Object.values(project.businessChallenges).map(
                  (business, index) => (
                    <li
                      key={index}
                      className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black"
                    >
                      {business}
                    </li>
                  )
                )}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black">
              User Needs
            </h1>
            {project.userNeeds && (
              <ul className="list-disc ml-4">
                {Object.values(project.userNeeds).map((needs, index) => (
                  <li
                    key={index}
                    className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black"
                  >
                    {needs}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black">
              Solution
            </h1>
            {project.solution && (
              <ul className="list-disc ml-4">
                {Object.values(project.solution).map((sol, index) => (
                  <li
                    key={index}
                    className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black"
                  >
                    {sol}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mb-8">
            <h1 className="font-bold font-[inter] mb-4 xs:text-xl md:text-2xl text-white dark:text-black">
              Closing Remarks
            </h1>
            <p className="font-[inter] text-md xs:text-sm md:text-lg text-white dark:text-black">
              {project.closingRemarks}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseStudy;
