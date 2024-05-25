import aboutUs1 from "../../public/assets/aboutUs1.png";
import aboutUs2 from "../../public/assets/aboutUs2.png";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pb-[5rem] bg-white pt-[78px]">
        <h1 className="text-center text-[#22B5F3] font-bold font-[inter] text-5xl">
          About Us
        </h1>

        <div className="mb-12 flex lg:flex-row flex-col mt-12 gap-8 p-4 items-center">
          <div className="xl:w-1/2 ">
            <img src={aboutUs1} alt="deployment" className="max-w-full" />
          </div>
          <div className="xl:w-1/2">
            <p className="mb-4  font-sans text-base antialiased font-light leading-relaxed text-inherit text-sm md:text-xl">
              At Kaizen Tech and Software Solutions, we embody the spirit of
              innovation and dedication. Our team is driven by a youthful energy
              and a passion for crafting cutting-edge solutions. Our mission is
              clear: to deliver transformative technologies that propel
              businesses to new heights while enriching the lives of individuals
              through meaningful innovation. With a steadfast commitment to
              excellence, we empower our clients to thrive in an ever-evolving
              digital landscape. By harnessing the power of technology, we drive
              growth, foster positive change, and shape a brighter future for
              all. Join us on this journey of innovation and progress.
            </p>
          </div>
        </div>

        <div className="mb-12 flex lg:flex-row flex-col mt-12 gap-8 p-4 items-center">
          <div className="xl:w-1/2 ">
            <img src={aboutUs2} alt="deployment" className="max-w-full" />
          </div>
          <div className="xl:w-1/2">
            <p className="mb-4  font-sans text-base antialiased font-light leading-relaxed text-inherit text-sm md:text-xl">
              Meet the dynamic team behind Kaizen Tech and Software Solutions:
              Carl Saginsin, Ken Santos, Kevin Yu, and Katelyn Ebuiza.
              <br /> Together, we bring a blend of expertise in development and
              UI design to the table. With our combined talents and passion for
              innovation, we are committed to delivering top -notch solutions
              that exceed expectations. Our close-knit team fosters
              collaboration, creativity, and a relentless pursuit of excellence
              in every project we undertake. At Kaizen, we're not just a team —
              we're a family, dedicated to pushing boundaries and shaping the
              future of technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
