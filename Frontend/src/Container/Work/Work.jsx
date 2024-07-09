import React from "react";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
const Work = () => {
  return (
    <div className="relative bg-workBg bg-cover bg-repeat min-h-[100vh] min-w-full flex justify-center items-center">
      <div
        className={
          "absolute top-0 left-0 right-0 bottom-0 bg-white opacity-[0.8] z-0"
        }
      />
      <h2
        className={
          "text-2xl text-indigo-800 text-center font-bold z-10 relative"
        }
      >
        My Creative
        <span className={"text-cu-white bg-indigo-600 rounded-md p-1 "}>
          PortFolio
        </span>
      </h2>
    </div>
  );
};

export default AppWrap(Work, "work");
