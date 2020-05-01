import React from 'react';
import links from './content';
import * as S from './styled';

const SectionLinks = () => (
    <S.SectionLinksWrapper>
        <S.SectionLinksList>
            { links.map((link, i) => (
                <S.SectionLinksItem key={i}>
                    <S.SectionLinksLink 
                        cover
                        direction="left"
                        bg='#fff'
                        duration={0.6}
                        to={link.url}
                        activeClassName="active"
                    >
                        {link.label}
                    </S.SectionLinksLink>
                </S.SectionLinksItem>
            ))}
        </S.SectionLinksList>
    </S.SectionLinksWrapper>
)

export default SectionLinks;