import React from "react";

import {
    ContactContainer,
    Title,
    ContactInfo,
    Paginao,
    Data,
    Infos,
    Form,
    Subtitle,
} from "./Styles";

import instaLogo from '../../assets/instaLogo.png';
import mapPin from '../../assets/mapPin.png';
import mailIcon from '../../assets/mailIcon.png';
import phoneIcon from '../../assets/phoneIcon.png';

import Button from '../../styles/Button';

function ContactUs() {
    return (
        <Paginao>

            <Title> Entre em contato conosco </Title>

            <ContactContainer>
                <Data>
                    <form action="https://formsubmit.co/brunolages@cpejr.com.br" method="POST">
                        <Subtitle> Como a CPE pode te ajudar? Estamos prontos para te atender! </Subtitle>
                        <Form>
                            <label> Nome </label>
                            <input type="text" name="name"></input>
                        </Form>
                        <Form>
                            <label>E-mail </label>
                            <input type="email" name="email"></input>
                        </Form>
                        <Form>
                            <label>Como podemos te ajudar? </label>
                            <textarea rows="4" type="text" name="message"></textarea>
                        </Form>
                        <Button
                            type="submit"
                            width="97%"
                            height="58px"
                            backgroundColor="gold"
                            fontWeight="bold"
                            border="none"
                        >
                            ENVIAR
                        </Button>
                        <input type="hidden" name="_subject" value="Contato - Violão Mágico Web"></input>
                        <input type="hidden" name="_autoresponse" value="A CPEjr agradeçe o seu feedback! Retornaremos o mais breve possível!"></input>
                        <input type="hidden" name="_template" value="table"></input>
                    </form>
                </Data>

                <Infos>
                    <ContactInfo>
                        <p>Aproveite o espaço ao lado para tirar todas as suas dúvidas e descobrir como podemos
                            te ajudar a organizar e otimizar processos na agência.
                            Para isso, basta preencher o formulário que nós entraremos em contato com você.</p>
                    </ContactInfo>
                    <ContactInfo>
                        <img src={mapPin} alt="mapPin"></img>
                        <div>Av. Presidente Antônio Carlos, 6627,  CPDEE, sala 112, UFMG Campus Pampulha,
                            Belo Horizonte – MG</div>
                    </ContactInfo>
                    <ContactInfo>
                        <img src={phoneIcon} alt="phoneIcon"></img>
                        <div>(31) 9198-4505, Segunda à Sexta de 08h às 18h!</div>
                    </ContactInfo>
                    <ContactInfo>
                        <img src={mailIcon} alt="mailIcon"></img>
                        <div>Envie um e-mail para vicepresidencia@cpejr.com.br que nós responderemos o mais rápido possível!</div>
                    </ContactInfo>
                    <ContactInfo>
                        <img src={instaLogo} alt="instaLogo"></img>
                        <div>Se preferir, pode nos contactar pelo nosso instagram! @cpe.jr</div>
                    </ContactInfo>

                </Infos>

            </ContactContainer>

        </Paginao >

    )
}

export default ContactUs;