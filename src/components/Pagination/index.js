import React from 'react';
import propTypes from 'prop-types';
import { gatsby, Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import * as S from './styled';

const Pagination = ({ 
    isFirst, 
    isLast, 
    currentPage, 
    numPages,
    prevPage, 
    nextPage 
}) => (
    <S.PaginationWrapper>
        { !isFirst && <AniLink to={prevPage}> Página anterior</AniLink>}
        <p>{currentPage} de {numPages}</p>
        { !isLast && <AniLink to={nextPage}> Próxima página</AniLink>}
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired, 
    isLast: propTypes.bool.isRequired, 
    currentPage: propTypes.number.isRequired, 
    numPages: propTypes.number.isRequired, 
    prevPage: propTypes.string,
    nextPage: propTypes.string
}

export default Pagination;