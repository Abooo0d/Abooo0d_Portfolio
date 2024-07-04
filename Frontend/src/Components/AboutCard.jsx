import {urlFor} from "../client.js";
import {motion} from "framer-motion";
const AboutCard = ({about}) => {
  return (
    <motion.div
      whileInView={{opacity: 1}}
      whileHover={{scale: 1.1}}
      transition={{duration: 0.5, type: 'tween'}}
      className={'app__profile-item w-[230px] p-2 relative bg-cu-white/40 backdrop-blur-md rounded-lg h-[400px] overflow-hidden flex justify-start items-start flex-col m-8 2xl:w-[370px] 2xl:mx-8 2xl:my-16'}
    >
      <img src={urlFor(about.imgUrl)} 
           alt={about.title}
           className={'w-full min-h-[170px] max-h-[170px] rounded-lg object-cover 2xl:h-[320px]'}
      />
      <h2 className={'bold-text mt-4 text-indigo-600'}>{about.title}</h2>
      <p className={'text-sm mt-0 text-cu-white'}>{about.description}</p>
    </motion.div>
  )
} 
export default AboutCard;