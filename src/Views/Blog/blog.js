import './blog.scss'
import React from 'react';
import Header from "../../Components/Header/header";
import {LoaderDots} from "@thumbtack/thumbprint-react";
import {getDataFromOwnAPI} from "../../Repositories/GenericApiCall";
import Blogs from "../../Components/Blog/blogComponent";
import ReactPlayer from "react-player";
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            blogs: []
        };
    }

    async componentDidMount() {
        await getDataFromOwnAPI("blogs").then(data => {
            this.getShortText(data.blogs)
            this.setState({blogs : data.blogs});
            this.setState({isFetching: false})
        });

    }

    async getShortText(blogs){
        blogs.forEach(blog => {
            blog["shortText"] = blog.text.substring(0,100)
        })
    }
    render() {
        return <>
            <Header/>
            <h1 id="blogTitle">Blog</h1>
            <section id="blog">
                <div id="blogImg" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/blogImg.jpg'})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%'}}>
                </div>

                <div id="posts">
                        {this.state.isFetching ? (
                            <LoaderDots size="medium" theme="muted"/>
                        ) : (
                            <>
                                <Blogs blogs={this.state.blogs}/>
                                <div id='talk'>
                                    <h1>Ignite talk</h1>
                                    <ReactPlayer
                                        className='react-player fixed-bottom'
                                        url='videos/Personal_website_ignite_talk.mkv'
                                        width='50%'
                                        height='50%'
                                        controls = {true}
                                    />
                                </div>
                            </>
                        )}
                </div>
            </section>
        </>}
}

export default Blog;
