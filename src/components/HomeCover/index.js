import React from 'react';
import { useStaticQuery, gatsby } from 'gatsby';
import Img from 'gatsby-image';

const HomeCover = () => {
    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
            query {
                mobileImage: file(relativePath: { eq: "capa2.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1168, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                desktopImage: file(relativePath: { eq: "capa-grande.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 3180, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }                
            }
        `
    )   
    return (        
        <Img 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh'
            }} 
            fluid={[
                mobileImage.childImageSharp.fluid, 
                {
                    ...desktopImage.childImageSharp.fluid,
                    media: `(min-width: 1168px)`
                }
            ]} 
        />
    )
}

export default HomeCover;