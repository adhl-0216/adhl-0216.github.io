import { IconButtons } from "@/components/IconButtons";
import Logo from "@/components/Logo"
import NavItems from "@/components/NavItems";


export default function Footer() {
    return (
        <footer className="px-4 text-primary-700 fill-primary-700 ">
            <div className="grid grid-cols-2 grid-rows-2 px-8 lg:grid-cols-3 lg:grid-rows-1 items-center">
                <div className="row-span-1  lg:flex lg:justify-center lg:col-start-2 ">
                    <Logo />
                </div>
                <div className="col-start-1 lg:row-start-1 row-span-1 flex flex-row gap-2 justify-start lg:justify-center lg:col-start-1 ">
                    <IconButtons />
                </div>

                <div className="col-start-3 row-start-1 row-span-2 text-lg flex flex-col justify-center items-center lg:col-start-3 lg:row-span-1 ">
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
