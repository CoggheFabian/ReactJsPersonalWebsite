import './projects.scss'

import React from 'react';
import Header from "../../Components/Header/header";
import {LoaderDots} from "@thumbtack/thumbprint-react";
import Projects from "../../Components/Projects/projects";
import {getDataFromOwnAPI, getDataFromGitHubAPI} from "../../Repositories/GenericApiCall";

class ProjectsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            projects: []
        };
    }

    async componentDidMount() {
        await getDataFromGitHubAPI().then(data => {
            this.setState({projects : data});
            this.setState({isFetching: false})
        });

    }

    render() {
        return <>
            <Header/>
            <h1 id="projectsTitle">Projects</h1>
            <section id="projectsContainer">
                {this.state.isFetching ? (
                        <LoaderDots size="medium" theme="muted"/>
                    ) : (
                        <>
                            <div id="projects">
                                <Projects projects={this.state.projects} />
                            </div>
                            <div id="projectsImg" style={{
                                backgroundImage: `url(${process.env.PUBLIC_URL + '/projectsImg.jpg'})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%'}}>
                            </div>
                        </>
                    )}
            </section>
        </>}
}

export default ProjectsView;