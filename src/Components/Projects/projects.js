import './projects.scss'

import React from 'react';
import Header from "../Header/header";
class Projects extends React.Component {

    render() {
        return <>
            <Header/>
            <h1 id="projectsTitle">Projects</h1>
            <section id="projectsContainer">
                <div id="projects">
                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>

                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>

                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>

                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>

                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>

                    <article>
                        <h2>ProjectTitle from gethub</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <a href="">See on github</a>
                    </article>


                </div>
                <div id="projectsImg" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/projectsImg.jpg'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'}}>
                </div>

            </section>
        </>}
}

export default Projects;