import React from "react";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Maze Pathfinding Game</h3>
        <p>
          Developed an interactive Maze Game using Pygame with BFS Algorithm for pathfinding. Features include dynamic maze generation, smooth animations, and real-time distance calculation.
        </p>
      </div>
      <div className="project">
        <h3>Aptitude Builder Game</h3>
        <p>
          Built a web-based game using React.js and MongoDB to enhance problem-solving skills. Includes multiple difficulty levels and an intuitive UI/UX design.
        </p>
      </div>
      <div className="project">
        <h3>Figma UI/UX Prototype</h3>
        <p>
          Designed a responsive and user-friendly UI prototype in Figma with detailed wireframes and accessibility features.
        </p>
      </div>
      <div className="project">
        <h3>AWS Cloud Internship</h3>
        <p>
          Gained hands-on experience with AWS services like EC2, S3, and Lambda. Worked on deploying scalable applications and optimizing cloud costs.
        </p>
      </div>
    </section>
  );
};

export default Projects;