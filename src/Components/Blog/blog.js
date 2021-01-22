import './blog.scss'
import React from 'react';
import Header from "../Header/header";
import {Link} from "react-router-dom";
class Blog extends React.Component {
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

                    <article>
                        <h2>Titel van het artikel</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <p>12 december 2020</p>
                        <Link to="/blog/1">Read More...</Link>
                    </article>

                    <article>
                        <h2>Titel van het artikel</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <p>12 december 2020</p>
                        <Link to="/blog/1">Read More...</Link>
                    </article>

                    <article>
                        <h2>Titel van het artikel</h2>
                        <p>One advanced diverted domestic sex repeated bringing you old. One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.One advanced diverted domestic sex repeated bringing you old.</p>
                        <p>12 december 2020</p>
                        <Link to="/blog/1">Read More...</Link>
                    </article>
                </div>

            </section>
        </>}
}

export default Blog;
