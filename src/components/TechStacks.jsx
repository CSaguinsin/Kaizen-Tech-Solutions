import techStack from "../../json/techstack.json";
const TechStacks = () => {
  return (
    <div>
      <section className="bg-white pt-[86px] pb-10 max-w-7xl mx-auto mb-12">
        <div className="">
          <h1 className="font-[inter] md:text-5xl  font-bold text-5xl text-center mb-4">
            Our Tech Stack
          </h1>
          <p className="text-center text-[11px] xs:text-sm font-regular font-[inter] text-black  xs:px-4 md:px-12 lg:text-lg lg:px-24">
            With a carefully curated tech stack, we are equipped to tackle any
            project with ease. Harnessing the power of PHP and JavaScript,
            alongside frameworks like Laravel and React, we build exceptional
            solutions. Coupled with robust databases, cloud infrastructure, and
            DevOps proficiency, we are ready to overcome any challenge. Rest
            assured, our tech expertise ensures top-notch delivery every time.
          </p>
        </div>
        <div className="flex justify-center pt-[40px]">
          <hr className="border-black  w-80 w-full mb-12" />
        </div>

        <div className="max-w-7xl text-center flex justify-center mx-auto">
          <div className="grid xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-12 gap-4">
            {techStack.map((item) => (
              <div className="grid gap-4" key={item.id}>
                <div className="rounded-full flex items-center justify-center w-20 h-20 shadow-md bg-gray-50 ">
                  <img
                    className="h-auto max-w-full rounded-md p-5"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechStacks;
