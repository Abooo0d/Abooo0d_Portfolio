import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp, FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SkillCard } from "../../Components";
import images from "../../Constants/images";
const Skills = () => {
  const skills = [
    {
      icon: FaReact,
      color: "text-sky-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#0284c7]",
      border: "border-sky-500",
      name: "React",
    },
    {
      icon: FaLaravel,
      color: "text-red-600",
      shadow: "hover:shadow-[0px_0px_35px_20px_#dc2626]",
      border: "border-red-500",
      name: "Laravel",
    },
    {
      icon: DiJavascript1,
      color: "text-yellow-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#eab308]",
      border: "border-yellow-500",
      name: "Javascript",
    },
    {
      icon: FaPhp,
      color: "text-purple-800",
      shadow: "hover:shadow-[0px_0px_35px_20px_#6b21a8]",
      border: "border-purple-500",
      name: "PHP",
    },
    {
      icon: FaSass,
      color: "text-pink-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#ec4899]",
      border: "border-pink-500",
      name: "Sass",
    },
    {
      icon: RiTailwindCssFill,
      color: "text-sky-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#0284c7]",
      border: "border-sky-500",
      name: "Tailwind",
    },
  ];
  return (
    <div className="relative bg-aboutBg bg-cover bg-repeat flex flex-col justify-start items-center pt-[60px] pb-[30px]">
      <div className="custom-shape-divider-top-1721805143 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-[#999]/65" />
      <h2 className="text-xl md:text-2xl text-cu-white text-center font-bold z-10 leading-9 relative">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
