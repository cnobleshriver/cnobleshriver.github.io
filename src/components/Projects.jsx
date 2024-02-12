import React from 'react'
import styles from "../style";
import { anthiasimg, courseReviews, cglogo, thejetbusiness} from '../assets';

const Projects = () => {
  const projects = [
    {
      name: "UMass Club Golf Website",
      description: "Built a website for the UMass Club Golf team, which I am a member of. (In Progress)",
      thumbnail: cglogo,
      link: "https://umass-club-golf.vercel.app/" 
    },
    {
      name: "The Jet Business",
      description: "Redesigned the website for The Jet Business, a private jet broker based in London. (In Progress)",
      thumbnail: thejetbusiness,
      link: "https://the-jet-business-d87ldcxdl-cnobleshriver.vercel.app/" 
    },
    {
      name: "Anthias",
      description: "Monitor risk on DeFi borrowing and lending markets.",
      thumbnail: anthiasimg,
      link: "https://anthias.xyz" 
    },
    {
      name: "UMass Course Reviews",
      description: "Built using Next.js and Mantine UI as a part of Hack UMass XI.",
      thumbnail: courseReviews,
      link: "https://umass-course-reviews.vercel.app/"
    },
  ];

  return (
    <section id="projects" className={`flex flex-wrap justify-center ${styles.paddingY}`}>
      <h2 className="font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center w-full">
        Projects and Collaborations
      </h2>
      {projects.map((project, index) => (
        <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
          <div className="project-card">
            <img className="project-thumbnail" src={project.thumbnail} alt={project.name} />
            <h3 className="project-title text-gradient">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects
