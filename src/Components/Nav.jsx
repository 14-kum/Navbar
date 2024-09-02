import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      <div className="lg:hidden block absolute top-36  left-0 right-0 bg-slate-500 transition">
        <ul className="text-center text-xl  ">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4  py-4 border-white hover:bg-slate-200 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4  py-4 border-white hover:bg-slate-200 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4  py-4 border-white hover:bg-slate-200 hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4  py-4 border-white hover:bg-slate-200 hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4  py-4 border-white hover:bg-slate-200 hover:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="container mx-auto h-14" >
      <div className="h-4vh flex justify-between z-50 text-white lg:py-0 px-20 py-4">
        <div className="PY-4 lg:pt-3" >
          <img
            src="src/assets/logo.jpg"
            alt="Logo"
            className="h-14 w-14 rounded-full "
          />
        </div>
        <div className="lg:flex md:flex-lg flex-1 items-center justify-end font-normal hidden mt-3">
          <div className="flex justify-between ">
            <ul className="flex gap-x-16 mr-16 text-[20px]  ">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover: text-slate-100 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>

              <Link spy={true} smooth={true} to="About">
                <li className="hover: text-slate-100 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Projects">
                <li className="hover: text-slate-100 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Projects
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Services">
                <li className="hover: text-slate-100 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Services
                </li>
              </Link>

              <Link spy={true} smooth={true} to="Contact">
                <li className="hover: text-slate-100 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="mt-3">{click && content}</div>
        <button className=" block lg:hidden  transition text-4xl h-12    " onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

