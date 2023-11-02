import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userDefault } from "../../assets";
import { logo } from "../../assets";
import AuthContext from "../../context/auth-context";
const link =
  "font-medium px-5 py-2 transition duration-300 rounded-md text-color2 hover:text-color1";

const Navbar = () => {


  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState(false);

  const profilePicture = authCtx.profile.imageUrl;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
      <nav className="bg-outline text-slate-50 flex justify-center items-center font-inter min-h-[50px] py-0 border-b border-slate-300">
   <div className="xl: w-full flex justify-between items-center p-5 bg-base-100 rounded-sm">
          <div className="flex items-center">
            <i
              className={`${
                expand ? "fa-x mr-[3px]" : "fa-bars"
              } fa-solid text-color2 text-2xl cursor-pointer inline md:hidden mr-3`}
              onClick={() => setExpand((prev) => !prev)}
            />
            <Link to="/" className="text-color1 font-inter font-extrabold pl-12 text-3xl">
              <img src={ logo } alt="Logo" className="h-50 w-auto max-h-50"/>
            </Link>
          </div>
          <ul className="md:flex hidden md:space-x-3 ">
            <NavLink to="/" className={link}>
              Home
            </NavLink>
            <NavLink to="/stores" className={link}>
              Stores
            </NavLink>
            {!isLoggedIn && (
              <NavLink to="/viewer-stores" className={link}>
              View
              </NavLink>
            )}
            <NavLink to="/about" className={link}>
              About
            </NavLink>
            <NavLink to="/contact" className={link}>
              Contact
            </NavLink>
          </ul>
          <ul
            className={`${
              expand
                ? "md:hidden flex flex-col justify-center items-center absolute z-10 top-[68px] left-0 right-0 bg-primary space-y-10 py-10"
                : "hidden"
            } `}
          >
            <NavLink to="/" className={link}>
              Home
            </NavLink>
            <NavLink to="/stores" className={link}>
              Stores
            </NavLink>
            <NavLink to="/about" className={link}>  
              About
            </NavLink>
            <NavLink to="/contact" className={link}>
              Contacts
            </NavLink>
          </ul>
          <ul>
            {isLoggedIn && (
              <div>
                <div
                  className="flex items-center space-x-3 text-white cursor-pointer"
                  onClick={() => setShow((prev) => !prev)}
                >
                  <div className="object-cover rounded-full overflow-hidden w-[36px] h-[36px]">
                    <img
                      src={userDefault}
                      alt="profile_picture"
                    />
                  </div>
                  <p className="font-inter">{authCtx.profile.name}</p>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
                <div
                  className={`w-[300px] absolute z-20 text-primary bg-slate-900 border border-color2 
                mt-2 py-3 px-3 rounded-md shadow-md items-center col ${show ? "" : "hidden"}`}
                >
                  <Link
                    to="/profile"
                    className="text-center block mb-3 ml-1 font-medium hover:text-color1"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/stores/add"
                    className=" mb-3 ml-1 font-medium hover:text-color1"
                  >
                    Add Store
                  </Link>
                  <button
                    className="w-full bg-color1 py-2 rounded-md"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
            {!isLoggedIn && (
              <div className="space-x-5">
                <NavLink
                  to="/login"
                  className="btn btn-outline-primary transition duration-300 hover:opacity-70 bg-orange-500"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline-accent transition duration-300 hover:opacity-80"
                >
                  Sign Up
                </NavLink>
                        </div>
            )}
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
