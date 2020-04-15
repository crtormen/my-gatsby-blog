import React from 'react';
import { graphql, Link } from 'gatsby';

const AllTagsTemplate = ({data, pageContext}) => {
    const {tags } = pageContext;
    return (
        <div>
            <div style={{fontFamily: 'avenir'}}>
                <ul>
                {tags.map((tagName, i) => 
                    <li key={i}>
                        <Link to={`tags/${tagName}`}>
                            {tagName}
                        </Link>
                    </li>
                )}
                </ul>
            </div>
        </div>
    )
}

export default AllTagsTemplate;