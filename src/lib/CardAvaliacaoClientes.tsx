import { AvaliacaoEstrela, AvaliacaoTexto, CardClientes, CardClientesContainer, ClienteFoto, DivCardImgCliente, NomeDoCliente, SubtituloCard } from "@/_compoents/_styles/CardAvaliacaoClientes.styles"
import { CardAvaliacaoClientesProps } from "./interface"

export const CardAvaliacaoClientes = ({texto, nome, funcao, src}: CardAvaliacaoClientesProps) => {
    return (
        <CardClientes>
            <CardClientesContainer>
                <AvaliacaoEstrela src="/img/icons/estrela.png" alt="Icone Estrela" />
                <AvaliacaoTexto>{texto}</AvaliacaoTexto>
                <NomeDoCliente>{nome}</NomeDoCliente>
                <SubtituloCard>{funcao}</SubtituloCard>
                <DivCardImgCliente>
                    <ClienteFoto src={src}/>
                </DivCardImgCliente>
            </CardClientesContainer>
        </CardClientes>
    )
}