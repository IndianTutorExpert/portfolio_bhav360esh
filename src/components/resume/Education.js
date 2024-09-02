import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Civil Engineering"
            subTitle="Delhi Technological University(2021 - 2025)"
            result="7.24/10"
            des="Pursuing a degree with a focus on structural design, construction management, and environmental engineering."
          />
          <ResumeCard
            title="AISSCE(Class XII)"
            subTitle="Happy Model School (2019 - 2020)"
            result="91%"
            des="Pursuing a rigorous curriculum focused on physics, chemistry, and mathematics. Developing strong analytical skills and problem-solving abilities to prepare for careers in engineering, or related fields."
          />
          <ResumeCard
            title="AISCE(Class X)"
            subTitle="Happy Model School (2017 - 2018)"
            result="83.8%"
            des="An educational institution providing life with a focus on academic achievement, personal growth, and extracurricular involvement.

"
          />
        </div>
      </div>
      {/* part Two */}

      <div className=' hidden md:block'>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Civil Engineer Intern"
            subTitle="Locksish Digitech Pvt Ltd - (Jun 2024 - Aug 2024)"
            result="DELHI"
            des="Expertise includes residential, commercial, and industrial construction with a focus on timely delivery, budget management, and superior craftsmanship."
          />
          <ResumeCard
            title="Teaching Assistant"
            subTitle="Codeshala - (Jun 2023 - Jul 2023)"
            result="HYBRID"
            des="Provides free coding education to underserved communities, equipping participants with essential programming skills and fostering future career opportunities in technology."
          />
          <ResumeCard
            title="Civil Engineer Trainee"
            subTitle="CPWD - (Jun 2023 - Jul 2023)"
            result="DELHI"
            des="The Centra Vista project includes constructing new government buildings, upgrading infrastructure, and creating expansive public spaces to reflect India’s contemporary architectural vision."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="CodeofFun (Oct 2021- Aug 2022)"
            result="REMOTE"
            des="Expert in developing customized portfolio makers, allowing users to build personalized, dynamic portfolios with ease."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education