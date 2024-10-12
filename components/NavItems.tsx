import Link from "next/link";


interface Props {
    className?: string
}

export default function NavItems({ className }: Props) {
    const navLinks = [
        {
            name: 'About',
            href: '#intro-container'
        },
        // {
        //     name: 'Experience',
        //     href: '#experience-container'
        // },
        // {
        //     name: 'Education',
        //     href: '#educaton-container'
        // },
        {
            name: 'Projects',
            href: '#project-container'
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
                    <li key={name}>

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