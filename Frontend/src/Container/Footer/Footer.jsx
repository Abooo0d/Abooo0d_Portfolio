import React, { useState } from "react";
import { AppWrap } from "../../Wrapper";
import images from "../../Constants/images";
import { client } from "../../client";
import { MoonLoader } from "react-spinners";
const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handelSubmit = () => {
    setIsLoading(true);
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setIsFormSubmitted(true);
      setIsLoading(false);
    });
  };
  return (
    <div className="flex w-full relative md:flex-row flex-col">
      <div class="custom-shape-divider-top-1722951617 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className=" relative flex-1 w-full h-[100vh] bg-[url(/src/Assets/FooterBg.png)] bg-cover bg-left bg-fixed flex justify-center items-center px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/30 z-1 backdrop-blur-[5px]" />
        <div className="z-10 flex justify-center items-center gap-2 flex-col min-h-[500px]">
          <h2 className="text-xl text-purple-200 mb-4 flex justify-center items-center gap-2">
            <span>
              Take A Coffee
              <br /> Chat With Me
            </span>
            <span className="h-[50px] flex justify-center items-center w-[40px] rounded-md bg-cu-primary/30 border-solid border-purple-300 border-[1px]">
              &
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 rounded-md bg-[#ad4c9d4d] py-2 px-4 hover:bg-cu-primary/20 cursor-pointer backdrop-blur-[5px] duration-300 border-solid border-[1px] border-cu-primary">
            <img src={images.email} alt="Email" className="w-[40px] h-[40px]" />
            <span className="w-[300px] text-purple-200 text-center font-bold">
              <a href="mailto:abdsadalden2001@gmail.com">
                abdsadalden2001@gmail.com
              </a>
            </span>
          </div>
          <div className="flex justify-center items-center gap-4 rounded-md bg-[#ad4c9d4d] py-2 px-4 hover:bg-cu-primary/20 cursor-pointer backdrop-blur-[5px] duration-300 border-solid border-[1px] border-cu-primary">
            <img
              src={images.mobile}
              alt="Phone"
              className="w-[40px] h-[40px]"
            />
            <span className="w-[300px] text-purple-200 text-center font-bold">
              +963 951-745-564
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-blues-500 w-full h-[100vh] bg-[#6b56a2] flex justify-center items-center flex-col pt-16 pb-8 md:pb-0 px-4">
        <h1 className="text-xl text-purple-200 mb-4 flex justify-center items-center gap-2">
          <span className="h-[50px] flex justify-center items-center w-[40px] rounded-md bg-purple-200/30 border-solid border-purple-300 border-[1px]">
            OR
          </span>
          <span> Text Me Here</span>
        </h1>
        <div className="flex justify-center items-center flex-col gap-4 w-[400px] max-w-full py-4 rounded-lg bg-cu-white/15 border-purple-300 border-[1px] border-solid">
          {!isFormSubmitted ? (
            <>
              {" "}
              <input
                type="text"
                name="name"
                className="w-[80%] px-4 py-2 rounded-md cursor-pointer bg-purple-100 border-solid border-purple-400 focus:border-cu-primary border-[2px] duration-300 text-[#775fb6] font-semibold outline-none text-lg  placeholder:text-purple-400 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                value={name}
                onChange={(e) => handelChange(e)}
                placeholder="Your name"
              />
              <input
                type="text"
                name="email"
                className="w-[80%] px-4 py-2 rounded-md cursor-pointer bg-purple-100 border-solid border-purple-400 focus:border-cu-primary border-[2px] duration-300 text-[#775fb6] font-semibold outline-none text-lg  placeholder:text-purple-400 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                value={email}
                onChange={handelChange}
                placeholder="example@gmail.com"
              />
              <textarea
                name="message"
                value={message}
                className="w-[80%] px-4 py-2 rounded-md bg-purple-100 cursor-pointer border-solid border-purple-400 focus:border-cu-primary border-[2px] duration-300 text-[#775fb6] font-semibold outline-none text-lg  placeholder:text-purple-400 resize-none min-h-[150px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                placeholder="What Are Thinking"
                onChange={(e) => handelChange(e)}
              ></textarea>
              <button
                className="w-[80%] flex justify-center items-center rounded-md bg-[#775fb6] py-2 text-cu-white border-solid border-purple-200 border-[2px]  duration-300 shadow-2xl"
                onClick={() => handelSubmit()}
              >
                {isLoading && (
                  <MoonLoader size={40} speedMultiplier={0.5} color="#ffffff" />
                )}
                Send Message
              </button>
            </>
          ) : (
            <h1 className="text-xl text-purple-200 flex justify-center items-center gap-2">
              Thanks For Texting Me
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Footer, "footer");
