import { urlFor } from "../client.js";
import { motion } from "framer-motion";
const AboutCard = ({ about, order }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], x: [-200, 50, -20, 0] }}
      // whileHover={{ scale: 1.1 }}
      transition={{ duration: order * 0.2 + 0.5, type: "twin" }}
      className={` app__profile-item w-[230px] max-w-[250px ]  relative duration-0 bg-cu-white/40 backdrop-blur-md rounded-lg h-[350px] overflow-hidden flex justify-start items-start flex-col 2xl:w-[370px] 2xl:mx-8 2xl:my-16 group`}
    >
      <div className="absolute top-0 left-0 bottom-0 bg-purple-500/40 z-0 duration-300 w-0 group-hover:w-full" />
      <img
        src={urlFor(about.imgUrl)}
        alt={about.title}
        className={
          "w-full min-h-[170px] max-h-[170px] rounded-lg object-cover 2xl:h-[320px] relative p-2 group-hover:p-0 duration-300"
        }
      />
      <h2
        className={
          "bold-text mt-4 text-purple-600 relative pl-2 group-hover:text-cu-white duration-300"
        }
      >
        {about.title}
        {/* <div className="absolute bottom-0 left-[5px] bg-cu-white w-0 h-[1px] group-hover:w-[80%] duration-300" /> */}
      </h2>
      <p className={"text-sm mt-0 text-cu-white relative px-2"}>
        {about.description}
      </p>
    </motion.div>
  );
};
export default AboutCard;
