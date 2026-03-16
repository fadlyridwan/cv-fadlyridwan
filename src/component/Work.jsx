import React from "react";
import Workitem from "./Workitem";

const data = [
  {
    year: "2022 - Last Contract 30 Juni 2026",
    title: "PT. Berlian Sistem Informasi - Quality Assurance Engineer",
    duration: "4 Years",
    details: [
      "Make Scenario testing from the CR (Customer Requirements) obtained.",
      "Conduct SIT (System Integration Testing) from the results of scenarios that have been made, scenarios include positive testing and negative testing.",
      "Make reports and evidence for testing by Jira or Azure DevOps.",
      "Perform regression testing.",
      "Automate testing with Katalon Studio.",
    ],
  },
  {
    year: "2021 - 2022",
    title: "Bintang Pelajar, Bogor - Programmer Front End Developer (React JS)",
    duration: "6 Month",
    details: [
      "Develop & create programs.",
      "Program debugging.",
      "Program testing.",
    ],
  },
  {
    year: "2020 - 2021",
    title: "PT. Prioritas Group Head Office, Bogor - IT Programmer",
    duration: "6 Month",
    details: [
      "Develop & create programs.",
      "Program debugging.",
      "Program testing.",
    ],
  },
  {
    year: "2018 - 2020",
    title:
      "PT. Prioritas Group Head Office, Bogor - IT Implementation / IT Quality Assurance",
    duration: "2 Years",
    details: [
      "Perform maintenance of programs running in the branch.",
      "Conduct IT branch training in the use of Web & Mobile Apps.",
      "Solving penetration test in Web & Mobile Apps including unit testing, functional testing, integration testing, system testing, performance testing & live testing in branch.",
      "Visits branches with problems in the programs.",
    ],
  },
  {
    year: "2016 - 2017",
    title: "PT. Prioritas Group Head Office, Bogor - Administration AR",
    duration: "1 Years",
    details: [
      "Conduct visits to national branches to improve branches with low collection & high arrears.",
      "Assist branches in billing processes.",
      "Survey prospective customers to maximize collection and reduce arrears.",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-4xl font-bold text-center text-[#001b5e] pb-10">
        Work Experience
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
