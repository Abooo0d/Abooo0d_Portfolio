import React from "react";

const Experiences = () => {
  return (
    <div className="app__flex pb-12 flex-col relative bg-skillsBg bg-cover bg-repeat  pt-28">
      <div className="absolute top-0 left-0 w-full h-full bg-[#303030]/50 z-0 backdrop-blur-sm" />
      <div class="custom-shape-divider-top-1721849267">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      {/* <div className="absolute  w-[250px] h-[250px] top-[20px] left-[20px] bg-gradient-to-b from-cu-white to-cu-primary blur-[120px] " /> */}
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
    </div>
  );
};

export default Experiences;
