import './blogPost.scss'
import ReactPlayer from 'react-player'

import React from 'react';
import Header from "../../Components/Header/header";
import BlogPost from "../../Components/Blog/blogPost";
class BlogPostView extends React.Component {
    render() {
        return <>
            <Header/>
            <BlogPost blogPost={this.props.location.blogPost}/>
        </>
    }
}

export default BlogPostView;