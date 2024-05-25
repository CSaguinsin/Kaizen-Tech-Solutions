import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from "../../public/assets/Logo.png";
import Button from "./Button";
const Footer = () => {
  return (
    <>
      <footer className="w-full pt-20 flex items-center justify-center bg-black">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3 text-7xl">Let's Talk?</h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between xs:gap-6">
            <p className="w-full md:w-2/3 text-gray-400">
              Are you ready to take your business to the next level? Our free
              consultation offers you the perfect opportunity to explore how our
              expertise can drive your success.
            </p>
            <Button>Book a Consultation</Button>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between items-center">
              <div className="">
                <img src={Logo} width={50} alt="" srcSet="" />
              </div>
              <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase font-[inter]">
                Home
              </a>
              <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase font-[inter">
                Portfolio
              </a>
              <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase font-[inter">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-white hover:text-white uppercase font-[inter">
                Contact
              </a>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <Link>
                  <FaFacebookF />
                </Link>
                <Link>
                  <FaInstagram />
                </Link>
                <Link>
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-gray-600">
              © Kaizen Tech and Software Solutions - All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
