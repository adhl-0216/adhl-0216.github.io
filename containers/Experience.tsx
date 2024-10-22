import jriLogo from "@/public/jri-america.jpg"
import Image from "next/image";

export default function ExperienceContainer() {
    return (
        <section id="experience-container" className="min-h-[50dvh] pt-32 mb-4">
            <h2 className="text-4xl mb-4 font-semibold">My Experience</h2>
            <div className="flex flex-col bg-primary-700 p-5 rounded-2xl">
                <span className="text-nowrap font-bold text-xl mb-2 rounded-full bg-primary-400 px-3">Jan 2024 - Aug 2024</span>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex justify-center bg-white rounded-xl min-h-28 lg:w-80">
                        <Image src={jriLogo} alt="JRI-America" width={256} className="object-contain" ></Image>
                    </div>
                    <div>
                        <span className="font-bold text-2xl text-wrap">JRI-America, a subsidiary of Sumitomo Mitsui Banking Corporation (SMBC)</span>
                        <p className="text-xl font-bold text-text-200 mb-2">SOC Automation & Cyber Monitoring Response Intern</p>
                        <div className="tags"></div>
                        <ul className="italic">
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
            </div>
        </section>
    );
}
