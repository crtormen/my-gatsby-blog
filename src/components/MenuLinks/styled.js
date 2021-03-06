import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
    ${media.lessThan("large")`
        display: none;
    `}
`

export const MenuLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
`

export const MenuLinksItem = styled.li`
    padding: 0 1rem;


    .active {
        color: var(--highlight);
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--texts);

    text-decoration: none;

    &:hover {
        color: var(--highlight)
    }
`