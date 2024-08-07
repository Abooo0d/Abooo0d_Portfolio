import { useState } from "react";
import images from "../Constants/images.js";
import links from "../Constants/links.js";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, zIndex: -10, x: -50 },
  };
  return (
    <>
      <nav className="z-[100] w-full flex justify-between items-center px-8 py-4 bg-[rgba(255,255,255,0.25)] backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.18)] fixed ">
        <div className="flex justify-start items-center">
          <img
            className="w-[90px] h-[30px] xl:w[180px] xl:h-[40] cursor-pointer "
            src={images.Abood}
            alt="logo"
          />
        </div>
        <ul className="md:flex hidden flex-1 justify-center items-center gap-1">
          {links.map((item) => (
            <div
              className="relative group flex items-center justify-center duration-300 hover:-rotate-[6deg]"
              key={`link-${item}`}
            >
              <li className="app__flex p-text mx-4 my-0 cursor-pointer flex-col group p-1 duration-200 rounded-lg group h-[30px]">
                <a
                  className="text-cu-primary font-bold flex-col uppercase transition-all duration-300 ease-in-out flex "
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
            </div>
          ))}
        </ul>
        <div className="w-[35px] h-[35px] rounded-full relative flex md:hidden justify-center items-center bg-transparent">
          <CgMenuRight
            onClick={() => setToggle((toggle) => !toggle)}
            className="flex w-[32px] h-[32px] text-cu-primary cursor-pointer hover:bg-cu-primary hover:text-white duration-200 rounded-lg p-[3px]"
          />
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className=" shadow-lg rounded-bl-2xl fixed top-0 bottom-0 right-0 z-10 p-4 w-[350px] max-w-[100%] h-[40vh] flex justify-start items-start flex-col bg-cu-white bg-menuBg bg-repeat bg-cover duration-400 "
          >
            <IoCloseCircleOutline
              onClick={() => {
                setToggle(false);
              }}
              className="absolute top-[20px] right-[32px] flex w-[32px] h-[32px] text-cu-primary hover:bg-cu-secondary hover:text-white duration-200 rounded-lg cursor-pointer p-[3px]"
            />
            <ul className="flex flex-col gap-1 p-4 pt-6 w-full">
              {links.map((item, index) => (
                <div key={`${item}`}>
                  <li
                    className="flex justify-start p-text mx-4 my-0 cursor-pointer flex-col group relative w-[200px] rounded-lg p-2 duration-200 hover:bg-cu-primary hover:text-cu-white group`"
                    onClick={() => {
                      setToggle(false);
                    }}
                    key={`${item}`}
                  >
                    {/* <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-cu-primary transition-all duration-300 ease-in-out absolute md:relative top-[50%] left-[-15px] -translate-y-[50%]" /> */}
                    <a
                      className="text-cu-gray flex-col uppercase font-[500] transition-all duration-300 ease-in-out flex group-hover:text-cu-white"
                      href={`#${item}`}
                    >
                      {item}
                    </a>
                  </li>
                  {index < links.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-200" />
                  )}
                </div>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
