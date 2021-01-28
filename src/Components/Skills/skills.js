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
                    <p>Dit is een korte tekst met mijn magische js skills.</p>
                </article>
                <article>
                    <h2>Js</h2>
                    <img src={skills5} alt=""/>
                    <p>Dit is nog een stuk over js, gewoon omdat ik aan hubert wil zeggen dat ik ook js kan.</p>
                </article>
                <article>
                    <h2>Laravel</h2>
                    <img src={skills5} alt=""/>
                    <p>Laravel, maar GENE FECKING CMS EH MAAT</p>
                </article>
                <article>
                    <h2>.Net</h2>
                    <img src={skills5} alt=""/>
                    <p>.NET is fecking bere, maar de hubert snapt da nog nie eh. Anders gaak eens een cobitje voor hem opstellen daarin steek wel hoe we met change mgnt moeten werken. Misschien dat hij dan het licht ziet.</p>
                </article>

            </section>
        </>}
}

export default Skills;
