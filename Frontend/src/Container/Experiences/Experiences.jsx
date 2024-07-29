import React from "react";
import { AppWrap } from "../../Wrapper";
import images from "../../Constants/images";
import experiencesBg from "../../Assets/SkillsBg.jpg";
const Experiences = () => {
  return (
    <div
      className="app__flex pb-32 flex-col relative bg-cover bg-repeat pt-32 min-h-[100vh]"
      style={{ backgroundImage: `url(${experiencesBg})` }}
      id="experiences"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#303030]/50 z-0 backdrop-blur-sm" />
      <div className="curved top" />
      <h2 className="text-xl md:text-2xl text-cu-white text-center font-bold z-10 leading-9 mb-8">
        My
        <span className={"text-cu-white bg-cu-primary rounded-md px-2  ml-1"}>
          Experiences
        </span>
      </h2>
      <h1 className="w-full md:w-[80%] px-4 text-gray-300 md:text-2xl text-lg text-center z-10 font-bold">
        While I possess a strong foundation in software development principles
        and technologies through academic pursuits and personal projects, I
        acknowledge the absence of formal work experience within a software
        company. Eager to apply my knowledge in a professional setting, I am
        actively seeking opportunities to contribute to innovative projects and
        collaborate with experienced teams.
      </h1>

      <div class="curved bottom" />
    </div>
  );
};

export default Experiences;
