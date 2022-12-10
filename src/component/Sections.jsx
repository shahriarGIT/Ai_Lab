import React from "react";

const Sections = () => {
  return (
    <div className="bg-black pb-24 lg:pb-56 pt-20 lg:pt-32">
      <div className="flex  pt-24 pl-2 lg:justify-center overflow-x-auto lg:gap-10">
        <a
          href="#Automate"
          className="group flex-shrink-0 lg:flex-shrink w-52 lg:w-32 mr-10 cursor-pointer"
        >
          <p className="pb-3 text-2xl text-neutral-400 group-hover:text-gray-500 text-center">
            Automate
          </p>
          <img
            src="./assets/Automate-icon.png"
            className="ml-0 lg:border-solid lg:border-2 lg:border-gray-400 lg:rounded-md"
            alt=""
          />
        </a>
        <a
          href="#Manage"
          className="group flex-shrink-0 lg:flex-shrink w-52 lg:w-32 mr-6 cursor-pointer"
        >
          <p className="pb-3 text-2xl text-neutral-400 group-hover:text-gray-500 text-center">
            Manage
          </p>
          <img
            src="./assets/Manage-icon.png"
            className="pl-0 lg:border-solid lg:border-2 lg:border-gray-400 lg:rounded-md"
            alt=""
          />
        </a>
        <a
          href="#Generate"
          className="group flex-shrink-0 lg:flex-shrink  w-44 lg:w-[7.1rem] mr-10 cursor-pointer"
        >
          <p className="pb-3 text-2xl text-neutral-400 group-hover:text-gray-500 text-center">
            Generate
          </p>
          <img
            src="./assets/Generate-icon.png"
            className="ml-2 lg:border-solid lg:border-2 lg:border-gray-400 lg:rounded-md"
            alt=""
          />
        </a>
        <a
          href="#Evaluate"
          className="group flex-shrink-0 lg:flex-shrink  w-48 lg:w-32 mr-10 cursor-pointer"
        >
          <p className="pb-3 text-2xl text-neutral-400 group-hover:text-gray-500 text-center">
            Evaluate
          </p>
          <img
            src="./assets/Evaluate-icon.png"
            className="pl-0 lg:border-solid lg:border-2 lg:border-gray-400 lg:rounded-md"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Sections;
