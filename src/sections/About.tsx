import Button from "@/src/components/Button";
import Image from "next/image";
import Illustration from "@/public/intro-illustration.svg"
import { IconButtons } from "@/src/components/IconButtons";

export default function AboutSection() {
    return (
        <section className="flex flex-col lg:flex-row-reverse gap-4 py-16 lg:pt-32 lg:mt-8 lg:items-center lg:h-screen" id="intro-container">
            <div className="min-w-80 min-h-80 flex items-end ">
                <Image src={Illustration} alt="illustration" className="object-contain" priority />
            </div>
            <div className="flex flex-col gap-8 lg:justify-between">
                <div className="max-w-5xl">
                    <p className="text-2xl lg:text-4xl">
                        Hey there 👋, my name is
                    </p>
                    <h1 className="font-bold text-3xl lg:text-5xl text-text-500">ADRIAN HAN-LIM OAH</h1>
                    <p className="text-xl lg:text-4xl text-justify text-wrap">
                        Ex-Cybersecurity Analyst and final year Software Development student with a focus on <strong>Cybersecurity</strong>, <strong>DevOps</strong>, and <strong>Web Development</strong>. Always happy to connect and collaborate!
                    </p>
                </div>
                <div className="flex flex-col justify-start lg:justify-center gap-4">
                    <IconButtons />
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <Button href="#contact-container">Contact Me</Button>
                        <Button href="https://1drv.ms/f/s!Al2sgXkqv7tqpBOT4k3o0uNZ0UfE?e=P9AiM7" >View CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}