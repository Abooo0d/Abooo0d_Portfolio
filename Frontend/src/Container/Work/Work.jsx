import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../Wrapper";
import { client } from "../../client";
import { WorkCard } from "../../Components/index";
import "../../index.css";
const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    const query = '*[_type=="works" ]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
    handleWorkFilter(activeFilter);
  }, []);
  const handleWorkFilter = (filter) => {
    setActiveFilter(filter);
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      if (filter === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(filter)));
      }
      setActiveCard(0);
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };
  return (
    <div className="relative  min-h-[100vh] min-w-full z-10 bg-center bg-[url(/src/Assets/image2.jpg)]">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-[5px]  z-0" />
      <div className="relative min-h-[100vh] w-full flex justify-start items-center flex-col py-8 shadow-worksShadow">
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
              onClick={() => {
                handleWorkFilter(cat);
              }}
              className={`app__work-filter-item app__flex ${
                activeFilter === cat
                  ? "bg-cu-primary/40 border-cu-primary"
                  : "bg-purple-200/20"
              } group flex items-center border-[1px] border-solid border-purple-500 justify-center duration-300 hover:bg-cu-primary/20 text-gray-200 hover:text-cu-white px-2 py-1 text-lg rounded-md cursor-pointer`}
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
          {filterWorks.length > 0 ? (
            filterWorks.map((work, index) => (
              <WorkCard
                work={work}
                key={index}
                active={activeCard == index ? true : false}
                index={index}
                setActive={setActiveCard}
              />
            ))
          ) : (
            <div className="w-[400px] h-[400px] flex justify-center items-center ">
              <h1 className="text-xl text-purple-200 flex justify-center items-center gap-2 bg-cu-primary/20 py-4 px-8 rounded-md border-[1px] border-solid border-cu-primary cursor-default">
                No Projects In This Category
              </h1>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// export default Work;
export default AppWrap(Work, "works");
