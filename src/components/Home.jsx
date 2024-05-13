import About from "./About";
import Flow from "./Flow";
import Services from "./Services";
import TechStacks from "./TechStacks";
const Home = () => {
  return (
    <>
      <section className="pb-[5rem] bg-white ">
        <h1 className=" text-center font-semibold font-[inter] text-[#909090] text-[10px] sm:text-[16px]">
          Kaizen Tech and Software Solutions
        </h1>

        <h1 className="text-center font-bold font-[inter] pt-[16px] text-black text-[65px] sm:text-[100px] ">
          Where <span style={{ color: "#22B5F3" }}>Ideas</span>
          <br />
          Meets <span style={{ color: "#22B5F3" }}>Executions</span>
        </h1>

        <p className="text-center text-[12px] sm:text-[16px] font-regular font-[inter] text-black">
          Kaizen Tech and Software Solutions, based in the Philippines, pioneers
          bespoke <br />
          website development, elevating brands and driving online growth.
        </p>
        {/* <div className="text-center flex justify-center pt-5">
              <a href="https://calendly.com/kaizentechinnovation/30min" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm">
                  Schedule a free consultation
                </button>
              </a>
            </div> */}
        <div className="text-center flex justify-center pt-10">
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1tn35B2aaL7GSG37RkMOJhZ5iJReu0jlW",
                "_blank"
              )
            }
            className="btn bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm"
          >
            Company Profile
          </button>
        </div>
      </section>

      <Flow />
      <About />
      <Services />
      <TechStacks />
      <section className="pb-[5rem] bg-white pt-[100px]">
        <h1 className="text-center text-[#939395] font-semibold text-[20px] font-[inter]">
          Want to start a project?
        </h1>
        <h1 className="text-center text-black font-bold text-[124px] font-[inter]">
          Let’s Talk
        </h1>
        <div className="text-center flex justify-center pt-5">
          <a
            href="https://calendly.com/kaizentechinnovation/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn  bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm">
              Schedule a free consultation
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
