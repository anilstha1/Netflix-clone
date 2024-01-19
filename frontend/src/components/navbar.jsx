import React, {useEffect, useState} from "react";
import logo from "../assets/netflix-logo.png";
import profile from "../assets/default-profile.png";
import {BsChevronDown, BsBell} from "react-icons/bs";
import {FaSearch} from "react-icons/fa";

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full px-5 fixed z-30 flex flex-row items-center text-white transition ${
        showBackground ? "bg-zinc-900" : ""
      }`}
    >
      <img src={logo} alt="Netflix" className="h-20" />
      <div className="hidden lg:flex flex-row gap-2">
        <div className="hover:underline">Home</div>
        <div className="hover:underline">Series</div>
        <div className="hover:underline">Movies</div>
        <div className="hover:underline">My list</div>
      </div>

      <div
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="lg:hidden relative flex flex-row gap-2 cursor-pointer items-center"
      >
        <p>Browse</p>
        <BsChevronDown
          className={`transition ${showMobileMenu ? "rotate-180" : "rotate-0"}`}
        />
        {showMobileMenu ? (
          <div className="bg-black w-56 py-5 absolute top-8 left-0 flex flex-col border-2 border-gray-800 transition">
            <div className="flex flex-col gap-2">
              <div className="px-3 text-white text-center hover:underline">
                Home
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="ml-auto flex flex-row gap-5 items-center text-gray-300 cursor-pointer">
        <FaSearch />
        <BsBell />
        <div className="flex flex-row gap-2 relative items-center">
          <div
            onClick={() => {
              setShowAccountMenu(!showAccountMenu);
            }}
            className="flex flex-row gap-2 items-center"
          >
            <img src={profile} alt="profile" className="h-8" />
            <BsChevronDown
              className={`transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {showAccountMenu ? (
            <div className="bg-black w-56 py-5 absolute top-14 right-0 flex flex-col border-2 border-gray-800 transition">
              <div className="flex flex-col gap-2">
                <div className="px-3 flex flex-row gap-3 items-center hover:bg-zinc-600 py-3">
                  <img src={profile} alt="profile" className="h-8" />
                  <p>Username</p>
                </div>
                <button className="text-left pl-3 py-3 hover:bg-zinc-600">
                  Sign out of netflix
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
