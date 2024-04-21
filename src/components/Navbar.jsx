import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
   <>
<div className="navbar bg-base-100">
  <div className="flex-1 p-5 ">
    <img src={Logo} alt="Logo" className="w-[4rem] h-[4rem] " />
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
    <ul className="menu menu-horizontal px-1 font-[inter] font-semibold">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Services</a></li>
    </ul>
    </div>
    <div className="dropdown dropdown-end">
        <button className="btn  bg-[#22B5F3] font-[inter] font-semibold text-white drop-shadow-sm">Contact Us</button>
    </div>
  </div>
</div>
   </>
  )
}

export default Navbar