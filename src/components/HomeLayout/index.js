import React from "react"
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from "prop-types"
import * as S from './styled';
import GlobalStyles from '../../styles/global';
import Header from "../Header";
import HomeFooter from "../HomeFooter";


const HomeLayout = ({ isHomepage, children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      {/* <TransitionPortal level="top"> */}
      {/* </TransitionPortal> */}
      <Header isHomepage={isHomepage}/>
      <S.LayoutMain>
        {children}
      </S.LayoutMain>
      <HomeFooter />
    </S.LayoutWrapper>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
