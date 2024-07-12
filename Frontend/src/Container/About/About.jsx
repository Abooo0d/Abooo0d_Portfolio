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
    <div
      className={
        "flex flex-col w-full md:mt-4 pt-8 bg-aboutBg bg-cover bg-repeat relative min-h-[100vh] justify-center items-center"
      }
    >
      <div
        className={
          "absolute top-0 left-0 right-0 bottom-0 bg-gray-400 opacity-[0.4] z-0"
        }
      />
      <h2
        className={
          "text-2xl text-cu-white text-center font-bold z-10 leading-9"
        }
      >
        I know That
        <span className={"text-cu-white bg-purple-600 rounded-md px-2  ml-1"}>
          {" "}
          Good Development
        </span>
        <br />
        Means
        <span
          className={"text-cu-white bg-purple-600 rounded-md px-2 ml-1 mt-1"}
        >
          {" "}
          Good Business
        </span>
      </h2>
      <div className="app__ flex justify-center items-start flex-wrap mt-8 z-10">
        {about.map((about, index) => (
          <AboutCard about={about} key={index} order={index} />
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
