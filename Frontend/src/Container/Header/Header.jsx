import { motion } from "framer-motion";
import images from "../../Constants/images";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp,FaSass } from "react-icons/fa";
import {AppWrap} from "../../Wrapper/index.js";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },       
  };
  return (
    <div
         className="min-h-[100vh] md:max-h-[100vh]  scroll app__header flex items-center justify-start md:justify-center relative bg-homeBg bg-cover bg-repeat bg-center flex-1 w-[100%] flex-col md:flex-row px-8 py-4 pt-24">
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.8}}
        className="app_header-info w-full flex-[0.65] flex flex-col md:justify-center md:items-center h-[100%] mr-0 justify-end items-start"
      >
        <div
          className="app__header-badge w-[100%] flex flex-col justify-start items-start max-[767px]:justify-end max-[767px]:items-end max-[767px]:px-8">
          <div
            className="badge-cmp app__flex  py-4 px-8 border-[1px] border-solid border-cu-white rounded-xl w-auto shadow-lg ">
            <span className={'text-2xl'}>👋</span>
            <div className="ml-6">
              {" "}
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Aboood</h1>
            </div>
          </div>
          <div
            className="tag-cmp flex app__flex py-4 px-8 border-[1px] border-solid border-cu-white rounded-xl w-auto shadow-lg flex-col mb-12 mt-5">
            <p className="text-right p-text w-[100%] uppercase">Fullstack Developer</p>
            <p className="text-right p-text w-[100%] uppercase">Freelancer</p>
          </div>
        </div>

      </motion.div>
      <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.3, delayChildren: 0.5}}
        className="app__header-img relative flex justify-center items-center max-[767px]:px-8"
      >
        <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          src={images.circle}
          className={"overlay-circle max-[767px]:w-[80%] max-[767px]:mx-auto"}
          alt={'profile-circle'}
        />
        <img src={images.profile} className={'absolute sm:-top-[80px] left-[50%] translate-x-[-50%] max-[767px]:left-[50%] max-[767px]:translate-x-[-50%] sm:height:[400px] z-0 max-w-full max-[767px]:mx-auto max-[767px]:w-[70%] '} alt="profile"/>
      </motion.div>
      <div
        className={"hidden md:flex flex-row md:flex-col justify-center items-start flex-wrap md:flex-[0.60] mt-24 xs:mt-28  md:mt-8 gap-x-[20px] md:gap-3 md:ml-14 xs:gap-y-2"}>
        {/*grid grid-cols-3 gap-x-12 gap-y-4*/}
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="skills__con"
        >
          <div
            className="skills__circle w-[80px] h-[80px] md:mx-2 bg-indigo-900 hover:shadow-[0px_0px_20px_4px_#312e81] ">
            <FaPhp className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="skills__con"
        >
          <div
            className="skills__circle w-[120px] h-[120px] mt-[20px] xs:mt-0 md:mt-0 md:mx-14 bg-blue-400 hover:shadow-[0px_0px_20px_4px_#60a5fa]">
            <FaReact className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="skills__con"
        >
          <div className="skills__circle w-[95px] h-[95px] -mt-[30px] xs:mt-0 md:mt-0 bg-red-700 md:mx-12 hover:shadow-[0px_0px_20px_4px_#b91c1c]">
            <FaLaravel className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="skills__con"
        >
          <div
            className="skills__circle w-[95px] h-[95px] mt-[30px] xs:mt-0 md:mx-8 md:mt-0 bg-amber-400 hover:shadow-[0px_0px_20px_4px_#fbbf24]">
            <DiJavascript1 className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="skills__con"
        >
          <div
            className="skills__circle w-[80px] h-[80px]  xs:mt-0 md:-mx-0 md:mt-0 bg-pink-500 hover:shadow-[0px_0px_20px_4px_#ec4899]">
            <FaSass className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
       

      </div>
    </div>
  );
};

export default AppWrap(Header,'home');
