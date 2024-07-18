import { motion } from "framer-motion";
import images from "../../Constants/images";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp, FaSass } from "react-icons/fa";
import { AppWrap } from "../../Wrapper/index.js";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="min-h-[100vh] md:max-h-[100vh] scroll app__header flex items-center justify-start md:justify-center relative bg-h omeBg bg-cover bg-repeat bg-center flex-1 w-[100%] flex-col md:flex-row px-8 py-4 pt-24">
      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="app_header-info w-full flex-[0.65] flex flex-col md:justify-center md:items-center h-[100%] mr-0 justify-end items-start"
      >
        <div className="app__header-badge w-[100%] flex flex-col justify-start items-start max-[767px]:justify-end max-[767px]:items-end max-[767px]:px-8">
          <div className="badge-cmp app__flex  py-4 px-8 border-[1px] border-solid border-cu-white rounded-xl w-auto shadow-lg ">
            <span className={"text-2xl"}>👋</span>
            <div className="ml-6">
              {" "}
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Aboood</h1>
            </div>
          </div>
          <div className="tag-cmp flex app__flex py-4 px-8 border-[1px] border-solid border-cu-white rounded-xl w-auto shadow-lg flex-col mb-12 mt-5">
            <p className="text-right p-text w-[100%] uppercase">
              Fullstack Developer
            </p>
            <p className="text-right p-text w-[100%] uppercase">Freelancer</p>
          </div>
        </div>
      </motion.div> */}
      <div className="flex-[0.60] mb-[50px] ">
        <div className="relative pl-4">
          <div className="absolute left-0 top-0 h-[100%] w-[1px] bg-cu-primary" />
          <h2 className="text-[40px] text-cu-primary ">Abd Alrhman </h2>
          <p className="text-xl text-gray-800 -mt-[10px] ">
            Fullstack Developer
          </p>
        </div>
        <button className="rounded-full py-[4px] px-10 bg-gray-100 border-[1px] border-solid border-cu-primary text-cu-primary text-md mt-2 font-[700px] ml-8 duration-200 hover:bg-cu-primary hover:text-cu-white ">
          {" "}
          My Work
        </button>
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.3, delayChildren: 0.5 }}
        className="app__header-img relative flex justify-center items-center max-[767px]:px-8 min-h-[100vh]"
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
            "absolute sm:-bottom-[0] left-[50%] translate-x-[-50%] max-[767px]:left-[50%] max-[767px]:translate-x-[-50%] sm:height:[400px] z-0 max-w-full max-[767px]:mx-auto max-[767px]:w-[70%] "
          }
          alt="profile"
        />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
