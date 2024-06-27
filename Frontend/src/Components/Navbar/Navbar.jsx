import { useState } from "react";
import images from "../../Constants/images";
import links from "../../Constants/links";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
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
      <div className="w-[35px] h-[35px] rounded-full relative flex md:hidden justify-center items-center bg-transparent">
        <HiMenuAlt4
          onClick={() => setToggle((toggle) => !toggle)}
          className="flex w-[32px] h-[32px] text-cu-secondary cursor-pointer"
        />
        <motion.div
          animate={toggle ? "open" : "closed"}
          variants={variants}
          className=" shadow-lg rounded-bl-2xl fixed top-0 bottom-0 right-0 z-10 p-4 w-[40%] h-[50vh] flex justify-start items-center flex-col bg-cu-white bg-menuBg bg-repeat bg-cover "
        >
          <HiX
            onClick={() => {
              setToggle(false);
            }}
            className="absolute top-[20px] right-[32px] text-cu-secondary w-[30px] h-[30px] rounded-full duration-200 cursor-pointer"
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
      </div>
      {/* <HiMenuAlt4
        onClick={() => setToggle((toggle) => !toggle)}
        className="flex w-[35px] h-[35px] text-cu-white bg-cu-secondary"
      />
      <motion.div animate={toggle ? "open" : "closed"} variants={variants}>
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
      </motion.div> */}
    </nav>
  );
};

export default Navbar;
