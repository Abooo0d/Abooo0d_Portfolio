import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp, FaSass } from "react-icons/fa";
import { SkillCard } from "../../Components";
const Languages = () => {
  const skills = [FaReact, FaLaravel, DiJavascript1, FaPhp, FaSass];
  return (
    <div
      className="flex justify-center items-center bg-languagesBg bg-repeat relative
    "
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-cu-white/60 z-0" />
      <div
        className={
          "flex flex-row  justify-center items-start py-8 px-8 max-w-[80%] w-[80%]"
        }
      >
        {skills.map((skill, index) => (
          <SkillCard Icon={skill} color="red" />
          // console.log(skill);
        ))}
      </div>
    </div>
  );
};

export default Languages;
