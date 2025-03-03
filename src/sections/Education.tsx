'use client'
import Image from "next/image";
import MTU from "@/public/MTU.jpg"
import Link from "next/link";
import { useState } from "react";

export default function EducationContainer() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <section id="education" className="md:h-[50dvh] flex flex-col">
            <h2 className="text-4xl mb-4 font-semibold">My Education</h2>
            <div className="flex flex-col md:flex-row rounded-2xl bg-primary-500 p-6 gap-8">
                <div className="flex justify-center bg-white rounded-xl min-h-28 md:w-80" >
                    <Link
                        href="https://www.mtu.ie/"
                        title="MTU website"
                        className="flex items-center"
                        target="_blank"
                    >
                        <Image
                            src={MTU}
                            alt="MTU"
                            width={208}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <div className="md:w-3/4">
                    <div className="font-bold text-2xl">Munster Technological University</div>
                    <div className="text-md md:text-xl font-bold text-text-200 mb-4">
                        Bachelor of Science (Honours) in Computing with Software Development
                    </div>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="md:hidden text-sm underline mb-2">
                        {isCollapsed ? 'Show more' : 'Show less'}
                    </button>
                    <div className={`text-justify ${isCollapsed ? 'hidden md:block' : 'block'}`}>
                        My time at MTU was truly memorable, as I had the opportunity to meet great people, foster lasting friendships, and broaden my connections, both personally and professionally. The lectures were engaging and informative, while the co-curricular activities provided a fulfilling balance to my academic life. With access to excellent facilities and a supportive environment, I was able to thrive and ultimately achieve First Class Honours, something I owe to the overall enriching experience MTU provided.
                    </div>
                </div>
            </div>
        </section>
    )
}