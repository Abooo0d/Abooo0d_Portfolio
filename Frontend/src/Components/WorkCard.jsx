import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../client";
import { HiOutlineEye } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
const WorkCard = ({ work, active, index, setActive }) => {
  return (
    <div
      className={`max-w-[350px] md:max-w-[600px] bg-black/40 rounded-lg p-2 cursor-pointer h-[500px] overflow-hidden relative duration-700 backdrop-blur-sm flex justify-center items-start flex-col ${
        active
          ? "w-[350px] h-[500px] md:w-[600px] md:h-[500px]"
          : "w-[350px] h-[80px] md:w-[80px] md:h-[500px]"
      }`}
      onClick={() => setActive(index)}
    >
      <h4
        className={`absolute bg-cu-primary  text-cu-white w-[200px]  md:rotate-90 md:left-[-60px] left-0 top-[15px] md:top-[75px] py-0 px-[20px] h-[50px] flex justify-center items-center z-10`}
      >
        {work.title}
        <div className="w-[50px] h-[50px] absolute bg-transparent top-0 right-[-50px] border-cu-primary border-[25px] border-r-transparent" />
      </h4>
      <div
        className={`relative duration-300 group flex-1 h-[300px] max-h-[300px] ${
          active ? "" : "hidden"
        } `}
      >
        <div className="w-full max-h-[300px] flex justify-center items-center overflow-hidden rounded-lg">
          <img
            src={urlFor(work.imgUrl)}
            // src={work.imgUrl}
            alt="Image"
            className={`min-h-[350px] w-full object-cover`}
          />
        </div>
        <div className="absolute top-0 left-0 bg-black/50 backdrop-blur-sm rounded-lg w-full h-[300px] opacity-0 group-hover:opacity-100 duration-200 flex justify-center items-center gap-[40px] ">
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
      {active ? (
        <div
          className={` h-full flex max-w-full w-[580px] mt-2 max-h-full overflow-hidden${
            active ? " opacity-100  flex-col justify-between" : "opacity-0"
          }`}
        >
          <p className="text-cu-white mt-2 max-h-[80px] text-[15px]">
            {work.description}
          </p>
          <div className="flex justify-start items-start w-full gap-[10px]">
            {work.tags.map((tag, index) => (
              <p
                className="py-1 rounded-md bg-cu-primary text-cu-white w-[60px] flex justify-center items-center"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <p className="p-1 rounded-md bg-cu-primary text-cu-white absolute right-[10px] md:bottom-[10px] w-[60px] flex justify-center items-center">
          {work.tags[0]}
        </p>
      )}
    </div>
  );
};

export default WorkCard;
