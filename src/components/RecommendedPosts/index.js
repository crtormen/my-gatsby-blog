import React from 'react';
import propTypes from 'prop-types';
import * as S from './styled';
import getThemeColor from "../../utils/getThemeColor";

const RecommendedPosts = ({previous, next}) => (
    <S.RecommendedWrapper>
        <S.RecommendedLink 
            to={ previous ? previous.fields.slug : '/' } 
            className="previous"
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
        >
            {previous ? previous.frontmatter.title : "Voltar para Home"}
        </S.RecommendedLink> 
        <S.RecommendedLink 
            to={next ? next.fields.slug : '/' } 
            className="next"
            cover
            direction="left"
            bg={getThemeColor()}
            duration={0.6}
        >
            { next ? next.frontmatter.title : "Voltar para Home"}
        </S.RecommendedLink>
    </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        }),
    }),
    previous: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        }),
    }),
}

export default RecommendedPosts;