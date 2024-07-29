import React from "react";
import { motion } from "framer-motion";
const TestimonialCard = ({ test }) => {
  return (
    <motion.div
      className="relative max-w-[500px] w-[500px] h-[300px] flex flex-col rounded-lg bg-cu-white p-8 shadow-md cursor-pointer border-b-[2px] group"
      whileInView={{ y: [-30, 20, -10, 0], opacity: [0, 20, 50, 70, 90, 100] }}
      transition={{ delay: 0.2, ease: "easeIn", duration: 0.4 }}
    >
      <div className="flex justify-start items-centers h-full">
        <div className="w-[120px] h-[120px]">
          <img
            src={test.imgurl}
            alt={test.name}
            className="w-[100px] h-[100px] object-cover rounded-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between items-start h-full">
          <p className="text-[15px] text-gray-800 mb-2">{test.feedback}</p>
          <div>
            <h4 className="text-cu-primary font-bold m-0">{test.name}</h4>
            <h4 className="text-cu-primary">{test.company}</h4>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%] h-0 group-hover:h-[5px] bg-cu-primary duration-300 rounded-t-lg" />
    </motion.div>
  );
};

export default TestimonialCard;
