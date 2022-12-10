import React, { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className=" bg-black text-white flex justify-between px-12 sm:px-20  md:px-20 py-4 ">
        <img src="./assets/logo.jpg" className="w-20" alt="scale logo" />
        <ul className="gap-8 hidden lg:flex  items-center">
          <li>
            <a href="#Automate" className="hover:text-slate-400 ">
              Automate
            </a>{" "}
          </li>
          <li>
            <a href="#Manage" className="hover:text-slate-400 ">
              Manage
            </a>{" "}
          </li>
          <li>
            <a href="#Generate" className="hover:text-slate-400 ">
              Generate
            </a>{" "}
          </li>
          <li>
            <a href="#Evaluate" className="hover:text-slate-400 ">
              Evaluate
            </a>{" "}
          </li>
        </ul>
        <div className="flex items-center">
          <a href="" className="hover:text-slate-400 hidden lg:block">
            Sign Up
          </a>
          <a
            onClick={() => setActive(true)}
            className=" hover:text-slate-400 text-xl lg:hidden cursor-pointer"
          >
            &#9776;
          </a>
        </div>
      </nav>
      {active && (
        <div
          onClick={() => setActive(false)}
          className="bg-black relative w-screen h-[100vh]"
        >
          <span
            onClick={() => setActive(true)}
            className="absolute left-[2%]  mt-3 bg-zinc-800 w-[95%] h-2/3 px-5 py-2"
          >
            <div className="flex justify-between ">
              <p className="text-white">Menu</p>
              <a
                onClick={() => setActive(false)}
                href="#"
                className="text-white border-2 border-red px-2 font-medium rounded-full active:bg-red-700"
              >
                X
              </a>
            </div>
            <div>
              <ul className="flex flex-col items-center justify-between h-[60vh] pt-5">
                <li className="flex items-center pb-4">
                  <img
                    src="./assets/Automate-icon.png"
                    className="w-8 mr-4"
                    alt=""
                  />
                  <a
                    className="text-white text-xl font-medium"
                    href="#Automate"
                  >
                    Automate
                  </a>
                </li>
                <li className="flex items-center pb-4">
                  <img
                    src="./assets/Manage-icon.png"
                    className="w-9 -ml-5 mr-4"
                    alt=""
                  />
                  <a className="text-white text-xl font-medium" href="#Manage">
                    Manage
                  </a>
                </li>{" "}
                <li className="flex items-center pb-4">
                  <img
                    src="./assets/Generate-icon.png"
                    className="w-8 -ml-2 mr-4"
                    alt=""
                  />
                  <a
                    className="text-white text-xl font-medium"
                    href="#Generate"
                  >
                    Generate
                  </a>
                </li>
                <li className="flex items-center pb-4">
                  <img
                    src="./assets/Evaluate-icon.png"
                    className="w-9 -ml-4 mr-4"
                    alt=""
                  />
                  <a
                    className="text-white text-xl font-medium"
                    href="#Evaluate"
                  >
                    Evaluate
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
      )}
    </>
  );
};

export default Menu;
