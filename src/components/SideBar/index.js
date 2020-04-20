import React from 'react';
import Profile from '../Profile';
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";

import * as S from './styled';

const SideBar = () => 
    <S.SideBarWrapper>
        <Profile />
        <SocialLinks />
        <MenuLinks />
    </S.SideBarWrapper>

export default SideBar;