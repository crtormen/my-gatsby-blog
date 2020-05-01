import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const SectionLinksWrapper = styled.nav`
    ${media.lessThan("large")`
        display: none
    `}
`

export const SectionLinksList = styled.ul`
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const SectionLinksItem = styled.li`
    padding: 0 1.2rem;

    .active {
        color: var(--highlight);
    }
`

export const SectionLinksLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;

    &:hover {
        color: var(--highlight)
    }
`