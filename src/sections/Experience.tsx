'use client'
import jriLogo from "@/public/jri-america.jpg"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ExperienceSection() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="experience-container" className="min-h-[50dvh] my-12 lg:px-40">
            <h2 className="text-4xl mb-4 font-semibold">My Experience</h2>
            <div className="flex flex-col bg-primary-700 p-5 rounded-2xl lg:flex-row gap-2 lg:gap-8">
                <div className="flex justify-center bg-white rounded-xl min-h-28 lg:w-80">
                    <Link
                        href="https://www.linkedin.com/company/jri/posts/?feedView=all"
                        title="JRI-America LinkedIn"
                        className="flex items-center"
                        target="_blank">

                        <Image
                            src={jriLogo}
                            alt="JRI-America"
                            width={208}
                            className="object-contain" ></Image>
                    </Link>
                </div>
                <div className="flex flex-col flex-grow">
                    <div className="flex flex-col-reverse lg:flex-row justify-between">
                        <div>
                            <span className="font-bold text-lg lg:text-xl">JRI-America, a subsidiary of <span className="text-primary-400 italic">Sumitomo Mitsui Banking Corporation (SMBC)</span></span>
                            <p className="text-md lg:text-xl font-bold text-text-200 mb-4 font-">SOC Automation & Cyber Monitoring Response Intern</p>
                        </div>
                        <span className="text-nowrap font-bold text-xl mb-4 underline">Jan 2024 - Aug 2024</span>
                    </div>
                    <div className="tags"></div>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="lg:hidden text-sm underline mb-2 text-start">
                        {isCollapsed ? 'Show more' : 'Show less'}
                    </button>
                    <ul className={`italic text-xs lg:text-base ${isCollapsed ? 'hidden lg:block' : 'block'}`}>
                        <li>
                            ✔️ Triaged and resolved <span className="animated-gradient">200+</span> security alerts for Cyber Monitoring Response Team
                        </li>
                        <li>
                            ✔️ Implemented <span className="animated-gradient">20+</span> Jira Story issues and resolved <span className="animated-gradient">15+</span> Bug issues for Automation Team
                        </li>
                        <li>
                            ✔️ Participated and won <span className="animated-gradient">2</span> times in ImmersiveLabs Blue Team Simulation Exercises
                        </li>
                        <li>
                            ✔️ Participated in a <span className="animated-gradient">5-day</span> SOCCON convention
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
