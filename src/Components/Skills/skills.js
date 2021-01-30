
import React from 'react'

const Skills = ({ skills }) => {
    return (
        <div>
            {skills.map((skill) => (
                <article>
                    <h2>{skill.name}</h2>
                    <div style={{height:'24px', width: skill.level + '%', backgroundColor:"black"}}/>
                    <p>{skill.text}</p>
                </article>
            ))}
        </div>
    )
};
export default Skills
