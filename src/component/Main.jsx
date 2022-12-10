import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly  pt-8 bg-black ">
      <div className="  pl-8 pr-8 pb-8 text-white ">
        <div className="mt-5 md:mt-20">
          <div className="mb-12">
            <div className=" bg-clip-text bg-gradient-to-r from-pink-300  to-indigo-400 bg-transparent">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light text-transparent ">
                Better Data
              </h1>
            </div>
            <div className=" ">
              <h1 className="text-5xl sm:text-7xl lg:text-9xl   font-light ">
                Faster AI.
              </h1>
            </div>
          </div>
          <p className="mb-10 sm:mb-16 text-lg max-w-xl">
            Better data leads to more performant models. Performant models lead
            {/* to <br /> */}
            faster deployment. Deliver value from your AI investments faster
            with better data.
          </p>
          <span className="flex flex-col sm:flex-row gap-3 sm:gap-7 ">
            <span className="justify-center rounded-full sm:w-48 h-14 p-[1.5px]  bg-gradient-to-r from-pink-300  to-indigo-400">
              <a
                className="text-lg bg-black inline-block transition hover:bg-slate-100 hover:text-black pl-5 py-1  w-full h-full rounded-full "
                href="#"
              >
                Get Started
                <span className="pl-3 text-3xl">&rarr;</span>
              </a>
            </span>
            <span className="rounded-full sm:w-48 h-14 p-[1.5px] bg-gray-400">
              <a
                className="text-lg inline-block bg-black  transition hover:bg-slate-100 hover:text-black pl-5 py-3  w-full h-full rounded-full "
                href="#"
              >
                Talk to Sales
              </a>
            </span>
          </span>
        </div>
      </div>
      <img
        src="./assets/header_img.png"
        className="animate-rotate-sphere w-64 md:w-72 lg:w-96 order-first md:order-last mt-8 md:-mt-5  self-center  object-contain"
        alt=""
      />
    </div>
  );
};

export default Main;
