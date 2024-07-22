import { urlFor } from "../client.js";
import { motion } from "framer-motion";
const AboutCard = ({ about, order }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], x: [-200, 50, -20, 0] }}
      transition={{ duration: order * 0.2 + 0.5, type: "twin" }}
      className="group w-[300px] h-[430px] flex justify-end items-start flex-col relative bg-cu-white/40 rounded-[20px] p-5 border-[2px] border-solid border-[#9333ea] cursor-pointer duration-300"
    >
      <div className="absolute top-[20px] left-[20px] w-[300px] h-[200px] rounded-[20px] group-hover:scale-105 duration-300 flex justify-center items-center overflow-hidden z-10">
        <img
          src={urlFor(about.imgUrl)}
          alt={about.title}
          className=" object-cover max-w-full w-full h-full max-h-full"
        />
      </div>
      <div className="absolute left-0 bottom-0 h-[100%] bg-cu-primary/40 duration-300 w-0 group-hover:w-full rounded-[20px] z-0" />
      <h2 className="text-cu-primary group-hover:text- text-xl font-bold z-10 duration-300">
        {about.title}
      </h2>
      <p className="h-[150px] pl-4 text-[15px] text-[#333] group-hover:text-[#eee] z-10 duration-300">
        {about.description}
      </p>
    </motion.div>
  );
};
export default AboutCard;
