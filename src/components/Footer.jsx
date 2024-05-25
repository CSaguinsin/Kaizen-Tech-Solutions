import Logo from "../../public/assets/Logo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4 bg-white text-neutral-content">
        <aside className="items-center grid-flow-col space-x-5">
          <img src={Logo} alt="Logo" className="w-[4rem] h-[4rem] " />
          <p className="text-[#939395] font-[inter]">
            © Kaizen Tech and Software Solutions - All right reserved
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
