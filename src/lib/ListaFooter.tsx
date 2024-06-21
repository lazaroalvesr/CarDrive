import { ListaFooterContainer, ListaFooterTexto } from "@/_compoents/_styles/ListaFooter.styles"
import { ListaFooterProps } from "./interface"

export const ListaFooter = ({ texto }: ListaFooterProps) => {
    return (
        <ListaFooterContainer>
            {texto.map((item, index) => (
                <ListaFooterTexto key={index}>{item}</ListaFooterTexto>
            ))}
        </ListaFooterContainer>
    )
}