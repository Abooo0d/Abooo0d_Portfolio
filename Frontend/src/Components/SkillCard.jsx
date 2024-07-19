import React from "react";
import { motion } from "framer-motion";
const SkillCard = ({ Icon, color, index, shadow }) => {
  console.log(color);
  const scaleVariants = {
    whileInView: {
      // scale: [0, 1],

      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      // variants={scaleVariants}
      whileInView={{ opacity: [0, 1], x: [-100, 50, -20, 0] }}
      className="skills__con"
      transition={{ duration: index * 0.2 + 0.5, type: "twin" }}
    >
      <div
        className={`w-[100px] h-[100px] app__flex border-[2px] border-solid border-cu-white rounded-full cursor-pointer duration-300 ${color} ${shadow} hover:scale-110`}
      >
        <Icon className={`w-[60%] h-[60%] text-cu-white`} />
      </div>
    </motion.div>
  );
};

export default SkillCard;
