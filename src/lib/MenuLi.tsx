import { HeaderLi } from "@/_compoents/_styles/Header.styles"
import Link from "next/link"
import { MenuLiProps } from "./interface"

export const MenuLi = ({ href, texto }: MenuLiProps) => {
    return (
        <Link href={href} style={{textDecoration: 'none', color: 'black'}}>
            <HeaderLi>{texto}</HeaderLi>
        </Link>
    )
}