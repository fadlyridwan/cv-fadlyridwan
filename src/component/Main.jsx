// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa";
// import Img from "../images/fadly9.png";
// // import { useNavigate } from "react-router-dom";

// // const navigate = useNavigate();

// const Main = () => {
//   return (
//     <div id="main">
//       <img
//         className=" w-full h-screen object-cover object-left scale-x-[-1]"
//         src={Img}
//         alt=""
//       />
//       <div className=" w-full h-screen absolute top-0 left-0 bg-white/40">
//         <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
//           <h1 className=" sm:text-5xl text-4xl font-bold text-gray-800">
//             I'm Fadly Ridwan
//           </h1>
//           <h2 className=" flex sm:text-3xl text-2xl pt-4 text-gray-800">
//             I'm a
//             <TypeAnimation
//               sequence={[
//                 "React JS Developer",
//                 1000,
//                 "Front End Developer",
//                 1000,
//                 "Quality Assurance Engineer",
//                 1000,
//                 "Tech Enthusiast",
//                 1000,
//               ]}
//               wrapper="div"
//               cursor={true}
//               //   speed={50}
//               style={{ fontSize: "1em", paddingLeft: "5px" }}
//               repeat={Infinity}
//             />
//           </h2>
//           <div className=" flex justify-between pt-6 max-w-[200px] w-full">
//             <a
//               href="https://www.facebook.com/muhamadfadlyridwan"
//               target="_blank"
//             >
//               <FaFacebookF className=" cursor-pointer" size={20} />
//             </a>
//             <a href="https://www.instagram.com/fadlyridwan/" target="_blank">
//               <FaInstagram className=" cursor-pointer" size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/muhamad-fadli-ridwan/"
//               target="_blank"
//             >
//               <FaLinkedinIn className=" cursor-pointer" size={20} />
//             </a>
//             <a href="https://github.com/fadlyridwan/" target="_blank">
//               <FaGithub className=" cursor-pointer" size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
import React from "react";
import Img from "../images/fadly9.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover object-center "
        src={Img}
        alt="background"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/60"></div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center px-6">
        <div className="max-w-[700px] text-center lg:text-left">
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Muhamad Fadli Ridwan
            </span>
          </h1>

          {/* Type Animation */}
          <h2 className="flex justify-center lg:justify-start text-2xl sm:text-3xl pt-4 text-gray-200">
            I'm a
            <TypeAnimation
              sequence={[
                " React JS Developer",
                1500,
                " Front End Developer",
                1500,
                " Quality Assurance Engineer",
                1500,
                " Tech Enthusiast",
                1500,
              ]}
              wrapper="span"
              cursor={true}
              speed={50}
              repeat={Infinity}
              className="pl-2 text-blue-400"
            />
          </h2>

          {/* Description */}
          <p className="flex justify-center lg:justify-start text-gray-300 pt-4 max-w-[500px]">
            Passionate about building modern web applications and ensuring
            software quality through testing and automation.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 pt-8">
            <a
              href="https://www.facebook.com/muhamadfadlyridwan"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-500 transition duration-300"
            >
              <FaFacebookF className="text-white" size={18} />
            </a>

            <a
              href="https://www.instagram.com/fadlyridwan/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram className="text-white" size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhamad-fadli-ridwan/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300"
            >
              <FaLinkedinIn className="text-white" size={18} />
            </a>

            <a
              href="https://github.com/fadlyridwan/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gray-700 transition duration-300"
            >
              <FaGithub className="text-white" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
