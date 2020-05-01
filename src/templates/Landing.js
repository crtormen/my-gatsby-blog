import React from 'react'

import HomeServiceBlocks from '../components/HomeServiceBlocks';
import HomeLayout from '../components/HomeLayout';
import SEO from '../components/seo'; 

const Landing = ({ data, pageContext }) => {
    return (
        <HomeLayout isHomepage={true}>
            <SEO title="Home" />
            <HomeServiceBlocks />
            quem sou eu
            pacientes e testemunhos
            ultimos posts
            contato
        </HomeLayout>
    );
}
export default Landing;