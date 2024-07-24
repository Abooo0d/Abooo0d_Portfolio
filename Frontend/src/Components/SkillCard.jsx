import React from "react";
import { motion } from "framer-motion";
const SkillCard = ({ Icon, color, index, shadow, border, name }) => {
  return (
    <motion.div
      // variants={scaleVariants}
      whileInView={{ opacity: [0, 1], x: [-100, 50, -20, 0] }}
      className="skills__con relative w-fit group"
      transition={{ duration: index * 0.2 + 0.5, type: "twin" }}
    >
      <div
        className={`group w-[100px] h-[100px] app__flex border-[2px] border-solid ${border} rounded-full cursor-pointer bg-gray-100/80 hover:bg-gray-100 duration-300 ${shadow} hover:scale-110 `}
      >
        <Icon className={`w-[60%] h-[60%] ${color}`} />
      </div>
      <span
        className={`absolute bottom-[-40px] left-[50%] rounded-md px-[4px] py-[2px] bg-gray-100 border-solid border-[2px] ${border} opacity-0 group-hover:opacity-100 duration-300 ${color} skill-tag group-hover:skill-tag-hover`}
      >
        {" "}
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
