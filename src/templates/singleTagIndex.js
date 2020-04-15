import React from 'react';
import { graphql, Link } from 'gatsby';

const SingleTagTemplate = ({data, pageContext }) => {
    const { posts, tagName} = pageContext;

    return (
        <div>
            <div>
                <h1>Posts about {tagName}</h1>
                <p></p>
            </div>
            <div>
                <ul>
                    {
                    posts.map((post, i) => 
                        <li key={i}><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SingleTagTemplate;