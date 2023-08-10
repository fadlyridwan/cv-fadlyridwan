import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: "2022 - Current",
    title: "PT. Berlian Sistem Informasi - Quality Assurance Engineer",
    duration: "1 Years",
    details:
      "1. Make Scenario testing from the CR (Customer Requirements) obtained. 2. Conduct SIT (System Integration Testing) from the results of scenarios that have been made, scenarios include positive testing and negative testing. 3. Make reports and evidence for testing by Jira or Azure devops. 4. Perform regression testing. 5. Automate testing with Katalon Studio.",
  },
  {
    year: "2021 - 2022",
    title: "Bintang Pelajar, Bogor - Programmer Front End Developer (React JS)",
    duration: "6 Month",
    details: "Develop & create programs, program debugging & program testing.",
  },
  {
    year: "2018 - 2020",
    title:
      "PT. Prioritas Group Head Office, Bogor - IT Implementation / IT Quality Assurance",
    duration: "3 Years",
    details:
      "1. Perform maintenance of programs running in the branch. 2. Conducting IT branch training in the use of Web & Mobile Apps. 3. Solving penetration test in Web & Mobile Apps unit testing so functional testing, integration testing, system testing, performance testing & live testing in branch. 4. Visits branches with problem in the programs.",
  },
  {
    year: "2016 - 2017",
    title: "PT. Prioritas Group Head Office, Bogor - Administration AR",
    duration: "1 Years",
    details:
      "Conduct a visit to the national branch to make improvements to branches that have a low collection & high arrears and help branches in terms of billing & survey prospective customers so that the branch get the maximum collection and low arrears.",
  },
];

const Work = () => {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e] pb-5">
        Work
      </h1>
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
