import { ListaFooter } from "@/lib/ListaFooter"
import { FooterContainer, FooterDiv, FooterIcon, IconFooterImg, IconImgFooter, IconTituloFooter, IconsFooterContainer, TextoDiretosAutorais } from "./_styles/Footer.styles"
import { BGWhite, GlobalStyles } from "./_styles/Global.styles"

export const Footer = () => {
    return (
        <BGWhite>
            <GlobalStyles>
                <FooterContainer>
                    <FooterDiv>
                        <FooterIcon>
                            <IconImgFooter src="/img/icons/icone.png" alt="Icone do site" />
                            <IconTituloFooter>CarDrive</IconTituloFooter>
                        </FooterIcon>
                        <ListaFooter
                            texto={['Comprar carro', 'Vender carro', 'Carros em Destaque']}
                        />
                        <ListaFooter
                            texto={['Contato', 'Perguntas frequentes', 'Sobre nós']}
                        />
                    </FooterDiv>
                    <IconsFooterContainer>
                        <IconFooterImg src="/img/icons/Icon_Tiktok.png" alt="Icone do Tiktok" />
                        <IconFooterImg src="/img/icons/Icon_Facebook.png" alt="Icone do Facebook" />
                        <IconFooterImg src="/img/icons/Icon_Twitter.png" alt="Icone do Twitter" />
                        <IconFooterImg src="/img/icons/Icon_Instagram.png" alt="Icone do Instagram" />
                    </IconsFooterContainer>
                <TextoDiretosAutorais>Cospyright © 2024 AutoWeb. Todos os direitos reservados</TextoDiretosAutorais>
                </FooterContainer>
            </GlobalStyles>
        </BGWhite>
    )
}