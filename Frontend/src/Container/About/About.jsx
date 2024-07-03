import {useState,useEffect} from "react";
import {motion} from 'framer-motion';
import images from '../../Constants/images.js'
const About = () => {
    const about=[
      {title:'Frontend Developer',desc:'I Am Good Frontend Developer',imageUrl:images.about01},
      {title:'Backend Developer',desc:'I Am Good Backend Developer',imageUrl:images.about02},
      {title:'Full Stack Developer',desc:'I Am Good Full Stack Developer',imageUrl:images.about03},
      {title:'Mobile Developer',desc:'I Am Good Mobile Developer',imageUrl:images.about04},
    ]
  return(
    <div className={'flex flex-col w-full'}>
      <h2 className={'head-text'}>I know That
        <span className={'text-purple-600'}>Good Design</span>
        <br />
        Means 
        <span className={'text-purple-600'}>Good Business</span> 
      </h2>
      <div className="app__rpofile">
        {about.map((about,index) => (
          <motion.div 
            whileInView={{opacity:1}}
            key={index}
            whileHover={{scale:1.1}}
            transition={{duration:0.5,type:'tween'}}
            className={'app__profile-item'}
          >
            <img src={about.imageUrl} alt={about.title}/>
            <h2 className={'bold-text mt-4'}>{about.title}</h2>
            <h2 className={'p-text mt-3'}>{about.desc}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
};

export default About;
