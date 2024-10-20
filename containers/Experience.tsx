export default function ExperienceContainer() {
    return (
        <section id="experience-container" className="min-h-[50dvh] pt-32 mb-4">
            <h2 className="text-4xl mb-4 font-semibold">My Experience</h2>
            <div className="flex flex-col bg-primary-700 p-5 rounded-2xl">
                <div className="flex flex-col text-md justify-between">
                    <span className="text-nowrap">Jan 2024 - Aug 2024</span>
                    <span className="text-wrap">JRI-America, a subsidiary of Sumitomo Mitsui Banking Corporation (SMBC)</span>
                </div>
                <p className="font-semibold mt-2">SOC Automation & Cyber Monitoring Response Intern</p>
                <div className="tags"></div>
                <ul>
                    <li>
                        • Triaged and resolved <span className="animated-gradient">200+</span> security alerts for Cyber Monitoring Response Team
                    </li>
                    <li>
                        • Implemented <span className="animated-gradient">20+</span> Jira Story issues and resolved <span className="animated-gradient">15+</span> Bug issues for Automation Team
                    </li>
                    <li>
                        • Participated and won <span className="animated-gradient">2</span> times in ImmersiveLabs Blue Team Simulation Exercises
                    </li>
                    <li>
                        • Participated in a <span className="animated-gradient">5-day</span> SOCCON convention
                    </li>
                </ul>
            </div>
        </section>
    );
}
