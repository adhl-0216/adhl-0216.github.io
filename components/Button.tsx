import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    href?: string;
    type?: "submit" | "reset" | "button" | "link";
    className?: string;
    disabled?: boolean;
}

export default function Button({ href = "#", children, type = "link", className = "", disabled = false }: Props) {
    const baseClasses = "py-4 px-6 lg:px-8 rounded-lg font-museoModerno font-bold text-md lg:text-xl text-center transition-colors duration-300";
    const enabledClasses = "bg-primary-400 hover:bg-primary-500 text-white";
    const disabledClasses = "bg-gray-400 text-gray-200 cursor-not-allowed";
    const commonClasses = `${baseClasses} ${disabled ? disabledClasses : enabledClasses} ${className}`;

    if (type === "link") {
        return (
            <Link href={href} className={commonClasses}>
                {children}
            </Link>
        );
    } else {
        return (
            <button type={type} className={commonClasses} disabled={disabled}>
                {children}
            </button>
        );
    }
}
