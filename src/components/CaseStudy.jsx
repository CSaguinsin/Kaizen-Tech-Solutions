import { Link } from "react-router-dom";
import casestudy from "../../json/casestudy.json";
import { IoLogOutOutline } from "react-icons/io5";
const CaseStudy = () => {
  return (
    <div className="pb-[5rem] bg-white pt-[100px]">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="mb-16">
            <h1 className="font-[inter] md:text-5xl text-black dark:text-white font-bold text-5xl text-center">
              Explore Our Recent Projects!
            </h1>
            <br />
            <p className="text-center text-[12px] sm:text-[18px] font-regular font-[inter] text-black dark:text-white">
              Take a Journey Through Our Latest Achievements and See How We Turn
              Visions into Reality!
            </p>
          </div>
          {casestudy.map((item) => (
            <div
              className="bg-gray-50 xl:bg-white mb-4 flex lg:flex-row flex-col mt-12 gap-8 p-4 shadow-sm  rounded-xl items-center"
              key={item.id}
            >
              <div className="xl:w-1/2 ">
                <img
                  className="md:w-full sm:w-full rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </div>
              <div className="xl:w-1/2 p-4 xl:bg-gray-50 rounded-md">
                <button className="mb-4 bg-blue-100 text-blue-800 text-xs font-medium font-[inter] me-2 px-3 py-1 rounded-full">
                  {item.development}
                </button>
                <h1 className="mb-4 font-[inter] text-3xl font-bold text-black dark:text-white">
                  {item.name}
                </h1>
                <p className="mb-4 font-[inter] xs:text-sm md:text-md text-black dark:text-white">
                  {item.description}
                </p>
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
