import React from 'react'
import { useStaticQuery, gatsby, Link } from 'gatsby';
import * as S from './styled';

const Logo = () => {
    const { logoImage } = useStaticQuery(
        graphql`
            query {
                logoImage: file(relativePath: { eq: "logo-clinica.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 390){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }`
    )
    
    return <Link to='/'><S.LogoWrapper fluid={logoImage.childImageSharp.fluid} /></Link>
}

export default Logo;