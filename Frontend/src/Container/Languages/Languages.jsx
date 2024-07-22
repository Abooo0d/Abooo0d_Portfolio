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
    <div className="flex justify-center items-center relative bg-skillsBg bg-repeat min-h-[300px] bg-cover">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-cu-white/20" />
    </div>
  );
};

export default Languages;
