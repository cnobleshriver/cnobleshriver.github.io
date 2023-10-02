import React from 'react'
import styles from "../style";
import { sortingvisualizer, anthiaslogo, anthiasimg} from '../assets';

const Projects = () => {
  // Placeholder projects
  const projects = [
    {
      name: "Anthias",
      description: "Monitor risk on DeFi borrowing and lending markets.",
      thumbnail: anthiaslogo, // Replace with URL of thumbnail
      link: "https://anthias.xyz" // Replace with URL of the project
    },

    {
      name: "Sorting Visualizer",
      description: "A React project that implements sorting algorithms.",
      thumbnail: sortingvisualizer, // Replace with URL of thumbnail
      link: "https://github.com/cnobleshriver/sorting-visualizer" // Replace with URL of the project
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className={`flex flex-wrap justify-center ${styles.paddingY}`}>
      <h2 className="font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center w-full">
        My Projects
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
