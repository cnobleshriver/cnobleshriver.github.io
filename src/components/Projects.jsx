import React from 'react'
import styles from "../style";

const Projects = () => {
  // Placeholder projects
  const projects = [
    {
      name: "Project 1",
      description: "This is a description for Project 1.",
      thumbnail: "#" // Replace with URL of thumbnail
    },
    {
      name: "Project 2",
      description: "This is a description for Project 2.",
      thumbnail: "#" // Replace with URL of thumbnail
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className={`flex flex-wrap justify-center ${styles.paddingY}`}>
      <h2 className="font-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] text-center w-full">
        My Projects
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img className="project-thumbnail" src={project.thumbnail} alt={project.name} />
          <h3 className="project-title text-gradient">{project.name}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects
