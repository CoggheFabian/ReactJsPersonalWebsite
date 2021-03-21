import React from "react";

const BlogPost = ({ blogPost }) => {

    return (
        <article id="blogPost">
            <div id="blogInfo">
                <h1>{blogPost.title}</h1>
                <div dangerouslySetInnerHTML={{__html: blogPost.text}} />
            </div>
            <p id="blogPostDate">{blogPost.createdAt}</p>
        </article>
    )
};
export default BlogPost
