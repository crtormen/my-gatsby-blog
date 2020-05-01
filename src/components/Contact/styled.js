import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';

export const ContactWrapper = styled.section`
    width: 100%;
    max-width: 80vw;
    margin: 1rem auto;
    height: 600px;
    background: var(--mediumBackground);
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.lessThan("medium")`
        width: 100vw;
        margin: 0;
    `} 
    
`

export const FormWrapper = styled.div`
    width: 60%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 75px;

    form {
        position:relative;
        width: 100%;
    }

    form h2 {
        font-family: "Lato";
        color: var(--postColor);
        font-weight: 500;
        font-size: 2rem;
        letter-spacing: 2px;
        margin-bottom: 40px;
    }

    ${media.lessThan("medium")`
        width: 100vw;
        padding: 0 50px;

        form {
            max-width: 500px;
            padding: 0;
        }
    `}
`;

export const FormInput = styled.div`
    position: relative;
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0px;
    }

    input, textarea {
        position: relative;
        background: transparent;
        outline: none;
        border: none;
        width: 100%;
        color: var(--postColor);
        padding-bottom: 10px;
        font-family: 'Raleway';
        font-size: 1rem;
        letter-spacing: 1px;
        font-weight: 400;
        border-bottom: 2px solid rgba(249,186,6, 0.5);
        resize: none
    }

    textarea {
        height: 100px;
    }

    input[type="submit"] {
         background: var(--blue);
         padding: 8px;
         margin-top: -10px;
         width: 220px;
         cursor: pointer;
         color: var(--white);
         font-size: 1.2rem;
         border: none;
         border-radius: 8px;
         /* text-transform: uppercase; */
         letter-spacing: 1px;
    }

    input[type="submit"]:focus {
        background: var(--highlight);
        transform: scale(1.1);
    }

    input[type="submit"]:hover {
        background: var(--highlight);
    }

    span {
        position: absolute;
        left: 0;
        font-size: 1rem;
        font-weight: 300;
        display: inline-block;
        pointer-events: none;
        letter-spacing: 1px;
        color: var(--postcolor);
        transition: all 0.2s;
    }

    input:focus ~ span, textarea:focus ~ span,
    input:valid ~ span, textarea:valid ~ span {
        transform: translateY(-24px);
        color: var(--blue);
        font-size: 14px;
    }

    input:focus, textarea:focus,
    input:valid, textarea:valid {
        border-bottom-color: var(--gold);
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    h2 {
        padding: 2rem;
        font-family: "Lato";
        color: var(--postColor);
        font-weight: 500;
        font-size: 2rem;
        letter-spacing: 2px;
        /* margin-bottom: 40px; */
    }
    /* &::before { 
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--blue);
        transform-origin: bottom;
        transform: skewX(55deg) translateX(10%) translateY(10%) scale(1.55) ;
    } */

    ${media.lessThan("medium")`
        display: none;
    `}
`

export const ContactInfo = styled.div`
    position: relative;
    padding-left: 2rem;

    span {
        display: inline-block;
        font-size: 1rem;
        font-family: "Raleway";
        font-weight: '300';
        pointer-events: none;
        letter-spacing: 1px;
        color: var(--texts);
        padding-bottom: 10px;
    }

    div {
        font-weight: 500;
        font-size: 1.2rem;
        font-family: "Lato";
        letter-spacing: 1px;
        color: var(--postColor);
        padding-bottom: 1.5rem;
    }

`
