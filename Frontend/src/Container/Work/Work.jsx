import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";
import { WorkCard } from "../../Components/index";
import images from "../../Constants/images";
import "../../index.css";
const Work = () => {
  const handelWorkFilter = () => {};
  const [activeFilter, setActiveFilter] = useState("");
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = '*[_type=="works" ]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div
      className=" relative work-backgrounds bg-cover bg-repeat min-h-[100vh] min-w-full z-10"
      style={{ backgroundImage: `url(${images.aboutBg})` }}
    >
      <div
        className={"absolute top-0 left-0 right-0 bottom-0 bg-black/50  z-0"}
      />
      <div className="relative min-h-[100vh] w-full flex justify-center items-center flex-col py-8 shadow-worksShadow">
        <h2
          className={
            "text-xl  md:text-2xl text-cu-white text-center font-bold z-10 relative"
          }
        >
          My Creative{" "}
          <span className={"text-cu-white bg-cu-primary rounded-md p-1 "}>
            PortFolio
          </span>
        </h2>
        <div className="app__work-filter flex flex-row gap-[5px] mt-4">
          {["UI/UX", "Web App", "React", "Laravel", "All"].map((cat, index) => (
            <div
              key={index}
              onClick={() => handelWorkFilter(cat)}
              className={`app__work-filter-item app__flex ${
                activeFilter === cat ? "item-active" : ""
              } group flex items-center justify-center duration-300 hover:bg-cu-primary text-gray-200 hover:text-cu-white px-2 py-1 text-lg rounded-md cursor-pointer`}
            >
              {cat}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio app__flex w-full h-[100%] gap-[15px] mt-8 flex-col md:flex-row "
        >
          {works.map((work, index) => (
            <WorkCard
              work={work}
              key={index}
              active={activeCard == index ? true : false}
              index={index}
              setActive={setActiveCard}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(Work, "works");
