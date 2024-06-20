import { Link } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { useState, useEffect } from "react";
import Button from "./Button";
function NavigationBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 630);
  };

  useEffect(() => {
    handleResize(); // Check the screen size on initial render
    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize); // Clean up listener on unmount
  }, []);

  return (
    <div className="dark:bg-white">
      <nav className="z-10 w-full py-4 shadow-sm mb-4 dark:bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            <div className="xs:flex md:block lg:flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <div className="flex justify-between w-full xs:p-4 md:p-0 xs:gap-16 sm:gap-28">
                  <div className="flex flex items-center gap-4">
                    <img src="/assets/Logo.png" width={50} alt="" srcSet="" />
                    <Link to="/">
                      <h1 className="font-[inter] text-black dark:text-white text-xl font-bold xs:text-sm">
                        Kaizen Tech &
                      </h1>
                      <h1 className="font-[inter] text-black dark:text-white-300 xs:text-sm">
                        Software Solutions
                      </h1>
                    </Link>
                  </div>
                  <div className="xl:hidden xs:block">
                    <a
                      href="https://calendly.com/kaizentechinnovation/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        {isSmallScreen ? (
                          <>
                            Book <MdCall size={20} />
                          </>
                        ) : (
                          "Schedule a free consultation"
                        )}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex justify-evenly py-6">
                  {/* <Link
                    to="/"
                    className="font-[inter] dark:text-white text-base font-medium xl:mr-6"
                  >
                    Home
                  </Link> */}
                  {/* <Link
                    to="/porfolio"
                    className="font-[inter] dark:text-white text-base font-medium xl:mr-6"
                  >
                    Portfolio
                  </Link> */}
                  <Link
                    to="/about"
                    className="font-[inter] text-black dark:text-white text-base font-medium xl:mr-6"
                  >
                    Our Story
                  </Link>
                  {/* <Link
                    to="/contact"
                    className="font-[inter] dark:text-white text-base font-medium xl:mr-6"
                  >
                    Contact
                  </Link> */}
                </div>
              </div>
              <div className="hidden xl:block">
                <div className="flex items-center justify-between gap-4">
                  <a
                    href="https://calendly.com/kaizentechinnovation/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn bg-[#22B5F3] font-[inter] font-semibold text-white dark:text-white drop-shadow-sm">
                      Schedule a free consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 flex justify-around gap-1 sm:px-8  md:w-full items-center">
            <Link
              to="/"
              className="font-[inter] dark:text-white p-3 text-base font-medium transition-all duration-500 transform  hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-[inter] dark:text-white p-3 text-base font-medium transition-all duration-500 transform  hover:scale-110"
            >
              About
            </Link>

            {/* <Link
              to="/contact"
              className="font-[inter] dark:text-white p-3 text-base font-medium transition-all duration-500 transform  hover:scale-110"
            >
              Contact
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
