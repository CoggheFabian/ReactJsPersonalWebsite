import './blogPost.scss'

import React from 'react';
import Header from "../Header/header";
class BlogPost extends React.Component {

    render() {
        return <>
            <Header/>
            <article id="blogPost">
                <div id="blogInfo">
                    <h1>Dit is een artikel titel</h1>
                    <h2><span><strong>Click here</strong></span><strong> to start using the </strong><strong><em>HTML editor online</em></strong></h2>
                    <p><span>Please</span><span> try out the WYSIWYG HTML editor features found in the kitchen sink above to edit and format your text and images</span></p>
                    <p><span>You&rsquo;ll see the content created in the WYSIWYG-HTML editor in source code format on the right.</span><br /><br /></p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>dsfdkjslfjdsflkdsf</p>
                    <p>&nbsp;</p>
                    <p>dsfmldsjfk</p>
                    <p>sdfl&ugrave;mj</p>
                    <p>sdfmldskjfdsmlkjf</p>
                    <p>sdmlkfjdsmlkfjlmdsfjmldskjflkmdsjflksdef jklsed</p>
                    <p>&nbsp;</p>
                    <p><strong>dsfdsfds</strong></p>
                </div>
                <p id="blogPostDate">12 december 2012</p>
            </article>


        </>}
}

export default BlogPost;