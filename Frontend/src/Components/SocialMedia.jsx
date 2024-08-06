import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const SocialMedia = () => {
  return (
    <div className="absolute bottom-[20px] left-[20px] hidden sm:flex flex-col gap-4 z-[100] justify-start items-start">
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-cu-primary/20 border-solid border-cu-primary/40 border-[1px] text-cu-white flex justify-center items-center hover:bg-sky-600 hover:text-cu-white duration-300">
        <a
          href="https://www.facebook.com/abed.saad.9235"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-cu-primary/20 border-solid border-cu-primary/40 border-[1px] text-cu-white flex justify-center items-center hover:bg-blue-800 hover:text-cu-white duration-300">
        <FaLinkedinIn />
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-cu-primary/20 border-solid border-cu-primary/40 border-[1px] text-cu-white flex justify-center items-center hover:bg-pink-600 hover:text-cu-white duration-300">
        <FaInstagram />
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-cu-primary/20 border-solid border-cu-primary/40 border-[1px] text-cu-white flex justify-center items-center hover:bg-gray-900 hover:text-cu-white duration-300">
        <FiGithub />
      </div>
    </div>
  );
};
export default SocialMedia;
