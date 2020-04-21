import React, {useState, useEffect} from 'react';
import { Home } from "@styled-icons/boxicons-solid/Home";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-solid/SearchAlt2";
import { UpArrowAlt as Arrow } from "@styled-icons/boxicons-solid/UpArrowAlt";
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb";
import { Grid } from "@styled-icons/boxicons-solid/Grid";
import { ThList as List } from "@styled-icons/typicons/ThList";
import getThemeColor from "../../utils/getThemeColor";

import * as S from './styled';

const MenuBar = () => { 
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === 'dark';
    const isListMode = display === "list"

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)

        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return (
    <S.MenuBarWrapper>
        <S.MenuBarGroup>
            <S.MenuBarLink 
                to="/" 
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                title="Voltar para Home"
            >
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink 
                to="/search" 
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                title="Pesquisar"
            >
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>
        <S.MenuBarGroup>
            <S.MenuBarItem 
                title="Mudar o Tema" 
                className={theme}
                onClick={() => {
                    window.__setPreferredTheme(isDarkMode? 'light' : 'dark')
                }}
            > 
                <Light />
            </S.MenuBarItem>
            <S.MenuBarItem 
                className="display" 
                title="Mudar Visualização" 
                onClick={() => {
                    window.__setPreferredDisplay(isListMode ? "grid" : "list")
                }}
            >
                {isListMode ? <Grid /> : <List />}
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o Topo"> <Arrow /></S.MenuBarItem>
        </S.MenuBarGroup>
    </S.MenuBarWrapper>
    )
}

export default MenuBar;