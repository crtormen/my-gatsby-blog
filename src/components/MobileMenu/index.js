import React from 'react';
import links from './content';
import * as S from './styled';

const MobileMenu = ({ visible }) => (
    <S.MobileMenuWrapper visible={visible}>
        <S.MobileMenuList visible={visible}>
            { links.map((link, i) => (
                <S.MobileMenuItem key={i}>
                    <S.MobileMenuLink
                    to={link.url}
                    activeClassName="active"
                    >
                        {link.label}
                    </S.MobileMenuLink>
                </S.MobileMenuItem>
            ))}
        </S.MobileMenuList>
    </S.MobileMenuWrapper>
)

export default MobileMenu;