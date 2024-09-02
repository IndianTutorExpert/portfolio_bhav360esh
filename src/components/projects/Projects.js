import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Comrpehensive DashBoard"
          des="Features interactive graphs for data visualization, a calendar for scheduling and events, 
          and a to-do list for task management. Designed to streamline information access and enhance productivity."
          src={projectOne}
          gitlink="https://github.com/Bhav360esh/dashboard"
          liveurl="https://dashboard360.vercel.app/"
        />
        <ProjectsCard
          title="Admission Website(Freelancing)"
          des="Designed to attract and convert prospects for management quota admissions through targeted SEO strategies. 
          Features user-friendly forms and compelling content to capture leads and boost inquiries."
          src={projectTwo}
           gitlink="https://github.com/Bhav360esh/bmsadmission"
          liveurl="https://www.bmsadmission.com"
        />
        <ProjectsCard
          title="Renovation of 50-Year-Old Residential Building"
          des="Overhauled and modernized a historic home, including structural updates and modern interior design improvements, 
          blending contemporary functionality with classic charm."
          src={projectThree}
           gitlink="https://drive.google.com/drive/folders/1waBeBUw6XfjlH80aFGNTTR9CwFe9S01l?usp=sharing"
          liveurl="https://drive.google.com/drive/folders/1waBeBUw6XfjlH80aFGNTTR9CwFe9S01l?usp=sharing"
        />
      </div>
    </section>
  );
}

export default Projects