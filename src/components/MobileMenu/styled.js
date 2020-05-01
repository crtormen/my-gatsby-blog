import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MobileMenuWrapper = styled.nav`
    position: absolute;
    background: var(--background);
    text-align: right;
    border-left: 1px solid var(--borders);
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    width: 100%;
    transform: ${({ visible }) => visible ? 'translateX(0)' : 'translateX(+100%)'};

    ${media.greaterThan("large")`
        display: none;
    `}
`

export const MobileMenuList = styled.ul`
    /* transform: ${({ visible }) => visible ? 'translateX(0)' : 'translateX(-100%)'}; */
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;


`

export const MobileMenuItem = styled.li`
    padding: 1rem 0;
    .active {
        color: var(--highlight);
    }
`

export const MobileMenuLink = styled(AniLink)`
    color: var(--texts);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;

    &:hover {
        color: var(--highlight)
    }
`
