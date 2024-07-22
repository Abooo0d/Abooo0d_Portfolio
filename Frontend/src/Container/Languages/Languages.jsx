import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaPhp, FaSass } from "react-icons/fa";
import { SkillCard } from "../../Components";
import images from "../../Constants/images";
const Languages = () => {
  const skills = [
    {
      icon: FaReact,
      color: "bg-sky-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#0284c7]",
    },
    {
      icon: FaLaravel,
      color: "bg-red-600",
      shadow: "hover:shadow-[0px_0px_35px_20px_#dc2626]",
    },
    {
      icon: DiJavascript1,
      color: "bg-yellow-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#eab308]",
    },
    {
      icon: FaPhp,
      color: "bg-purple-800",
      shadow: "hover:shadow-[0px_0px_35px_20px_#6b21a8]",
    },
    {
      icon: FaSass,
      color: "bg-pink-500",
      shadow: "hover:shadow-[0px_0px_35px_20px_#ec4899]",
    },
  ];
  return (
    <div className="flex justify-center items-center  bg-[rgb(237, 242, 248)] relative">
      {/* <div style="height: 150px; overflow: hidden;">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        >
          <path
            d="M-3.95,155.98 C9.03,26.08 291.20,-18.20 530.47,43.78 L500.00,-0.00 L-0.00,-0.00 Z"
            style={{stroke: none, fill: #08f}}
          ></path>
        </svg>
      </div> */}
      {/* <div class="w-full h-[66px] absolute top-[-1px] flex justify-start items-end z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-3.95,155.98 C9.03,26.08 291.20,-18.20 530.47,43.78 L500.00,-0.00 L-0.00,-0.00 Z"
            className="fill-current text-[#ff0000] min-w-full"
          ></path>
        </svg>
      </div> */}
      <div className="h-[150px] overflow-hidden w-full">
        <svg
          viewBox="0 0 400 150"
          preserveAspectRatio="none"
          // style="height: 100%; width: 100%;"
          className="h-full w-full"
        >
          <path
            d="M-12.97,174.68 C9.03,26.08 291.20,-18.20 547.96,-93.00 L500.00,0.00 L-0.00,0.00 Z"
            className="fill-current text-[#ff0000] min-w-full"
          ></path>
        </svg>
      </div>

      {/* 
      <div className="flex flex-row justify-center items-start md:pb-12 md:px-8 max-w-[80%] w-[80%] mt-16 mb-16 flex-wrap md:flex-nowrap gap-y-[25px] gap-x-[50px]">
        {skills.map((skill, index) => (
          <SkillCard
            Icon={skill.icon}
            color={skill.color}
            key={index}
            index={index}
            shadow={skill.shadow}
          />
        ))}
      </div> */}
      {/* <div class="w-full h-[66px] top-[1] flex justify-start items-end">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            class="fill-current text-[#1d204b]"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Languages;
