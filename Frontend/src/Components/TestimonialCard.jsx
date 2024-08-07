import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
const TestimonialCard = ({ test }) => {
  return (
    <motion.div
      className="relative w-full h-[300px] flex flex-col rounded-lg bg-cu-white p-8 shadow-md cursor-pointer border-b-[2px] group"
      whileInView={{ y: [-30, 20, -10, 0], opacity: [0, 20, 50, 70, 90, 100] }}
      transition={{ delay: 0.2, ease: "easeIn", duration: 0.4 }}
    >
      <div className="flex justify-start items-centers h-full">
        <div className="md:w-[120px] md:h-[120px] w-[80px] h-[80px]">
          <img
            src={urlFor(test.imgurl)}
            alt={test.name}
            className="md:w-[100px] md:h-[100px] h-[70px] w-[70px] object-cover rounded-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between items-start h-full">
          <p className="text-[12px] md:text-[15px] text-gray-800 mb-2 max-h-[80%] overflow-hidden">
            {test.feedback}
          </p>
          <div>
            <h4 className="text-cu-primary font-bold m-0 md:text-[15px] text-[14px]">
              {test.name}
            </h4>
            <h4 className="text-cu-primary md:text-[15px] text-[14px]">
              {test.company}
            </h4>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[80%] h-0 group-hover:h-[5px] bg-cu-primary duration-300 rounded-t-lg" />
    </motion.div>
  );
};

export default TestimonialCard;
