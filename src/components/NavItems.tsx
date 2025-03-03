import Link from "next/link";


interface Props {
    className?: string
}

export default function NavItems({ className }: Props) {
    const navLinks = [
        {
            name: 'About',
            href: '/#about'
        },
        {
            name: 'Experience',
            href: '/#experience'
        },
        {
            name: 'Education',
            href: '/#education'
        },
        {
            name: 'Projects',
            href: '/#projects'
        },
        {
            name: 'Contact',
            href: '/#contact'
        }
    ]
    return (
        <ul className={className}>
            {navLinks.map(({ name, href }) => {
                return (
                    <li key={name} className="hover:text-text-200 hover:text-3xl">

                        <Link
                            className="font-museoModerno"
                            href={href}
                        >
                            {name}
                        </Link>
                    </li>
                )
            })}
        </ul >
    )
}