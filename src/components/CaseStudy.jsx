import { Link } from "react-router-dom";
import casestudy from "../../json/casestudy.json";
import { IoLogOutOutline } from "react-icons/io5";
const CaseStudy = () => {
  return (
    <div className="pb-[5rem] bg-white pt-[100px]">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-16">
            <h1 className="font-poppins md:text-5xl dark:text-white font-bold text-5xl text-center">
              Check our latest works!
            </h1>
            <br />
            <p className="text-center text-[12px] sm:text-[16px] font-regular font-[inter] text-black">
              We grow businesses and organizations through our impactful digital
              solutions
            </p>
          </div>
          {casestudy.map((item) => (
            <div
              className="mb-4 flex lg:flex-row flex-col mt-12 gap-8 p-4 shadow-sm bg-gray-50 rounded-xl items-center"
              key={item.id}
            >
              <div className="xl:w-1/2 ">
                <img
                  className="md:w-full sm:w-full rounded-md xl:-m-16 hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="xl:w-1/2">
                <button className="mb-4 bg-blue-100 text-blue-800 text-xs font-medium font-[inter] me-2 px-2.5 py-0.5 rounded-full">
                  {item.development}
                </button>
                <h1 className="mb-4 font-[inter] text-3xl font-bold">
                  {item.name}
                </h1>
                <p className="mb-4 font-[inter] xs:text-sm md:text-md">
                  {item.description}
                </p>
                <div className="">
                  <div className="grid xl:grid-cols-7 2xl:grid-cols-9 mt-8 xs:grid-cols-4 xs:gap-2 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-4 sm:gap-4 ">
                    {item.techStack &&
                      Object.values(item.techStack).map((stackImage, index) => (
                        <div
                          key={index}
                          className="xs:w-16 xs:h-16 rounded text-white font-bold p-2 rounded nm-convex-white-100 dark:nm-convex-black-100"
                        >
                          <img
                            src={stackImage}
                            alt={`Tech Stack ${index + 1}`}
                            className="rounded"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <Link
                  to={`/projects/${item.link}`}
                  className="font-[inter] text-sm text-blue-500 flex items-center gap-1"
                >
                  View Case Study
                  <IoLogOutOutline />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
