import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const LogoWrapper = styled(Img)`
    /* border-radius: 50%; */
    height: 3.2rem;
    margin: auto;
    width: 14.3rem;

    ${media.lessThan("large")`
        width: 10.2rem;
        height: 2.3rem;
        margin: 1rem;
        /* position: absolute; */
        /* top: 0; */
        /* left: 0; */
    `}
`