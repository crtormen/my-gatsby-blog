import React from 'react'
import PropTypes from 'prop-types';
import getThemeColor from "../../utils/getThemeColor"

import * as S from './styled';
import {BG_COLORS} from '../../utils/colors'

const PostItem = ({slug, tags, category, title, date, timeToRead, description}) => {
    return (
        <S.PostItemLink 
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}
            to={slug}>
            <S.PostItemWrapper>
                <S.PostItemTag background=
                  { BG_COLORS.map(item => {
                        if (item.key === category) 
                            return (item.color)
                    })
                  }
                >{category}</S.PostItemTag>
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
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
}

export default PostItem;