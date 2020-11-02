import React, {useState, useEffect} from "react";
import Logo from '../../img/logo.png'
import { Link, NavLink } from "react-router-dom";

//Destructure fixed value
const Navigation = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
      <nav className={scroll ? `z-50 fixed top-0 w-full bg-black bg-opacity-75 flex flex-wrap items-center justify-between py-3 navbar-expand-lg mb-3 text-white` : `fixed top-0 mb-10 w-full flex flex-wrap items-center z-50 justify-between py-6 navbar-expand-lg mb-3 text-white`}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
            >
              <img className="w-32" src={Logo} alt="logo" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " block bg-black p-2 bg-opacity-75 shadow-2xl" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <NavLink activeClassName="underline"
                  to="/" exact
                  className="pr-3 py-2 flex items-center text-sm leading-snug  hover:opacity-75"
                >
                  <span className="lg:ml-2">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="underline"
                  to="/services"
                  className="pr-3 py-2 flex items-center text-sm leading-snug  hover:opacity-75"
                >
                  <span className="lg:ml-2">Services</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="underline"
                  to="/portfolio"
                  className="pr-3 py-2 flex items-center text-sm leading-snug  hover:opacity-75"
                >
                  <span className="lg:ml-2">Portfolio</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="underline"
                  to="/blog"
                  className="pr-3 py-2 flex items-center text-sm leading-snug  hover:opacity-75"
                >
                  <span className="lg:ml-2">Blog</span>
                </NavLink>
              </li> 
              <li className="nav-item">
                <NavLink activeClassName="underline"
                  to="/about"
                  className="pr-3 py-2 flex items-center text-sm leading-snug  hover:opacity-75"
                >
                  <span className="lg:ml-2">About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation