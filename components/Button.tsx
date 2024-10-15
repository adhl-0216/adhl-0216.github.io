import Link from "next/link"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
    href?: string
    type?: "submit" | "reset" | "button" | undefined
    className?: string
}

export default function Button({ href = "#", children, type = "button" }: Props) {
    return (
        <Link href={href} type={type} className="grow bg-primary-400 py-4 px-6 lg:px-8 rounded-lg font-museoModerno font-bold text-md lg:text-xl text-center">
            {children}
        </Link>
    )
}