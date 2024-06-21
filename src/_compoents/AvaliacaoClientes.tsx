import { CardAvaliacaoClientes } from "@/lib/CardAvaliacaoClientes"
import { AvaliacaoClientesContainer, AvaliacaoClientesTitulo, GridCardClientes } from "./_styles/AvaliacaoClientes.styles"
import { GlobalStyles } from "./_styles/Global.styles"

export const AvaliacaoClientes = () => {
    return (
        <GlobalStyles>
            <AvaliacaoClientesContainer className="animeLeft">
                <AvaliacaoClientesTitulo>O que Dizem Nossos Clientes</AvaliacaoClientesTitulo>
                <GridCardClientes>
                    <CardAvaliacaoClientes
                        texto={`
                            "Tive uma ótima experiência no site. Foi fácil listar meu carro
                             para venda, e a comunicação com os compradores foi clara e direta. 
                             Consegui vender meu carro rapidamente e de forma segura."
                        `}
                        nome="Leonardo"
                        funcao="Vendedor"
                        src="/img/Leonardo.png"
                    />
                    <CardAvaliacaoClientes
                        texto={` 
                            "Fiquei impressionado com a facilidade de comparar diferentes modelos de 
                             carros no site. Encontrei exatamente o que estava procurando e o processo
                             de compra foi rápido e eficiente. Recomendo."
                             `}
                        nome="Edgar"
                        funcao="Cliente Satisfeito"
                        src="/img/Edgar.png"
                    />
                      <CardAvaliacaoClientes
                        texto={` 
                            "Encontrei no site uma grande variedade de opções de carros e uma plataforma
                             fácil de usar. A transação foi suave e segura, e estou muito satisfeita
                              com a minha compra."
                             `}
                        nome="Eldora"
                        funcao="Cliente Satisfeita"
                        src="/img/Eldora.png"
                    />
                </GridCardClientes>
            </AvaliacaoClientesContainer>
        </GlobalStyles>
    )
}