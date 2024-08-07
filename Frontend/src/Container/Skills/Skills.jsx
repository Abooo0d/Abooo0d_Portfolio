import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "../../Components";
import { skills } from "../../Constants/skillsArray";
const Skills = () => {
  return (
    <div
      className="relative flex flex-col justify-start items-center pt-[65px] pb-[40px]"
      id="skills"
    >
      <div className="absolute md:w-[400px] md:h-[80px] w-[100px] h-[100px] top-[90px] md:left-0 left-[100px] bg-gradient-to-b from-cu-white to-cu-primary md:blur-[120px] blur-[60px] " />
      <h2 className="text-xl md:text-2xl text-cu-primary text-center font-bold z-10 leading-9 relative">
        My
        <span className={"text-cu-white bg-cu-primary rounded-md px-2  ml-1"}>
          Skills
        </span>
      </h2>
      <div className="flex :flex-row flex-wrap md:flex-nowrap md:gap-[40px] gap-y-[50px] gap-x-[20px] justify-center items-center w-[100%] md:w-[80%] z-10 py-8">
        {skills.map((skill, index) => (
          <SkillCard
            Icon={skill.icon}
            color={skill.color}
            index={index}
            shadow={skill.shadow}
            key={index}
            border={skill.border}
            name={skill.name}
            bgColor={skill.bgColor}
          />
        ))}
      </div>
      <div className="spikes bottom-0 rotate-180 navy" />
    </div>
  );
};

export default Skills;
