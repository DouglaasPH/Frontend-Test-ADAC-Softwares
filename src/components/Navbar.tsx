// react
import { useState } from "react";

// images
import logo from "../assets/navbar/logo.svg";
import hamburguer from "../assets/navbar/hamburguer.svg";

function Navbar() {
  const [isActiveHamburguer, setIsActiveHamburguer] = useState(false);
  return (
    <div>
      <nav className="max-w-274.25 py-2 px-5 mx-auto sticky flex justify-between items-center">
        <img src={logo} alt="logo" className="h-12" />
        {/* Tablet and desktop navigation */}
        <div className="hidden md:flex w-98.25 items-center justify-between">
          <button className="hover:text-white/75 text-white text-md">
            Home
          </button>
          <button className="hover:text-white/75 text-white text-md">
            Product
          </button>
          <button className="hover:text-white/75 text-white text-md">
            About
          </button>
          <button className="hover:text-white/75 text-white text-md">
            Contact
          </button>
        </div>

        <div className="flex gap-2 h-10">
          <button className="border text-white border-white text-sm px-9">
            Login
          </button>

          {/* Smartphone navigation */}
          <img
            src={hamburguer}
            alt="hamburguer"
            className="block md:hidden"
            onClick={() => setIsActiveHamburguer(!isActiveHamburguer)}
          />
        </div>
      </nav>
      {/* Open Hamburguer */}
      {isActiveHamburguer ? (
        <div className="flex md:hidden flex-col border-t border-white p-2 gap-7">
          <button className="hover:text-white/75 text-white text-lg">
            Home
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            Product
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            About
          </button>
          <button className="hover:text-white/75 text-white text-lg">
            Contact
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
