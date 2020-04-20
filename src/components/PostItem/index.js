import React from 'react'
import PropTypes from 'prop-types';
import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled';

const PostItem = ({slug, tags, title, date, timeToRead, description}) => {
    return (
        <S.PostItemLink 
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            to={slug}>
            <S.PostItemWrapper>
                <S.PostItemTag background="red">{tags}</S.PostItemTag>
                <S.PostItemInfo> 
                    <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>
                    <S.PostItemTitle>
                        {title}
                    </S.PostItemTitle>
                    <S.PostItemDescription>
                        {description}
                    </S.PostItemDescription>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    )
}

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    // tags: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
}

export default PostItem;