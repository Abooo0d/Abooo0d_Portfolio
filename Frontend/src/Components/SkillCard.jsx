import React from "react";
import { motion } from "framer-motion";
const SkillCard = ({ Icon, color }) => {
  console.log(Icon);
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
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="skills__con"
    >
      <div className="skills__circle w-[80px] h-[80px] md:mx-2 bg-cu-white hover:shadow-[0px_0px_20px_4px_#313bac] border-[1px] border-solid border-gray-400">
        <Icon className="w-[60%] h-[60%] text-cu-white" />
      </div>
    </motion.div>
  );
};

export default SkillCard;
