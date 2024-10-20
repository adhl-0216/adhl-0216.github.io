import Image from "next/image";
import MTU from "@/public/MTU-lg.jpg"

export default function EducationContainer() {
    return (
        <section id="education-container" className="min-h-[50dvh] flex flex-col pt-32 mb-4">
            <h2 className="text-4xl mb-4 font-semibold">My Education</h2>
            <div className="flex flex-col lg:flex-row rounded-2xl bg-primary-500 p-5 gap-4">
                <div className="flex justify-center bg-white rounded-lg lg:w-1/4">
                    <Image
                        src={MTU}
                        alt="MTU"
                        width={256}
                        height={256}
                    />
                </div>
                <div className="lg:w-3/4">
                    <div className="font-bold text-lg">MUNSTER TECHNOLOGICAL UNIVERSITY 	</div>
                    <div className="text-md font-bold text-text-200">
                        Bachelor of Science (Honours) in Computing with Software Development
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam in nulla nesciunt minima ab magni dolorem necessitatibus. Officiis quisquam omnis ut quas obcaecati harum voluptas esse eaque, veritatis porro.
                    </div>
                </div>
            </div>
        </section>
    )
}