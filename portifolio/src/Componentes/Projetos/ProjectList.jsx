// ProjectList.jsx
import React from 'react';
import Project from './Project'; // Verifique se o nome e o caminho estão corretos

function ProjectList({ projects }) {
    return (
        <div className="flex flex-wrap justify-around gap-8">
            {projects.map((project, index) => (
                <Project key={index} title={project.title} image={project.image} link={project.link} />
            ))}
        </div>
    );
}

export default ProjectList;