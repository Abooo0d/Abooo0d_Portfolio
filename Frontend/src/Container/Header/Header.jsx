import { motion } from "framer-motion";
import images from "../../Constants/images";

import { AppWrap } from "../../Wrapper/index.js";
import SkillCard from "../../Components/SkillCard.jsx";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp, FaSass } from "react-icons/fa";
const Header = () => {
  return (
    <div className="min-h-[100vh] gap-[20px] max-h-[100vh] scroll app__header flex items-center justify-start md:justify-center relative bg-h omeBg bg-cover bg-repeat bg-center flex-1 w-[100%] flex-col md:flex-row px-8 py-4 pt-24">
      <div className="flex-[0.60] mb-[50px]">
        <div className="relative pl-4">
          <div className="absolute bottom-[-5px] left-[20%] w-[60%] h-[1px] md:left-0 md:top-0 md:h-[100%] md:w-[1px] bg-cu-primary" />
          <h2 className="text-[35px] md:text-[40px] text-cu-primary ">
            Abd Alrhman
          </h2>
          <p className="text-xl text-gray-800 -mt-[10px] text-center md:text-left">
            Fullstack Developer
          </p>
        </div>
        <a
          href="#work"
          className="rounded-full flex w-fit mx-auto mt-4 md:mt-0 py-[4px] px-10 bg-gray-100 border-[1px] border-solid border-cu-primary text-cu-primary text-md font-[700px] md:ml-8 duration-200 hover:bg-cu-primary hover:text-cu-white "
        >
          {" "}
          My Work
        </a>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, delayChildren: 0.5 }}
        className="app__header-img relative flex md:justify-center md:items-center justify-center items-start max-[767px]:px-8 min-h-[100vh]"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          src={images.circle}
          className={"overlay-circle max-[767px]:w-[80%] max-[767px]:mx-auto"}
          alt={"profile-circle"}
        />
        <img
          src={images.profile}
          className={
            "absolute sm:-bottom-[0] left-[50%] translate-x-[-50%] max-[767px]:left-[50%] max-[767px]:translate-x-[-50%] sm:height:[400px] z-0 max-w-full max-[767px]:mx-auto w-[80%]"
          }
          alt="profile"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
