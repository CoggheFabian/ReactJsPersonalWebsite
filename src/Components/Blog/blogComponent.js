import {Link} from "react-router-dom";
import React from "react";

const Blogs = ({ blogs }) => {

    return (
        <div>
            {blogs.map((blog) => (
                <article>
                    <h2>{blog.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: blog.shortText}} />
                    <p>{blog.createdAt}</p>
                    <Link to={
                        {pathname: `/blog/${blog.id}`,
                         blogPost: blog}
                    } className="blogPostLink"> Read More...</Link>
                </article>
            ))}
        </div>
    )
};
export default Blogs
