import Link from "next/link";


interface Props {
    className?: string
}

export default function NavItems({ className }: Props) {
    const navLinks = [
        {
            name: 'About',
            href: '#header'
        },
        {
            name: 'Experience',
            href: '#experience-container'
        },
        {
            name: 'Education',
            href: '#education-container'
        },
        {
            name: 'Projects',
            href: '#projects-container'
        },
        {
            name: 'Contact',
            href: '#contact-container'
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