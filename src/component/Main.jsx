import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import Img from "../images/fadly9.png";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

const Main = () => {
  return (
    <div id="main">
      <img
        className=" w-full h-screen object-cover object-left scale-x-[-1]"
        src={Img}
        alt=""
      />
      <div className=" w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Fadly Ridwan
          </h1>
          <h2 className=" flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "React JS Developer",
                1000,
                "Front End Developer",
                1000,
                "Quality Assurance Engineer",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              //   speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className=" flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://www.facebook.com/muhamadfadlyridwan"
              target="_blank"
            >
              <FaFacebookF className=" cursor-pointer" size={20} />
            </a>
            <a href="https://www.instagram.com/fadlyridwan/" target="_blank">
              <FaInstagram className=" cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-fadli-ridwan/"
              target="_blank"
            >
              <FaLinkedinIn className=" cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/fadlyridwan/" target="_blank">
              <FaGithub className=" cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
