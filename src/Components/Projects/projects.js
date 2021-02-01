import React from 'react'
import {Link} from "react-router-dom";

const Projects = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => (
                <article>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <Link to={project.html_url}>See on github...</Link>
                </article>
            ))}
        </div>
    )
};
export default Projects
