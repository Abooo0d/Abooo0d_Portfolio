import { motion } from "framer-motion";
import images from "../../Constants/images";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
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
    <div id='home'
         className="max-h-[100vh] scroll app__header flex items-center justify-start md:justify-center relative bg-homeBg bg-cover bg-repeat bg-center flex-1 w-[100%] flex-col md:flex-row px-8 py-4 pt-24">
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
        <img src={images.profile} className={'absolute -top-10 left-0 max-[767px]:left-[50%] max-[767px]:translate-x-[-50%] z-0 max-w-full max-[767px]:mx-auto max-[767px]:w-[80%] '} alt="profile"/>
      </motion.div>
      <div className={"flex flex-col flex-[0.75] mt-32 md:mt-0 max-[767px]:flex-1 max-[767px]:w-full max-[767px]:flex-row max-[767px]:flex-wrap justify-center items-center gap-2 md:gap-3"}>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles h-[100%] flex justify-center md:justify-start w-[220px] md:w-[100%]"
        >
          <div className="circle-cmp app__flex w-[100px] h-[100px] rounded-full bg-indigo-900 duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_4px_#312e81]">
            <FaPhp className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles h-[100%] flex justify-center md:justify-start w-[220px] md:w-[100%]"
        >
          <div className="circle-cmp app__flex w-[100px] h-[100px] rounded-full shadow-md bg-red-700 mx-12 max-[767px]:mx-0 duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_4px_#b91c1c]">
            <FaLaravel className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles h-[100%] flex justify-center md:justify-start w-[100%] md:w-[100%]"
        >
          <div className="circle-cmp app__flex w-[140px] h-[140px] rounded-full bg-blue-400 mx-14 max-[767px]:mx-0 duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_4px_#60a5fa]">
            <FaReact className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles h-[100%] flex justify-center md:justify-start w-[220px] md:w-[100%]" 
        >
          <div className="circle-cmp app__flex w-[100px] h-[100px] rounded-full shadow-md bg-amber-400 mx-12 max-[767px]:mx-0 duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_4px_#fbbf24]">
            <DiJavascript1 className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles h-[100%] flex justify-center md:justify-start w-[220px] md:w-[100%]"
        >
          <div className="circle-cmp app__flex w-[100px] h-[100px] rounded-full bg-sky-500 shadow-md duration-300 hover:scale-110 hover:shadow-[0px_0px_20px_4px_#0ea5e9]">
            <RiTailwindCssFill className='w-[60%] h-[60%] text-cu-white'/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
