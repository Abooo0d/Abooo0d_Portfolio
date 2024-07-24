import { useState, useEffect } from "react";
import { client } from "../../client.js";
import { AboutCard } from "../../Components/index.js";
import { AppWrap } from "../../Wrapper/index.js";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbout(data));
  }, []);
  return (
    <div className="flex flex-col bg-aboutBg bg-cover bg-repeat w-full pt-8 min-h-[100vh] justify-center items-center py-8 relative">
      <div className="h-[150px] overflow-hidden w-full absolute z-10 top-0 md:block hidden">
        <svg
          viewBox="0 0 400 150"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M1.70,144.18 C137.13,-47.72 299.66,-1.46 586.90,-4.42 L500.00,0.00 L-0.00,0.00 Z"
            className="fill-current text-[#edf2f8] min-w-full"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-[0.4] z-0" />
      <div className="flex justify-center items-center flex-col gap-[5px]">
        {" "}
        <h2 className="text-xl md:text-2xl text-cu-white text-center font-bold z-10 leading-9">
          I know That
          <span className={"text-cu-white bg-cu-primary rounded-md px-2  ml-1"}>
            Good Development
          </span>
        </h2>
        <h2 className="text-xl md:text-2xl text-cu-white text-center font-bold z-10 leading-9">
          {" "}
          Means
          <span
            className={"text-cu-white bg-cu-primary rounded-md px-2 ml-1 mt-1"}
          >
            Good Business
          </span>
        </h2>
      </div>
      <div className="app__ flex justify-center items-start flex-wrap mt-4 mb-4 md:mb-0 md:mt-8 z-10 gap-[35px]">
        {about.map((about, index) => (
          <AboutCard about={about} key={index} order={index} />
        ))}
      </div>
      <div class="spikes bottom-0 rotate-180 gray" />
    </div>
  );
};

export default AppWrap(About, "about");
/*
 <div className="w-full h-[66px] absolute top-[-1px] rotate-180 flex justify-start items-end z-10">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-[#1e214b]"
          ></path>
        </svg>
      </div> */
