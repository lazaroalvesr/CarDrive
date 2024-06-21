import Link from "next/link"
import { LinkRedirecProps } from "./interface"

export const LinkRedirect = ({ href, children }: LinkRedirecProps) => {
    return (
        <Link href={href}
            style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: "center",
                gap: '10px',
            }}>
            {children}
        </Link>
    )
}