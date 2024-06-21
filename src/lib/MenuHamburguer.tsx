import { ContainerMenuHamburguer, DivMenu, Line1, Line2, LinhasMenu, XIcon } from "@/_compoents/_styles/MenuHamburguer.styles,"

export const MenuHamburguer = () => {
    return (
        <DivMenu>
            <ContainerMenuHamburguer>
                <LinhasMenu />
                <LinhasMenu />
                <LinhasMenu />
            </ContainerMenuHamburguer>
        </DivMenu>
    )
}

export const MenuHamburguerClose = () => {
    return (
        <DivMenu>
            <ContainerMenuHamburguer>
                <XIcon>
                <Line1 />
                <Line2 />
                </XIcon>
            </ContainerMenuHamburguer>
        </DivMenu>
    )
}