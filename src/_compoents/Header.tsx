'use client'

import { MenuLi } from "@/lib/MenuLi"
import { ButtonMobile, ButtonTextLogin, DivLogin, Header, HeaderContainer, HeaderIcon, HeaderNav, HeaderUl, IconImg, IconTitulo, ImgChat, ImgUser } from "./_styles/Header.styles"
import { LinkRedirect } from "@/lib/LinkRedirect"
import { useState } from "react"
import { MenuHamburguer, MenuHamburguerClose } from "@/lib/MenuHamburguer"
import { GlobalStyles } from "./_styles/Global.styles"

export const HeaderPage = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo(!ativo)
    }

    return (
        <HeaderContainer>
            <GlobalStyles>
                <Header>
                    <HeaderIcon>
                        <IconImg src="/img/icons/icone.png" alt="Icone do site" />
                        <IconTitulo>CarDrive</IconTitulo>
                    </HeaderIcon>
                    <HeaderNav>
                        <HeaderUl className="animeLeftMobile" ativo={ativo}>
                            <MenuLi href="/" texto="Comprar" />
                            <MenuLi href="/" texto="Vender" />
                            <MenuLi href="/" texto="Sobre Nós" />
                        </HeaderUl>
                    </HeaderNav>
                    <DivLogin>
                        <LinkRedirect href="/">
                            <ImgUser src="/img/icons/User.png" alt="foto usuário" />
                            <ButtonTextLogin>Entrar</ButtonTextLogin>
                        </LinkRedirect>
                        <LinkRedirect href="/">
                            <ImgChat src="/img/icons/chat.png" alt="Icone chat" />
                        </LinkRedirect>
                    </DivLogin>
                    <ButtonMobile onClick={toggle}>
                        {ativo ? <MenuHamburguerClose /> : <MenuHamburguer />}
                    </ButtonMobile>
                </Header>
            </GlobalStyles>
        </HeaderContainer>
    )
}