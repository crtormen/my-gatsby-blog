import React from 'react';
import {useStaticQuery} from 'gatsby';
import * as S from './styled';

const HomeServiceBlocks = () => {
    const { gestante, casal, mae } = useStaticQuery(
        graphql`
            query {
                gestante: file(relativePath: { eq: "gestante.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                casal: file(relativePath: { eq: "casal-negro.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
                mae: file(relativePath: { eq: "mulher-pos-parto.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `)


    return (
        <S.HomeServiceBlocksWrapper>
            <S.Headline>
                Nutrição e Gravidez
                <S.Divider />
                <S.Paragraph>A Nutrição está diretamente envolvida em todo o processo desse momento tão incrível que é a <S.Span>Gravidez</S.Span>. <br/>
                    Desde a fertilidade do casal até o processo de amamentação e recuperação do corpo após a gestação, <br/>
                    a <S.Span color="true">NUTRIÇÃO</S.Span> é uma <S.Span color="true">GRANDE ALIADA</S.Span> na busca pela saúde da mãe e do bebê. <br/>
                Quer entender melhor como funciona meu trabalho? </S.Paragraph>
            </S.Headline>
            <S.ServiceBlockWrapper to='/fertilidade'> 
                <S.ServiceBlockBox className="fertilidade">
                    <S.ServiceBlockImage fluid={casal.childImageSharp.fluid}  />
                    <S.ServiceBlockText>Fertilidade</S.ServiceBlockText>
                </S.ServiceBlockBox>                       
            </S.ServiceBlockWrapper>
            <S.ServiceBlockWrapper to='/gestacao'> 
                <S.ServiceBlockBox className="gestacao">
                    <S.ServiceBlockImage fluid={gestante.childImageSharp.fluid}  />
                    <S.ServiceBlockText>Gestação</S.ServiceBlockText>
                </S.ServiceBlockBox>                       
            </S.ServiceBlockWrapper>
            <S.ServiceBlockWrapper to='/pos-parto'> 
                <S.ServiceBlockBox className="pos-parto">
                    <S.ServiceBlockImage fluid={mae.childImageSharp.fluid}  />
                    <S.ServiceBlockText >Pós Parto</S.ServiceBlockText>
                </S.ServiceBlockBox>                       
            </S.ServiceBlockWrapper>
        </S.HomeServiceBlocksWrapper>
    )
}

export default HomeServiceBlocks;