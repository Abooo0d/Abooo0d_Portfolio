import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import { HiOutlineEye } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
const WorkCard = ({ work, active, index, setActive }) => {
  return (
    <div
      className={`max-w-[350px] md:max-w-[600px] work-card-bg rounded-lg p-2 cursor-pointer h-[500px] overflow-hidden relative duration-700 backdrop-blur-md flex justify-center items-start flex-col ${
        active
          ? "w-[350px] h-[500px] md:w-[600px] md:h-[500px]"
          : "w-[350px] h-[80px] md:w-[80px] md:h-[500px]"
      }`}
      onClick={() => setActive(index)}
    >
      <h4
        className={`absolute bg-cu-primary  text-cu-white w-[230px]  md:rotate-90 md:left-[-75px] left-0 top-[15px] md:top-[88px] py-0 px-[20px] h-[50px] flex justify-center items-center z-10`}
      >
        {work.title}
        <div className="w-[50px] h-[50px] absolute bg-transparent top-0 right-[-50px] border-cu-primary border-[25px] border-r-transparent" />
      </h4>
      <div
        className={`relative duration-300 group flex-1 h-[300px] max-h-[250px] ${
          active ? "opacity-100" : "opacity-0"
        } `}
      >
        <div className="w-full md:max-h-[300px] max-h-[250px] flex justify-center items-center overflow-hidden rounded-lg">
          <img
            src={urlFor(work.imgUrl)}
            alt="Image"
            className={`min-h-[350px] w-full object-cover`}
          />
        </div>
        <div className="absolute top-0 left-0 bg-black/50 backdrop-blur-sm rounded-lg w-full h-[250px] opacity-0 group-hover:opacity-100 duration-200 flex justify-center items-center gap-[40px] ">
          {work.projectLink ? (
            <a
              href={work.projectLink}
              target="_blank"
              className="w-[50px] h-[50px] rounded-full bg-white/30 duration-300 flex text-white justify-center items-center group hover:bg-cu-primary/70 "
            >
              <HiOutlineEye className="w-[25px] h-[25px]  duration-300" />
            </a>
          ) : (
            <></>
          )}
          <a
            href={work.codeLink}
            target="_blank"
            className="w-[50px] h-[50px] rounded-full bg-white/30 duration-300 flex text-white justify-center items-center group hover:bg-cu-primary/70 "
          >
            <FaGithub className="w-[25px] h-[25px]  duration-300" />
          </a>
        </div>
      </div>

      <div
        className={` h-full flex max-w-full w-[580px] mt-2 max-h-full overflow-hidden duration-300 justify-between${
          active ? " opacity-100 flex-col justify-between" : " opacity-0"
        }`}
      >
        <p className="text-cu-white mt-2 max-h-[200px] overflow-hidden text-[15px]">
          {work.description}
        </p>
        <div className="flex justify-start items-end w-full gap-[10px]  flex-1">
          {work.tags.map((tag, index) => (
            <p
              className="py-1 px-2 rounded-md bg-cu-primary text-cu-white w-fit flex justify-center items-center"
              key={index}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      <p
        className={`p-1 rounded-md bg-cu-primary text-cu-white absolute left-[10px] md:bottom-[10px] w-[60px] flex justify-center items-center ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        {work.tags[0]}
      </p>
    </div>
  );
};

export default WorkCard;
