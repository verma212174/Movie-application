import axios from "axios";
import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

function Header() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-4 py-2 bg-gradient-to-b from-black sm:px-6 sm:py-4 ">
      {/* Logo */}
      <img
        className="w-32 mt-2 sm:w-40 sm:mt-4 "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="text-white focus:outline-none mr-1 "
        >
          {menuOpen ? (
            <FaTimes size={24} className="absolute right-7 top-7" />
          ) : (
            <FaBars size={24} />
          )}
        </button>
      </div>

      {/* User Information */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col items-center md:flex md:flex-row md:space-x-4`}
      >
        {user && (
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <IoIosArrowDropdown
                size="24px"
                color="white"
                className="cursor-pointer hidden lg:block lg:text-lg"
              />
              <h1 className="text-base font-medium text-white hidden lg:block lg:text-lg">
                {user.fullName}
              </h1>
            </div>
            <div className="flex sm:mt- flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 ">
              <button
                onClick={logoutHandler}
                className="bg-red-700 text-white px-3 py-1 rounded-md text-sm sm:px-4 sm:py-1 sm:text-base"
              >
                Logout
              </button>
              <button
                onClick={toggleHandler}
                className="bg-red-700 text-white px-3 py-1 rounded-md text-sm sm:px-4 sm:py-1  sm:text-lg"
              >
                {toggle ? "Home" : "Search Movie"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
