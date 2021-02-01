import './skills.scss'
import React from 'react';
import Header from "../../Components/Header/header";
import Skills from "../../Components/Skills/skills";
import { getDataFromOwnAPI } from "../../Repositories/GenericApiCall"
import { LoaderDots } from '@thumbtack/thumbprint-react';

class SkillsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            skills: []
        };
    }

    async componentDidMount() {
        await getDataFromOwnAPI("skills").then(data => {
            this.setState({skills : data.skills});
            this.setState({isFetching: false})
        });

    }

    render() {
        return (
            <div>
                <Header/>
                {this.state.isFetching ? (
                    <LoaderDots size="medium" theme="muted"/>
                ) : (
                    <section id="skills">
                        <h1>Skills</h1>
                        <Skills skills={this.state.skills} />
                    </section>
                )}
            </div>
        );
    }
}

export default SkillsView;
