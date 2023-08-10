import React from "react";
import Projectitem from "./Projectitem";
import web1Img from "../images/webfadly1.png";
import web2Img from "../images/webfadly2.png";
import web3Img from "../images/webfadly3.png";
import web4Img from "../images/webfadly4.png";

const Projects = () => {
  return (
    <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className=" text-center py-8">
        SOME OF THE PROJECTS I HAVE DONE BOTH INDIVIDUALLY OR WITH A TEAM.
      </p>
      <div className=" grid sm:grid-cols-2 gap-12">
        <Projectitem
          img={web1Img}
          title="E-Commerce App"
          link="https://react-project-edspertid.vercel.app/"
          createBy="Vite + React JS"
        />
        <Projectitem
          img={web2Img}
          title="Search Movie App"
          link="https://search-movie-app-eta.vercel.app/"
          createBy="React JS"
        />
        <Projectitem
          img={web3Img}
          title="Bp Juara App"
          link="https://bpjuara.bintangpelajar.com/home"
          createBy="CI3 & PHP "
        />
        <Projectitem
          img={web4Img}
          title="BP App"
          link="https://www.bintangpelajar.com/"
          createBy="CI3 & PHP"
        />
      </div>
    </div>
  );
};

export default Projects;
