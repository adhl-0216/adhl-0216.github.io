import Image from "next/image";
import MTU from "@/public/MTU.jpg"
import Link from "next/link";

export default function EducationContainer() {
    return (
        <section id="education-container" className="min-h-[50dvh] flex flex-col pt-32 mb-4">
            <h2 className="text-4xl mb-4 font-semibold">My Education</h2>
            <div className="flex flex-col lg:flex-row rounded-2xl bg-primary-500 p-5 gap-4">
                <div className="flex justify-center bg-white rounded-xl min-h-28 lg:w-80">
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
                <div className="lg:w-3/4">
                    <div className="font-bold text-2xl">Munster Technological University</div>
                    <div className="text-xl font-bold text-text-200 mb-4">
                        Bachelor of Science (Honours) in Computing with Software Development
                    </div>
                    <div>
                        My time at MTU was truly memorable, as I had the opportunity to meet great people, foster lasting friendships, and broaden my connections, both personally and professionally. The lectures were engaging and informative, while the co-curricular activities provided a fulfilling balance to my academic life. With access to excellent facilities and a supportive environment, I was able to thrive and ultimately achieve First Class Honours, something I owe to the overall enriching experience MTU provided.
                    </div>
                </div>
            </div>
        </section>
    )
}