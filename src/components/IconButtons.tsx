import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const icons = [
    { ariaLabel: "GitHub profile link", icon: faGithub, url: "https://github.com/adhl-0216", title: "GitHub" },
    { ariaLabel: "LinkedIn profile link", icon: faLinkedin, url: "https://www.linkedin.com/in/adrian-han-lim-oah-087a18257/", title: "LinkedIn" },
    { ariaLabel: "Email via Gmail", icon: faEnvelope, url: "mailto:hanlim2002@gmail.com", title: "Email" }
];

export function IconButtons() {
    return (
        <div className="flex flex-wrap fill-primary-300 gap-1 md:gap-2">
            {icons.map(({ ariaLabel, icon, url, title }, index) => (
                <Link href={url} aria-label={ariaLabel} key={index} title={title} target="_blank">
                    <FontAwesomeIcon icon={icon} size="2x" />
                </Link>
            ))}
        </div>
    );
}
