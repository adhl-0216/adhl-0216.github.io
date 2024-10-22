import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href?: string;
    type?: "submit" | "reset" | "button" | "link";
    className?: string;
}

export default function Button({ href = "#", children, type = "link", className = "" }: Props) {
    const commonClasses = "grow bg-primary-400 py-4 px-6 lg:px-8 rounded-lg font-museoModerno font-bold text-md lg:text-xl text-center " + className;

    if (type === "link") {
        return (
            <Link href={href} className={commonClasses}>
                {children}
            </Link>
        );
    } else {
        return (
            <button type={type} className={commonClasses}>
                {children}
            </button>
        );
    }
}
