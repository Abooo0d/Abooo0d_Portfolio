import React from "react";
import { motion } from "framer-motion";
const SkillCard = ({ Icon, color, index, shadow, border, name, bgColor }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], x: [-100, 50, -20, 0] }}
      className="skills__con relative w-fit group"
      transition={{ duration: index * 0.2 + 0.5, type: "twin" }}
    >
      <div
        className={`relative overflow-hidden group w-[100px] h-[100px] app__flex border-[1px] border-solid ${border} rounded-full cursor-pointer bg-cu-white hover:bg-gray-100 duration-300 ${shadow} hover:scale-110 z-10`}
      >
        {/* <div
          className={`group-hover:left-[240px] absolute w-[20px] h-[100%] ${bgColor} left-[-50px] top-0 skew-x-[30deg] duration-[1.5s] opacity-30`}
        />
        <div
          className={`group-hover:left-[220px] absolute w-[5px] h-[100%] ${bgColor} left-[-60px] top-0 skew-x-[30deg] duration-[1.5s] opacity-30`}
        /> */}
        <div
          className={`absolute top-[50%] left-[50%] aboutCard-img-overlay ${bgColor} group-hover:animate-flash w-0 h-0 rounded-full z-10`}
        />
        <Icon className={`w-[60%] h-[60%] ${color}`} />
      </div>
      <span
        className={`absolute bottom-[-40px] left-[50%] rounded-md px-[4px] py-[2px] bg-gray-100 border-solid border-[2px] ${border} opacity-0 group-hover:opacity-100 duration-300 ${color} skill-tag group-hover:skill-tag-hover z-[8] group-hover:z-10`}
      >
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
