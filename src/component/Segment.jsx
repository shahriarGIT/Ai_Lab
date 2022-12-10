import React, { useEffect, useRef } from "react";

const Segment = ({
  head,
  para1,
  para2,
  logoImg,
  segmentImg,
  order = false,
  identify,
  paddingTop = false,
}) => {
  const dynamicOrder = order ? "order-last xl:order-first lg:mr-8" : "";
  const paddingT = paddingTop ? "pt-20 lg:pt-36" : "";

  return (
    <div
      className={`bg-black flex flex-col xl:flex-row items-center lg:justify-center ${paddingT} pb-32 px-10 lg:px-36`}
      id={identify}
    >
      <div className={`w-full  xl:w-4/6  pl-5 pt-20 pb-14 lg:pr-8 }`}>
        <img
          src={`./assets/${logoImg}.png`}
          className="w-20 pb-5 -ml-3 "
          alt=""
        />
        <p className="text-slate-300 text-lg  pb-5">{para1}</p>
        <h2 className="text-white  text-5xl  pb-5">{head}</h2>
        <p className="text-slate-300 text-xl leading-relaxed pb-14">{para2}</p>
        <hr />
      </div>
      <div
        className={`${dynamicOrder} w-full xl:w-3/7  py-14  grid justify-items-center items-center  rounded-3xl bg-gradient-to-r from-pink-300  via-indigo-400 to-sky-200`}
      >
        <img
          src={`./assets/${segmentImg}.jpg`}
          className={`w-3/4  rounded-3xl `}
          alt=""
        />
      </div>
    </div>
  );
};

export default Segment;
