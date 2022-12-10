import React from "react";

const Subscribe = () => {
  return (
    <div className="">
      <hr className="bg-slate-500" />
      <div className="grid justify-center py-20 bg-black">
        <div className="min-w-fit text-center pb-14 bg-clip-text bg-gradient-to-r from-pink-300  to-indigo-400">
          <h3 className="text-3xl text-transparent">Get Started Today</h3>
        </div>
        <span className="flex flex-col  sm:flex-row gap-3 sm:gap-7">
          <span className="justify-center rounded-full w-72  sm:w-48 h-14 p-[1.5px]  bg-gradient-to-r from-pink-300  to-indigo-400">
            <a
              className="text-lg  text-white bg-black inline-block transition hover:bg-slate-100 hover:text-black pl-5 py-1  w-full h-full rounded-full "
              href="#"
            >
              Get Started
              <span className="pl-3 pt-2 text-3xl">&rarr;</span>
            </a>
          </span>
          <span className="rounded-full sm:w-48 h-14 p-[1.5px] bg-gray-400">
            <a
              className="text-lg text-white inline-block bg-black  transition hover:bg-slate-100 hover:text-black pl-5 py-3  w-full h-full rounded-full "
              href="#"
            >
              Talk to Sales
            </a>
          </span>
        </span>
      </div>
      <hr className="bg-slate-500" />
    </div>
  );
};

export default Subscribe;
