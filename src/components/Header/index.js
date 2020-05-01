import React, {useState} from 'react';
import MenuLinks from "../MenuLinks";
import SectionLinks from '../SectionLinks';
import Burger from '../Burger';
import MobileMenu from '../MobileMenu';
import HomeCover from '../HomeCover';

import * as S from './styled';
import Logo from '../Logo';


const Header = ({ isHomepage }) => {
    // const isHomepage = location.pathname === withPrefix("/");
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <S.HeaderWrapper>
            <S.HeaderMenuWrapper>
                <SectionLinks />
                <Logo />
                <Burger status={openMobileMenu} openMenu={setOpenMobileMenu}/>
                <MobileMenu visible={openMobileMenu} />
                <MenuLinks />
            </S.HeaderMenuWrapper>
            { isHomepage && 
                <>
                <HomeCover />
                <S.HeadlineWrapper>
                    <S.Headline>
                        Nutrição Para A Gravidez
                    </S.Headline>
                    <S.SubHeadline>
                        Tentantes, Gestantes e Mamães
                    </S.SubHeadline>
                    <S.ButtonsWrapper>
                        <S.Button type="primary">Agendar Consulta</S.Button>
                        <S.Button type="secondary">Conheça Meu Trabalho</S.Button>
                    </S.ButtonsWrapper>
                </S.HeadlineWrapper>
                </>
            }
            {/* <svg 
                css={`
                    position:absolute;
                    bottom:0;
                    left: 0;
                `}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,32L60,58.7C120,85,240,139,360,133.3C480,128,600,64,720,85.3C840,107,960,213,1080,240C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg> */}
        </S.HeaderWrapper>
    );
} 

export default Header;