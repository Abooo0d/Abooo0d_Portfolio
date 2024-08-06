import React from "react";

const Experiences = () => {
  return (
    <div
      className={`app__flex pb-32 flex-col relative bg-cover bg-repeat bg-fixed pt-32 min-h-[100vh] bg-[url(/src/Assets/experiencesBg.jpg)]`}
      id="experiences"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#303030]/50 z-0 backdrop-blur-sm" />
      <div className="separator-top separator top-[-100px] md:top-[-50px]" />
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

      <div className="separator-bottom separator bottom-[-240px]" />
    </div>
  );
};

export default Experiences;
