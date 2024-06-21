import { VenderCarroItemContainer, VenderCarroSobre, VenderCarroTituloItem } from "@/_compoents/_styles/VenderCarroItem.styles"
import { VenderCarroItemProps } from "./interface"

export const VenderCarroItem = ({titulo, sobre}: VenderCarroItemProps) => {
    return (
        <VenderCarroItemContainer>
            <VenderCarroTituloItem>{titulo}</VenderCarroTituloItem>
            <VenderCarroSobre>{sobre}</VenderCarroSobre>
        </VenderCarroItemContainer>
    )
}