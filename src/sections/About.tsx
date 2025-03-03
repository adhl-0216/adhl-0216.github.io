import Button from "@/src/components/Button";
import Image from "next/image";
import Illustration from "@/public/intro-illustration.svg"
import { IconButtons } from "@/src/components/IconButtons";

export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col gap-4 md:flex-row-reverse md:h-[100dvh] md:items-center md:justify-between " >
            <div className="flex items-end ">
                <Image src={Illustration} alt="illustration" className="object-contain" priority />
            </div>
            <div className="flex flex-col gap-8 md:justify-between">
                <div className="max-w-5xl">
                    <p className="text-lg md:text-4xl">
                        Hey there 👋, my name is
                    </p>
                    <h1 className="font-bold text-2xl md:text-5xl text-text-500 md:mb-4">ADRIAN HAN-LIM OAH</h1>
                    <ul className="text-lg md:text-3xl list-disc pl-6 space-y-2 mb-4">
                        <li>Final Year Software Development Student</li>
                        <li>Ex-Cybersecurity Analyst</li>
                    </ul>
                    <ul className="md:flex md:mb-12 md:gap-2">
                        <li className="text-lg font-bold inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-500 m-2 md:m-0">Cybersecurity</li>
                        <li className="text-lg font-bold inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-500 m-2 md:m-0">DevOps</li>
                        <li className="text-lg font-bold inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-500 m-2 md:m-0">Web Development</li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start md:justify-center gap-4">
                    <IconButtons />
                    <div className="flex flex-col gap-4 md:flex-row">
                        <Button href="https://1drv.ms/f/s!Al2sgXkqv7tqpBOT4k3o0uNZ0UfE?e=P9AiM7" >View CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}