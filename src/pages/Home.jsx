import Button from "../components/Button";
import CaseStudy from "../components/CaseStudy";
import Flow from "../components/Flow";
import Services from "../components/Services";
import TechStacks from "../components/TechStacks";
const Home = () => {
  return (
    <>
      <section className="pb-[5rem] mt-20 bg-white">
        <h1 className=" text-center font-semibold font-[inter] text-[#909090] xs:text-xs sm:text-base">
          Kaizen Tech and Software Solutions
        </h1>

        <h1 className="text-center font-bold font-[inter] pt-[16px] text-black xs:text-5xl md:text-8xl mb-4">
          Where <span style={{ color: "#22B5F3" }}>Ideas</span>
          <br />
          Meets <span style={{ color: "#22B5F3" }}>Executions</span>
        </h1>

        <p className="text-center text-[12px] sm:text-[16px] font-regular font-[inter] text-black xs:text-sm md:text-xl">
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
          <Button
            onClick={() =>
              window.open(
                "https://drive.google.com/uc?export=download&id=1tn35B2aaL7GSG37RkMOJhZ5iJReu0jlW",
                "_blank"
              )
            }
            className="btn bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm "
          >
            Company Profile
          </Button>
        </div>
      </section>

      <Flow />
      <Services />
      <CaseStudy />
      <TechStacks />
    </>
  );
};

export default Home;
