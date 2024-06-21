import { ReactNode } from "react";

export interface MenuLiProps {
    texto: string;
    href: string
}

export interface LinkRedirecProps {
    href: string
    children: ReactNode
}

export interface HeaderMobile {
     ativo: boolean
}

export interface VenderCarroItemProps{
    titulo: string
    sobre: string
}

export interface CardAvaliacaoClientesProps{
    texto: string;
    nome: string;
    funcao: string;
    src: string;
}

export interface ListaFooterProps{
    texto: string[]
}