import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience
            (Technical)</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Teaching Assistant"
            subTitle="Codeshala - (Jun 2023 - Jul 2023)"
            result="HYBRID"
            des="Provides free coding education to underserved communities, with essential programming skills and fostering future career opportunities in technology."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="CodeofFun (Oct 2021- Aug 2022)"
            result="REMOTE"
            des="Expert in developing customized portfolio makers, allowing users to build personalized, dynamic portfolios with ease."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience
            (Civil Engineering)</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Civil Engineer Intern"
            subTitle="Locksish Digitech Pvt Ltd - (Jun 2024 - Aug 2024)"
            result="DELHI"
            des="Expertise includes residential, commercial, and industrial construction with a focus on timely delivery, budget management, and superior craftsmanship."
          />
          <ResumeCard
            title="Civil Engineer Trainee"
            subTitle="CPWD - (Jun 2023 - Jul 2023)"
            result="DELHI"
            des="The Centra Vista project includes constructing new government buildings, upgrading infrastructure, and creating expansive public spaces to reflect India’s contemporary architectural vision."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;