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
  const tests = [
    {
      name: "Ahmad",
      company: "Ahmad Company",
      imgurl: images.about03,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fugit omnis similique, laudantium recusandae eligendi accusantium autem tenetur obcaecati ut doloremque perferendis cum nesciunt ducimus reiciendis laborum quibusdam quidem facere.",
    },
    {
      name: "Abood",
      company: "Ahmad Company",
      imgurl: images.about01,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fugit omnis similique, laudantium recusandae eligendi accusantium autem tenetur obcaecati ut doloremque perferendis cum nesciunt ducimus reiciendis laborum quibusdam quidem facere.",
    },
    {
      name: "Mohamad",
      company: "Ahmad Company",
      imgurl: images.about02,
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, fugit omnis similique, laudantium recusandae eligendi accusantium autem tenetur obcaecati ut doloremque perferendis cum nesciunt ducimus reiciendis laborum quibusdam quidem facere.",
    },
  ];
  return (
    <div className="app__flex flex-col min-h-[100vh] p-20 pt-4 relative w-full">
      {/* <div className="absolute w-[200px] h-[200px] left-[100px] bottom-[100px] right-0 bg-gradient-to-b from-cu-white to-cu-primary blur-[200px] z-[-1] " /> */}
      <div className="absolute w-[150px] h-[300px] top-[250px] right-[200px] bg-gradient-to-b from-cu-white to-indigo-600 blur-[200px] z-[-1] " />
      <div className="absolute w-[100px] h-[150px] top-[150px] right-0 bg-gradient-to-b from-cu-white to-emerald-600 blur-[200px] z-[-1] " />
      <h2 className="text-xl md:text-2xl text-cu-primary text-center font-bold z-10 leading-9">
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
        <div className="app__flex gap-x-4">
          <button
            className="text-3xl font-bold w-[40px] h-[100px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
            onClick={() => {
              setActiveCard(
                activeCard !== 0 ? activeCard - 1 : tests.length - 1
              );
            }}
          >
            {"<"}
          </button>
          <div className="flex justify-center items-center flex-row">
            <TestimonialCard
              test={tests[activeCard]}
              key={tests[activeCard].name}
            />
          </div>
          <button
            className="text-3xl font-bold w-[40px] h-[100px] bg-cu-white/60 text-cu-primary rounded-lg shadow-lg hover:bg-cu-primary hover:text-cu-white duration-200"
            onClick={() => {
              setActiveCard(
                activeCard !== tests.length - 1 ? activeCard + 1 : 0
              );
            }}
          >
            {">"}
          </button>
        </div>
        <div className="w-[150px] h-[50px] app__flex gap-x-2">
          {tests.map((test, index) => (
            <>
              <button
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
        className="flex items-center justify-evenly gap-4"
      >
        {brands.map((brand, index) => (
          <div className="w-[150px] h-[100px] cursor-pointer group border-[2px] border-solid hover:border-cu-white duration-300 hover:shadow-xl rounded-[20px] hover:bg-cu-white/40 p-4">
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
