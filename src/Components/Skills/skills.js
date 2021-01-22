import './skills.scss'
import React from 'react';
import Header from "../Header/header";
import skills5 from '../../images/skills_5.svg'
class Skills extends React.Component {
    render() {
        return <>
            <Header/>
            <section id="skills">
                <h1>Skills</h1>
                <article>
                    <h2>Js</h2>
                    <img src={skills5} alt=""/>
                    <p>Dit is een korte tekst</p>
                </article>
                <article>
                    <h2>Js</h2>
                    <img src={skills5} alt=""/>
                    <p>Dit is een korte tekst</p>
                </article>
                <article>
                    <h2>Laravel</h2>
                    <img src={skills5} alt=""/>
                    <p>Laravel, maar GENE FECKING CMS EH MAAT</p>
                </article>
                <article>
                    <h2>Js</h2>
                    <img src={skills5} alt=""/>
                    <p>Dit is een korte tekst</p>
                </article>

            </section>
        </>}
}

export default Skills;
