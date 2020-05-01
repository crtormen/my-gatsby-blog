import React from 'react';
import * as S from './styled';


const Burger = ({status, openMenu}) => (
    <S.StyledBurger status={status} onClick={() => openMenu(!status)}>
      <div />
      <div />
      <div />
    </S.StyledBurger>
)

export default Burger;