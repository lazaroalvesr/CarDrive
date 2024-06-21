import { VenderCarroItem } from "@/lib/VenderCarroItem"
import { BGWhite, GlobalStyles } from "./_styles/Global.styles"
import { VendeDiv, VenderButton, VenderCarroContainer, VenderCarroContainerText, VenderCarroTitulo, VenderDivImg, VenderImg } from "./_styles/VenderCarro.styles"
import { LinkRedirect } from "@/lib/LinkRedirect"

export const VenderCarro = () => {
    return (
        <BGWhite>
            <GlobalStyles>
                <VenderCarroContainer>
                    <VenderDivImg>
                        <VenderImg src="/img/VenderCarro.png" />
                    </VenderDivImg>
                    <VenderCarroContainerText>
                        <VenderCarroTitulo>Venda seu carro</VenderCarroTitulo>
                        <VendeDiv>
                            <VenderCarroItem
                                titulo="Prepare seu Carro"
                                sobre="Lave e limpe o carro, verifique a manutenção, tire boas fotos e reúna todos os documentos necessários. Isso ajuda a atrair compradores e facilita a venda."
                            />
                            <VenderCarroItem
                                titulo="Estabeleça um Preço Justo"
                                sobre="Pesquise o mercado para definir um preço justo com base no modelo, ano, quilometragem e condição do carro."
                            />
                            <VenderCarroItem
                                titulo="Transparência e Honestidade"
                                sobre="Seja transparente ao descrever o carro, fornecendo informações precisas sobre histórico de manutenção, acidentes anteriores (se houver), condição atual e quaisquer defeitos conhecidos."
                            />
                            <VenderCarroItem
                                titulo="Documentação Completa"
                                sobre="Prepare toda a documentação necessária para a venda, incluindo registro do veículo, comprovantes de impostos e taxas pagas, histórico de manutenção e outros documentos relevantes."
                            />
                        </VendeDiv>
                        <LinkRedirect href="/">
                        <VenderButton>Vender</VenderButton>
                        </LinkRedirect>
                    </VenderCarroContainerText>
                </VenderCarroContainer>
            </GlobalStyles>
        </BGWhite>
    )
}