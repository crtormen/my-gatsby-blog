import React, { useState } from 'react';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import * as S from './styled';
import SocialLinks from '../SocialLinks';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const { char_recorte } = useStaticQuery(graphql`
        query {
            char_recorte : file(relativePath: {eq: "char-recorte-8bits.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1100, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <S.ContactWrapper>
            <S.FormWrapper>
                <form name="nutri-mamae-contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                    <h2>Entre em Contato</h2>
                    <S.FormInput>
                        <input
                            type="text"                
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required="required"
                        />
                        <span>Seu Nome</span>
                    </S.FormInput>
                    <S.FormInput>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required="required"
                        />
                        <span>Seu Celular</span>
                    </S.FormInput>
                    <S.FormInput>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required="required"
                        />
                        <span>Seu Melhor Email</span>
                    </S.FormInput>
                    <S.FormInput>
                    <textarea
                        placeholder="Escreva suas dúvidas, agende sua consulta..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required="required"
                    />
                    </S.FormInput>
                    <S.FormInput>
                        <input type="submit" value="Enviar Mensagem" />
                    </S.FormInput>
                </form>
            </S.FormWrapper>
            <S.ImageWrapper>
                <h2>Ou me encontre pelos canais abaixo...</h2>
                {/* <Img 
                    style={{
                        position: 'absolute',
                        overflow: 'hidden',
                        top: 30,
                        left: 45,
                        height: '55%',
                        width: '85%'
                    }}
                    fluid={char_recorte.childImageSharp.fluid} /> */}
                <svg 
                    css={`
                        position:absolute;
                        bottom:0;
                    `}
                    xmlns="http://www.w3.org/2000/svg" viewBox="120 0 240 320">
                    <path fill="#69c8c9" fillOpacity="0.6" d="M0,64L26.7,64C53.3,64,107,64,160,90.7C213.3,117,267,171,320,170.7C373.3,171,
                    427,117,480,122.7C533.3,128,587,192,640,213.3C693.3,235,747,213,800,197.3C853.3,181,907,171,960,144C1013.3,117,1067,75,
                    1120,53.3C1173.3,32,1227,32,1280,42.7C1333.3,53,1387,75,1413,85.3L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,
                    320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,
                    320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                  </svg>
                <S.ContactInfo>
                    <span>WhatsApp</span>
                    <div>(51) 99175-0942</div>
                    <span>Telefone</span>
                    <div>(51) 3222-5709</div>
                    <span>E-mail</span>
                    <div>sos@clinicacharlinetormen.com.br</div>
                    <span>Onde atendo:</span>
                    <div>Rua Felipe Neri, 296 - sala 102<br />Bairro Auxiliadora - Porto Alegre/RS</div>
                </S.ContactInfo>
                <SocialLinks />
            </S.ImageWrapper>
        </S.ContactWrapper>
    )  
}

export default Contact;