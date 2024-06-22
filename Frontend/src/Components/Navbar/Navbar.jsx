import React from "react";
import images from "../../Constants/images";
import links from "../../Constants/links";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-[rgba(255,255,255,0.25)] backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.18)] fixed z-[2]">
      <div className="flex justify-start items-center">
        <img
          className="w-[90px] h-[20px] xl:w[180px] xl:h-[40]"
          src={images.logo}
          alt="logo"
        />
      </div>
      <ul className="flex flex-1 justify-center items-center ">
        {links.map((item) => (
          <li
            className="app__flex p-text mx-4 my-0 cursor-pointer flex-col group"
            key={`link-${item}`}
          >
            <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-cu-secondary transition-all duration-300 ease-in-out" />
            <a
              className="text-cu-gray flex-col uppercase font-[500] transition-all duration-300 ease-in-out flex hover:text-cu-secondary"
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
