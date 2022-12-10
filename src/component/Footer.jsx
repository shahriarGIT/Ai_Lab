import React from "react";

const Footer = () => {
  return (
    <div className="bg-black grid grid-cols-2 sm:grid-cols-3 px-18 md:px-28 pt-8 pb-2">
      <section className="justify-self-center">
        <h2 className="pb-2 text-gray-300 text-1xl font-medium ">COMPANY</h2>
        <ul className="">
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            About
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            Careers
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            Security
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            Legal
          </li>
        </ul>
      </section>

      <section className="justify-self-center">
        <h2 className="pb-2 text-gray-300 text-1xl font-medium "> FIND US</h2>
        <ul className="">
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            Facebook
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            LinkedIn
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            Twitter
          </li>
        </ul>
      </section>

      <section className="justify-self-center pl-12 pt-4 sm:pl-0 sm:pt-0">
        <h2 className="pb-2 text-gray-300 text-1xl font-medium ">CONTACT</h2>
        <ul className="">
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            sales@scale.com
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            support@scale.com
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            careers@scale.com
          </li>
          <li className="text-base font-normal text-gray-300 hover:text-gray-500 cursor-pointer pb-2">
            press@scale.com
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
