import services from "../../json/services.json";

const Services = () => {
  return (
    <div className="pb-[5rem] bg-white pt-[100px]">
      <header className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-center text-[#22B5F3] font-semibold text-5xl font-[inter]">
          Our Services
        </h1>
      </header>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid xl:grid-cols-3 xl:gap-4 gap-20 sm:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 items-center justify-items-center ">
        {services.map((service) => (
          <div
            className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 text-center"
            key={service.id}
          >
            <div className="p-6">
              <h5 className="block mb-2 font-[inter] text-3xl antialiased font-bold leading-snug tracking-normal text-black">
                {service.title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {service.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <a href="#" className="inline-block">
                <button
                  className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button"
                >
                  More Info
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
