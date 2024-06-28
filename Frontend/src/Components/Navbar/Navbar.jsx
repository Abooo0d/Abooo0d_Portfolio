import { useState } from "react";
import images from "../../Constants/images";
import links from "../../Constants/links";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <>
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-[rgba(255,255,255,0.25)] backdrop-blur border-[1px] border-solid border-[rgba(255,255,255,0.18)] fixed z-[2]">
        <div className="flex justify-start items-center">
          <img
            className="w-[90px] h-[20px] xl:w[180px] xl:h-[40]"
            src={images.logo}
            alt="logo"
          />
        </div>
        <ul className="md:flex hidden flex-1 justify-center items-center gap-1">
          {links.map((item, index) => (
            <div className="relative group flex items-center justify-center">
              <div className="absolute w-[5px] h-[5px] -top-2 left-[50%] -translate-x[50%] bg-transparent rounded-full mb-[5px] group-hover:bg-cu-secondary/80 transition-all duration-300 ease-in-out" />
              <li
                className="app__flex p-text mx-4 my-0 cursor-pointer flex-col group p-1 hover:bg-cu-secondary/80 duration-200 rounded-lg group h-[30px]"
                key={`link-${item}`}
              >
                <a
                  className="text-cu-gray flex-col uppercase font-[500] transition-all duration-300 ease-in-out flex group-hover:text-cu-white "
                  href={`#${item}`}
                >
                  {item}
                </a>
              </li>
              {index < links.length - 1 && (
                <div className="h-[40px] w-[1px] bg-gray-300 " />
              )}
            </div>
          ))}
        </ul>
        <div className="w-[35px] h-[35px] rounded-full relative flex md:hidden justify-center items-center bg-transparent">
          <CgMenuRight
            onClick={() => setToggle((toggle) => !toggle)}
            className="flex w-[32px] h-[32px] text-cu-secondary cursor-pointer hover:bg-cu-secondary/80 hover:text-white duration-200 rounded-lg p-[3px]"
          />
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className=" shadow-lg rounded-bl-2xl fixed top-0 bottom-0 right-0 z-10 p-4 w-[400px] max-w-[100%] h-[50vh] flex justify-start items-start flex-col bg-cu-white bg-menuBg bg-repeat bg-cover "
          >
            <IoCloseCircleOutline
              onClick={() => {
                setToggle(false);
              }}
              className="absolute top-[20px] right-[32px] flex w-[32px] h-[32px] text-cu-secondary hover:bg-cu-secondary/80 hover:text-white duration-200 rounded-lg cursor-pointer p-[3px]"
            />
            <ul className="flex flex-col gap-1 p-4 pt-6 w-[80%]">
              {links.map((item, index) => (
                <>
                  <li
                    className="flex justify-start p-text mx-4 my-0 cursor-pointer flex-col group relative w-[200px] rounded-lg p-2 duration-200 hover:bg-cu-secondary/80 hover:text-cu-white group`"
                    onClick={() => {
                      setToggle(false);
                    }}
                    key={`${item}`}
                  >
                    <div className="w-[5px] h-[5px] bg-transparent rounded-full mb-[5px] group-hover:bg-cu-secondary/80 transition-all duration-300 ease-in-out absolute md:relative top-[50%] left-[-15px] -translate-y-[50%]" />
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
                </>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
