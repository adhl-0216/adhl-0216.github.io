import Button from "@/components/Button";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/IconButtons";
import Image from "next/image";
import Illustration from "@/public/intro-illustration.svg"

export default function IntroContainer() {
    return (
        <div className="px-6 lg:px-16 grid grid-cols-2 grid-rows-2 h-dvh gap-4" id="intro-container">
            <div className="col-start-1 col-span-2 lg:col-span-1 row-span-1 flex flex-col justify-end">
                <p className="text-2xl lg:text-4xl">
                    Hello there, my name is
                </p>
                <h1 className="font-bold text-5xl lg:text-7xl text-text-400">ADRIAN OAH</h1>
                <p className="text-xl lg:text-3xl text-justify">
                    Soon-to-be Software Development graduate with a passion for Cybersecurity, Cloud Engineering, and DevOps. Excited and open to new opportunities!
                </p>
            </div>
            <div className="row-start-2 col-start-1 flex flex-col justify-start lg:justify-center">
                <div className="flex flex-wrap fill-primary-300 gap-4 py-4">
                    <LinkedInIcon className="h-10 w-10" />
                    <GitHubIcon className="h-10 w-10" />
                    <GmailIcon className="h-10 w-10" />
                </div>
                <div className="flex flex-col gap-2 lg:flex-row">
                    <Button href="#contact-container">Contact Me</Button>
                    <Button >Download CV</Button>
                </div>
            </div>
            <div className="flex row-start-2 lg:row-start-1 col-start-2 lg:row-span-2 items-start pt-4">
                <Image src={Illustration} alt="illustration" className="object-contain lg:w-full lg:h-full" />
            </div>
        </div>
    )
}