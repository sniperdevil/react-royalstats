import React, { Component } from "react";
import Logo from "../../assests/SvgIcon/Logo";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Logo />
            <span className="ml-3 text-xl">Royalstats</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/player"
              className="mr-5 transform hover:text-gray-900 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 "
            >
              Player
            </Link>
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 "
            >
              clans
            </Link>
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 "
            >
              tournament
            </Link>
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 "
            >
              upcoming chests
            </Link>
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 uppercase transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 "
            >
              leaderboard
            </Link>
          </nav>
          <button className="uppercase cursor-pointer hover:shadow-lg bg-black border-0 py-2 px-6 rounded-full text-base text-white mt-4 md:mt-0">
            report
          </button>
        </div>
      </header>
    );
  }
}

export default Navbar;
