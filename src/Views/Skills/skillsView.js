import './skills.scss'
import React from 'react';
import Header from "../../Components/Header/header";
import Skills from "../../Components/Skills/skills";
import GenericApiCall from "../../Repositories/GenericApiCall";
// import Skills from "../../Components/Skills/skills"
class SkillsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            skills: []
        };
    }

    async componentDidMount() {
        await GenericApiCall("skills").then(data => this.setState({ skills: data.skills }))
    }

    render() {
        return <>
            <Header/>
            <section id="skills">
                <h1>Skills</h1>
                <Skills skills={this.state.skills} />
            </section>
        </>}
}

export default SkillsView;
