import Logo from "@/components/Logo"
import NavItems from "@/components/NavItems";
import { GitHubIcon, LinkedInIcon, GmailIcon } from "@/components/Icons"


export default function Footer() {
    return (
        <footer className="p-4 text-primary-700 fill-primary-700 ">
            <div className="grid grid-cols-2 grid-rows-2 px-8 lg:flex lg:justify-center lg:gap-80 items-center">
                <div className="row-span-1  lg:flex lg:justify-center lg:order-2 ">
                    <Logo />
                </div>
                <div className="col-start-1 row-span-1 flex flex-row gap-2 justify-start lg:justify-center lg:order-1 ">
                    <LinkedInIcon className="h-8 w-8 lg:h-12 lg:w-12" />
                    <GitHubIcon className="h-8 w-8 lg:h-12 lg:w-12" />
                    <GmailIcon className="h-8 w-8 lg:h-12 lg:w-12" />
                </div>

                <div className="col-start-3 row-start-1 row-span-2 flex flex-col justify-center items-center lg:order-3 lg:text-xl">
                    <NavItems />
                </div>
            </div>
            <hr className="my-4 border-primary-900 sm:mx-auto lg:my-8" />
            <div className="self-stretch text-base font-normal font-cairo">
                © {new Date().getFullYear()} Adrian H.L. Oah. All Rights Reserved.
            </div>

        </footer>
    );
};
