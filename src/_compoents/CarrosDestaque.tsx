import { CardCarros } from "@/lib/CardCarros"
import { CarrosDestaqueButton, CarrosDestaqueTitulo, ContainerCarrosDestaque } from "./_styles/CarrosDestaque.styles"
import { GlobalStyles } from "./_styles/Global.styles"
import { LinkRedirect } from "@/lib/LinkRedirect"

export const CarrosDestaque = () => {
    return (
        <GlobalStyles>
            <ContainerCarrosDestaque className="animeLeft">
                <CarrosDestaqueTitulo>Carros em Destaque</CarrosDestaqueTitulo>
                <CardCarros />
                <LinkRedirect href="/">
                <CarrosDestaqueButton>Ver Mais</CarrosDestaqueButton>
                </LinkRedirect>
            </ContainerCarrosDestaque>
        </GlobalStyles>
    )
}