import './blogPost.scss'

import React from 'react';
import Header from "../../Components/Header/header";
import BlogPost from "../../Components/Blog/blogPost";
class BlogPostView extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <>
            <Header/>
            <BlogPost blogPost={this.props.location.blogPost}/>
        </>
    }
}

export default BlogPostView;