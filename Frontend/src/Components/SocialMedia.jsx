import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
const SocialMedia = () => {
  return (
    <div className="absolute bottom-[20px] left-[20px] hidden sm:flex flex-col gap-4 z-[100] justify-start items-start">
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center text-gray-700 hover:bg-sky-600 hover:text-cu-white duration-300">
        <FaFacebookF />
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center text-gray-700 hover:bg-blue-800 hover:text-cu-white duration-300">
        <FaLinkedinIn />
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center text-gray-700 hover:bg-pink-600 hover:text-cu-white duration-300">
        <FaInstagram />
      </div>
      <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center text-gray-700 hover:bg-gray-900 hover:text-cu-white duration-300">
        <FiGithub />
      </div>
    </div>
  );
};
export default SocialMedia;
