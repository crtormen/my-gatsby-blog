import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';

import texture from '../../images/hello.png';

export const HomeServiceBlocksWrapper = styled.section`
    position: relative;
    overflow: hidden;
    padding: 2rem 10rem;
    text-align: center;
    display: grid;
    grid-template-columns: "1fr 1fr 1fr";
    grid-template-rows: auto;
    grid-template-areas: "hd hd hd"
                        "ft gt pp";
    gap: 2rem 1rem; /* row column */
    justify-items: center;
    
    ${media.lessThan("large")`
        padding: 2rem;
    `}

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.1;
        background-image: url(${texture});
        background-repeat: repeat;
        background-position: 50% 0;
    }
    
`

export const Headline = styled.h2`
    grid-area: hd;
    padding: 2rem 0;
    font-size: 2rem;
    font-family: "Raleway";
    font-weight: 500;

` 
export const Paragraph = styled.p`
    padding: 2rem 0;
    font-size: 1.2rem;
    line-height: 1.2;
    font-family: 'Lato';
    font-weight: 400;
`

export const Span = styled.span`
    font-weight: 600;
    color: ${({ color }) => color && 'var(--gold)'};
`

export const Divider = styled.hr`
    border-top: 3px solid var(--highlight);
    width: 25vw;
    /* margin: 1rem 15rem; */
    border-radius: 5px;
    
    ${media.lessThan("medium")`
        width: 50vw;
    `}
`

export const ServiceBlockWrapper = styled(AniLink)`
    cursor: pointer;
    &:hover {
        transform: scale(1.2)
    }
`

export const ServiceBlockBox = styled.div`
    position: relative;
    /* overflow: hidden; */
    transition: 0.5s;
    height: 300px;
    width: 100%;

    &:hover {
        height: 400px;
    }

    .fertilidade {
        grid-area: ft;
    }
    .gestacao {
        grid-area: gt;
    }
    .pos-parto {
        grid-area: pp;
    }
`
export const ServiceBlockImage = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    transition: 0.5s;
    opacity: 0.5;

    &:hover {
        opacity: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -1;
        background: #fff;
    }

    &::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -2;
        background: #fff;
        filter: blur(40px);
    }
`

export const ServiceBlockText = styled.h3`
    position: absolute;
    font-size: 1rem;
    bottom: 0;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 90px;
    background: rgba(0,0,0,0.4);
    text-align: center;
    transition: 0.5s;

    &:hover {
        transform: scale(1.2);
    }
`