import { IconButtons } from "@/src/components/IconButtons";
import Logo from "@/src/components/Logo"
import NavItems from "@/src/components/NavItems";


export default function Footer() {
    return (
        <div className="flex flex-col align-end px-4 text-primary-700 fill-primary-700">
            <div className="grid grid-cols-2 grid-rows-2 px-8 md:grid-cols-3 md:grid-rows-1 items-center">
                <div className="row-span-1  md:flex md:justify-center md:col-start-2 ">
                    <Logo />
                </div>
                <div className="col-start-1 md:row-start-1 row-span-1 flex flex-row gap-2 justify-start md:justify-center md:col-start-1 ">
                    <IconButtons />
                </div>

                <div className="col-start-3 row-start-1 row-span-2 text-lg flex flex-col justify-center items-center md:col-start-3 md:row-span-1 ">
                    <NavItems />
                </div>
            </div>
            <hr className="w-full  border-primary-600 mx-auto md:my-8" />
            <div className="self-stretch text-base font-normal font-cairo">
                © {new Date().getFullYear()} Adrian H.L. Oah. All Rights Reserved.
            </div>

        </div>
    );
};
