const Flow = () => {
  return (
    <div className="mx-auto mt-40">
      <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-center text-black font-semibold text-[30px] sm:text-[42px] font-[inter]">
          Ideation <span>&rarr;</span> Development <span>&rarr;</span>{" "}
          Deployment
        </h1>
        <p className="text-center text-[10px] sm:text-[16px] font-regular font-[inter] text-black pt-[24px]">
          It all starts with an idea. We help those that have reached the <br />
          point of being ready to extend their business with a relevant <br />
          and impactful software.
        </p>

        <div className="mt-20 grid xl:grid-cols-3 xl:gap-4 gap-20 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center justify-items-center ">
          <div className="mb-4 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl xs:w-[22rem] xl:w-96 sm:w-96  md:w-[22rem] h-[26rem]">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="/dist/assets/ideation.png"
                alt="ideation"
                className="w-[373px] h-[337px] sm:max-w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-[inter] font-semibold text-xl text-black">
                Ideation
              </h5>
              <p className="block font-[inter] text-sm text-gray-700 font-regular">
                Ideation sparks the flame of innovation, where ideas take flight
                and possibilities abound. Its the creative process of
                generating, refining, and shaping concepts into actionable
                plans.
              </p>
            </div>
          </div>

          <div className="mb-4 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  xs:w-[22rem] xl:w-96 sm:w-96 h-[26rem]  md:w-[22rem] ">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="/dist/assets/development.png"
                alt="ideation"
                className="w-full sm:max-w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-[inter] font-semibold text-xl text-black">
                Development
              </h5>
              <p className="block font-[inter] text-sm text-gray-700 font-regular">
                Deployment marks the culmination of hard work and dedication, as
                solutions are unleashed into the world. Its the moment of truth,
                where ideas meet the real world, making an impact and driving
                change.
              </p>
            </div>
          </div>
          <div className="mb-4 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  xs:w-[22rem] xl:w-96 sm:w-96 md:w-[22rem] h-[26rem]">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src="/dist/assets/deployment.png"
                alt="deployment"
                className="w-[373px] h-[337px] sm:max-w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-[inter] font-semibold text-xl text-black">
                Deployment
              </h5>
              <p className="block font-[inter] text-sm text-gray-700 font-regular">
                Development is where ideas come to life, as skilled hands craft
                code, design interfaces, and build functionality. Its a journey
                of problem solving and iteration, where every line of code and
                pixel perfected brings the vision to reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flow;
