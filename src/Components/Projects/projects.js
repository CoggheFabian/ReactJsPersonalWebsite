import React from 'react'

const Projects = ({ projects }) => {
    async function goToGitHubPage(project){
        let baseUrl = "https://github.com/CoggheFabian/"
        window.location = `${baseUrl}${project.name}`
    }

    return (
        <div>
            {projects.map((project) => (
                <article>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <a onClick={() => goToGitHubPage(project)}>See on Github ...</a>
                </article>
            ))}
        </div>
    )
};
export default Projects
