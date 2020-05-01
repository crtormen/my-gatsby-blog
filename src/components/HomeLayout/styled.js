import styled from 'styled-components';
import media from 'styled-media-query';


export const LayoutWrapper = styled.section`
  display: grid;

  grid-template-rows: 100vh auto 60px;

  grid-template-areas: "hd"
                        "main"
                        "ft"; 
  
`

export const LayoutMain = styled.main`
  background: var(--background);
  padding: 0;
  transition: background, color 0.5s;
  width: 100%;
  grid-area: main;
  display: grid;

  
  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`