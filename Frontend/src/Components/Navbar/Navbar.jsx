import React, { useState } from "react";
import images from "../../Constants/images";
import links from "../../Constants/links";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-[rgba(255,255,255,0.25)] backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.18)] fixed z-[2]">
      <div className="flex justify-start items-center">
        <img
          className="w-[90px] h-[20px] xl:w[180px] xl:h-[40]"
          src={images.logo}
          alt="logo"
        />
      </div>
      <ul className="md:flex hidden flex-1 justify-center items-center ">
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
      <div className="w-[35px] h-[35px] rounded-full relative flex justify-center items-center bg-cu-secondary">
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          className="flex md:hidden w-[70%] h-[70%] text-cu-white"
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="fixed top-0 bottom-0 right-0 z-10 p-4 w-[80%] h-[100vh]flex justify-end items-end flex-col bg-cu-white bg-menuBg bg-repeat bg-cover "
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            {links.map((item) => (
              <li
                className="app__flex p-text mx-4 my-0 cursor-pointer flex-col group"
                onClick={() => {
                  setToggle(false);
                }}
                key={`${item}`}
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
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
