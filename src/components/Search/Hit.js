import React from 'react';
import PostItem from '../PostItem';

const Hit = ({ hit }) => (
    <PostItem
        slug = {hit.fields.slug}
        tags = {hit.tags} 
        title = {hit.title}
        date = {hit.date}
        description = {hit.description}
    />
)

export default Hit;