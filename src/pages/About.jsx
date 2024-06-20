import TeamMembers from "../../json/teammembers.json";
import LeftTimeLineCard from "../components/LeftTimeLineCard.jsx";
import ProfileCard from "../components/ProfileCard.jsx";
import RightTimeLineCard from "../components/RightTimeLineCard.jsx";
import image2 from "../../public/assets/about2.jpg";
const About = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-20">
        <div className="text-center mb-12">
          <h1 className="font-[inter] text-6xl font-bold mb-4 text-white dark:text-black ">
            Take a look at our journey!
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            We've come a long way since our inception. Here's a glimpse of our
            journey so far.
          </p>
        </div>
        <div className="mx-auto w-full h-full">
          <div
            className="relative wrap overflow-hidden h-full 
          xs:px-4 lg:px-0"
          >
            <div
              className="border-2 absolute border-opacity-20 border-gray-700 h-full"
              style={{ left: "50%" }}
            ></div>
            <RightTimeLineCard
              stepNumber="1"
              title="Where It All Began"
              date="August 2022"
              description="Our story begins with a bold vision and unwavering determination. The initial steps were filled with challenges, but they laid the foundation for everything that followed."
            />

            <LeftTimeLineCard
              stepNumber="2"
              title="Accepting Projects"
              date="January 2023"
              description="Our commitment to excellence led us to take on commission projects. These opportunities not only honed our skills but also expanded our portfolio and credibility in the industry."
            />

            <RightTimeLineCard
              stepNumber="3"
              title="Expanding our team"
              date="March 2023"
              description="Fueled by our early successes, we made the strategic decision to expand our business. This phase was marked by increased capacity, a broader market presence, and the pursuit of new opportunities."
            />

            <LeftTimeLineCard
              stepNumber="4"
              title="Get an effective CMO"
              date="November 2023"
              description="Recognizing the need for strong leadership in marketing, we brought on board an effective Chief Marketing Officer. This move significantly enhanced our brand strategy and market reach."
            />

            <RightTimeLineCard
              stepNumber="5"
              title="This is where we are now"
              date="February 2024"
              description="Our current success is a reflection of our hard work, strategic decisions, and the unwavering trust of our clients and partners."
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <section className="mt-20 flex flex-col">
            <div>
              <h1 className="text-center text-white dark:text-black  font-bold font-[inter] text-5xl">
                Meet our Team!
              </h1>
            </div>
            <div className="w-full mx-auto text-center flex justify-center mt-20">
              <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {TeamMembers.map((member, index) => (
                  <ProfileCard key={index} {...member} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <div>
            <h1 className="text-center font-bold text-5xl font-[inter] text-white dark:text-black ">
              Why you should choose us
            </h1>
            <p className="text-center font-[inter] text-gray-700 font-semibold">
              Discover the Difference: Why Choose Us?
            </p>
          </div>
          <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="rounded overflow-hidden flex flex-col max-w-5xl mx-auto">
              <a href="#">
                <img
                  className="w-full rounded-lg"
                  src={image2}
                  alt="Sunset in the mountains"
                />
              </a>
              <div className="relative xs:-mt-8 sm:-mt-14 md:-mt-16 lg:-mt-24 xl:-mt-28 xs:m-4 sm:m-6 md:m-8 lg:m-10 shadow-md px-10 pt-5 pb-16 bg-white  rounded-xl">
                <p className="font-regular font-[inter] text-md text-gray-700 xs:text-xs sm:text-sm md:text-base">
                  When it comes to picking a partner for your business needs,
                  we've got some standout qualities. First off, we really care
                  about your business. Every project we take on gets our full
                  attention, and we make sure to understand exactly what you
                  need before we get started.
                </p>
                <br />
                <p className="font-regular font-[inter] text-md text-gray-700 xs:text-xs sm:text-sm md:text-base">
                  Plus, your satisfaction is super important to us. We promise
                  to go above and beyond to make sure you're happy with the
                  results. And when it comes to pricing, we believe in being
                  fair. You'll get top-notch service without breaking the bank.
                </p>
                <br />
                <p className="font-regular font-[inter] text-md text-gray-700 xs:text-xs sm:text-sm md:text-base">
                  Most importantly, we're honest and upfront in everything we
                  do. We believe in being transparent and trustworthy, so you
                  can feel confident that your project is in good hands. Choose
                  us, and let's make your business goals a reality!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
