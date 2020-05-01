import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.section`
    grid-area: hd;
    overflow: hidden;
    position: relative; 
    width: 100%;
    height: 100vh;
    background: var(--background);

`  

export const HeaderMenuWrapper = styled.header`
    position: absolute;
    /* top: 0; */
    width: 100vw;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0.5rem 2rem;
    background: rgba(255,255,255,0.4);
    border-bottom: 1px solid var(--highlight);
    ${media.lessThan("large")`
        padding: 0.5rem;
        background: transparent;
        border-bottom: none;
    `}
`
export const HeadlineWrapper = styled.div`
    z-index: 1;
    position: relative;
    top: 30vh;
    width: 60%;
    height: 50vh;
    display: flex;
    margin: auto 5rem;
    flex-direction: column;
    justify-content: center;
    
    ${media.lessThan("large")`
        /* background: rgba(255, 148, 194, 0.25); */
        top: 30vh;
        height: 65vh;

        margin: auto 1rem;
        /* padding: 2rem 0; */
    `}
`
export const Headline = styled.h1`
    font-family: "Lato";
    font-style: italic;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.069rem;
    max-width: 60vw;
    line-height: 1.4;
    color: #ca5c8c; /*var(--postColor);*/
    text-shadow: 1px 1px 1px black; 
    padding: 1rem 0;

    ${media.between('559px','medium')`
        font-size: 3.5rem;
        font-weight: 500;
        margin-bottom: 1rem;
    `}


    ${media.lessThan('558px')`
        font-size: 2.5rem;
        font-weight: 500;
    `}
`

export const SubHeadline = styled.h3`
        font-family: "caveat";
        font-size: 3rem;
        font-weight: 400;
        color: var(--postColor); /*var(--gold);*/
        /* text-shadow: 1px 1px 1px black;  */
        max-width: 50vw;
        margin-bottom: 2rem;

        ${media.lessThan('large')`
            font-size: 3rem;
            font-weight: 400;
            max-width: 30vw;
            margin-bottom: 0;
        `}
        ${media.lessThan('medium')`
            font-size: 2rem;
            font-weight: 400;

        `}
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2rem 0;
    ${media.lessThan('large')`
        width: 100vw;
    `}    

    ${media.lessThan('medium')`
        flex-direction: column;
        width: 60vw;
    `}   
    
    ${media.between('400px','650px')`
        width: 80vw;
    `}

    ${media.lessThan('small')`
        width: 90vw;
        align-items: center;
    `}   

`

export const Button = styled.button`
  background-color: ${({type}) => type === 'primary' ? 'var(--blue)' : 'var(--background)'};
  border: ${({type}) => type === 'primary' ? 'none' : '1px solid black'};
  color: ${({type}) => type === 'primary' ? 'white' : 'var(--postColor)'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 4px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({type}) => type === 'primary' && 'var(--highlight)'};
    border-color: ${({type}) => type === 'secondary' && 'var(--highlight)'};
    color: ${({type}) => type === 'secondary' && 'var(--highlight)'};
    transition-duration: 0.3s;
  }

  ${media.lessThan('medium')`
     width: 60%;
  `}

  ${media.lessThan('small')`
     width: 90%;
  `}   

`
