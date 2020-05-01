import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Contact from '../components/Contact';
import SEO from '../components/seo'; 

const ContactPage = (props) => {
    return (
        <HomeLayout isHomepage={false}>
            <SEO title="Contato" />
            <Contact />
        </HomeLayout>
    )
}

export default ContactPage;