import React from "react";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../Wrapper";
import images from "../../Constants/images";
import { TestimonialCard } from "../../Components";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [activeCard, setActiveCard] = useState(2);
  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const query2 = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(query2).then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <div className="app__flex flex-col min-h-[100vh] p-20 pt-4 relative w-full z-10">
      <div className="absolute w-[150px] h-[300px] top-[150px] right-[200px] bg-gradient-to-b from-cu-white to-indigo-600 blur-[100px] z-[-1] " />
      <div className="absolute w-[100px] h-[150px] top-[150px] right-0 bg-gradient-to-b from-cu-white to-emerald-600 blur-[80px] z-[-1] " />
      <h2 className="text-xl md:text-2xl text-cu-primary text-center font-bold z-10 leading-9 mb-4">
        My
        <span className={"text-cu-white bg-cu-primary rounded-md px-2  ml-1"}>
          Testimonials
        </span>
      </h2>
      <motion.div
        className="app__flex  flex-col h-full"
        whileInView={{ y: [-50, 0], opacity: [0, 100] }}
        transition={{ delay: 0.2, ease: "easeIn" }}
      >
        <div className="app__flex gap-x-4 flex-col md:flex-row">
          <div className="flex md:hidden justify-between items-center h-[40px] gap-4 mb-2 max-w-[500px] w-[400px] md:w-[500px]">
            <button
              className="flex text-3xl justify-center items-center font-bold w-full h-[40px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
              onClick={() => {
                setActiveCard(
                  activeCard !== 0 ? activeCard - 1 : testimonials.length - 1
                );
              }}
            >
              {"<"}
            </button>
            <button
              className="flex text-3xl font-bold justify-center items-center w-full h-[40px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
              onClick={() => {
                setActiveCard(
                  activeCard !== testimonials.length - 1 ? activeCard + 1 : 0
                );
              }}
            >
              {">"}
            </button>
          </div>
          <button
            className="hidden md:flex justify-center items-center text-3xl font-bold w-[40px] h-[100px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
            onClick={() => {
              setActiveCard(
                activeCard !== 0 ? activeCard - 1 : testimonials.length - 1
              );
            }}
          >
            {"<"}
          </button>
          {testimonials.length > 0 && (
            <div className="flex justify-center items-center flex-row max-w-[500px] w-[400px] md:w-[500px]">
              <TestimonialCard
                test={testimonials[activeCard]}
                key={testimonials[activeCard].name}
              />
            </div>
          )}
          <button
            className="hidden md:flex justify-center items-center text-3xl font-bold w-[40px] h-[100px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
            onClick={() => {
              setActiveCard(
                activeCard !== testimonials.length - 1 ? activeCard + 1 : 0
              );
            }}
          >
            {">"}
          </button>
        </div>
        <div className="w-[150px] h-[50px] app__flex gap-x-2">
          {testimonials.map((test, index) => (
            <>
              <button
                key={index}
                className={` h-[10px] rounded-full duration-200 ${
                  activeCard === index
                    ? "bg-cu-primary w-[20px] "
                    : "bg-gray-300 w-[10px] "
                }`}
                onClick={() => setActiveCard(index)}
              />
            </>
          ))}
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [-50, 0], opacity: [0, 100] }}
        transition={{ delay: 0.2, ease: "easeIn" }}
        className="flex items-center justify-evenly gap-4 w-full flex-wrap"
      >
        {brands.map((brand, index) => (
          <div
            key={index}
            className="md:w-[150px] md:h-[100px] w-[120px] h-[80px] cursor-pointer group border-[2px] border-solid hover:border-cu-white duration-300 hover:shadow-xl rounded-[20px] hover:bg-cu-white/40 p-4"
          >
            <img
              src={urlFor(brand.imgUrl)}
              alt={brand.name}
              className="w-full h-full object-contain grayscale-[100] group-hover:grayscale-0 duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Testimonial, "testimonials");
