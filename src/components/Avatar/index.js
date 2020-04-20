import React from 'react'
import { useStaticQuery, gatsby } from 'gatsby';
import * as S from './styled';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "IMG_9563-2.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 60){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }`
    )
    
    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar;