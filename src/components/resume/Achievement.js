import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Job Achievements</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Civil Engineer Intern"
            subTitle="Locksish Digitech Pvt Ltd - (Jun 2024 - Aug 2024)"
            result="SUCCESS"
            des="Led renovation of a three-story building, featuring modular kitchen and interiors."
          />
          <ResumeCard
            title="Teaching Assistant"
            subTitle="Codeshala - (Jun 2023 - Jul 2023)"
            result="SUCCESS"
            des="I taught around 30+ financially underprivileged youngsters how to code, giving them access to opportunities and useful technical knowledge."
          />
          <ResumeCard
            title="Civil Engineer Trainee"
            subTitle="CPWD - (Jun 2023 - Jul 2023)"
            result="SUCCESS"
            des="Assisted in coordinating resource allocation, and procurement processes, ensuring efficient project progress and compliance with project schedules."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="CodeofFun (Oct 2021- Aug 2022)"
            result="SUCCESS"
            des="Designed and developed the user interface for the website, focusing on enhancing user experience and functionality."
          />
        </div>
      </div>
        <div>
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>
          <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="DEPTH-Society of Department of Theoretical Physics (DTU)"
              subTitle="Design Head"
              result="Success"
              des="Build a community of Physics and Astrophysics enthusiasts. Organised events and designed posters related to Physics and Astrophysics."
            />
            <ResumeCard
              title="Shakuntla Poddar Welfare Foundation"
              subTitle="Educational NGO"
              result="Success"
              des="Volunteered during summer holidays to teach basic courses to children with special needs, providing tailored educational support and fostering a supportive learning environment."
            />
            <ResumeCard
              title="DESH KE MENTOR"
              subTitle="Student Coordinator "
              result="Success"
              des="Mentored students of school levels regarding their problems and future goals."
            />
            <ResumeCard
              title="BHU UET"
              subTitle="BHU Entrance Exam 2021"
              result="Success"
              des="Secured All India Rank 210 in BHU-UET 2021. Got an opportunity to admitted in one of the best course."
            />
          </div>
        </div> 
    </motion.div>
  );
};

export default Achievement;