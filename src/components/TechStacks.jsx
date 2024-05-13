import React from "../assets/react.png";
import Laravel from "../assets/laravel.png";
const TechStacks = () => {
  return (
    <div>
      <section className="bg-black pt-[86px] pb-10">
        <h1 className="text-center text-white font-semibold  text-[32px] sm:text-[42px] font-[inter]">
          Our Tech Stack
        </h1>
        <p className="text-center text-[11px] sm:text-[16px] font-regular font-[inter] text-white pt-[24px]">
          With a carefully curated tech stack, we are equipped to tackle any
          project with ease. <br />
          Harnessing the power of PHP and JavaScript, alongside frameworks like
          Laravel and React, <br />
          we build exceptional solutions. Coupled with robust databases, cloud
          infrastructure, and DevOps <br />
          proficiency, we are ready to overcome any challenge. Rest assured, our
          tech expertise ensures <br />
          top-notch delivery every time.
        </p>

        <div className="flex justify-center pt-[40px]">
          <hr className="border-white  w-[50rem]" />
        </div>

        <div className=" lg:space-x-[22rem] sm:flex justify-center pt-[40px]">
          <div className="pb-10 sm:flex justify-center">
            <h1 className="text-center text-[24px] font-light font-[inter] text-white">
              Front end Tech Stack
            </h1>
          </div>
          <div>
            <div className="flex space-x-3">
              <img src={React} alt="React" className="w-[37px] h-[37px]" />
              <p className="text-white pt-1 font-[inter]">React</p>
            </div>
          </div>
        </div>

        <div className=" lg:space-x-[22rem] sm:flex justify-center pt-[40px]">
          <div className="pb-10 sm: justify-center">
            <h1 className="text-center text-[24px] font-light font-[inter] text-white">
              Back end Tech Stack
            </h1>
          </div>
          <div>
            <div className="flex space-x-3">
              <img src={Laravel} alt="React" className="w-[37px] h-[37px]" />
              <p className="text-white pt-1 font-[inter]">Laravel</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStacks;
