import { LinkRedirect } from "@/lib/LinkRedirect"
import { BannerButton, BannerImg, BannerText, ContainerImg, ContainerText } from "./_styles/Banner.styles"

export const Banner = () => {
    return (
        <ContainerImg>
            <BannerImg src="/img/Carro.jpg" alt="Carro" />
            <ContainerText>
                <BannerText>
                    Aqui você compra e vende seu veiculo com facilidade
                    e segurança
                </BannerText>
                <LinkRedirect href="/">
                    <BannerButton>Ver Carros</BannerButton>
                </LinkRedirect>
            </ContainerText>
        </ContainerImg>
    )
}