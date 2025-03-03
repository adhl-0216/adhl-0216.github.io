'use client'
import Link from 'next/link'
import { ProjectCard as ProjectCardType } from '@/src/types/types'
import Image from 'next/image'
import { useState } from 'react'

const FallbackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="fill-primary-900 w-8 h-8" viewBox="0 0 24 24">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" />
        <path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" />
        <path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" />
        <path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" />
    </svg>
);

const sliceBeforeEmoji = (str: string) => {
    const emojiPattern = /[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]/u;
    const emojiIndex = str.search(emojiPattern);
    return emojiIndex > -1 ? str.slice(0, emojiIndex) : str;
};

export default function ProjectCard({ title, subtitle, description, tech }: ProjectCardType) {
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
    const routeTitle = sliceBeforeEmoji(title).trim().replaceAll(' ', '-').toLowerCase();

    const shouldShowImage = (src: string, index: number) => {
        return src && src.length > 0 && !failedImages.has(index);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-primary-900 p-4 md:p-8 rounded-lg w-full md:w-[48rem] h-auto md:h-[27rem] min-h-[280px] transition-all duration-300 group hover:scale-105"
            data-active="false"
        >
            <div className="flex flex-col">
                <Link href={`/project/${routeTitle}`} className='text-xl md:text-2xl font-bold mb-1 text-primary-100' target='_blank'>{title}</Link>
                <span className='text-sm md:text-base text-text-50 font-semibold italic mb-2'>{subtitle}</span>
                <Image
                    src="https://placehold.co/1600x900/2f3437/ffffff?text=Project+Preview"
                    width={1600}
                    height={900}
                    alt='project preview'
                    className='rounded-lg object-cover md:hidden'
                />
                <ul className='flex gap-2 flex-wrap mt-2 md:mt-4 justify-start'>
                    {tech.map(({ title, image }, index) => (
                        <li key={index}>
                            <Link href={title.url} className='flex flex-col items-center w-12 md:w-14' target='_blank'>
                                <div className='flex bg-primary-100 rounded-full p-1.5 justify-center items-center w-8 h-8 md:w-10 md:h-10'>
                                    {shouldShowImage(image.src, index) ? (
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            title={image.alt}
                                            className="inline-block align-middle h-8 w-8"
                                            width={32}
                                            height={32}
                                            onError={() => setFailedImages(prev => new Set([...prev, index]))}
                                        />
                                    ) : (
                                        <FallbackIcon />
                                    )}
                                </div>
                                <span className='text-center text-xs md:text-xs'>
                                    {title.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='hidden col-span-1 md:flex md:flex-col md:col-span-2 md:gap-2 md:justify-between'>
                <Image
                    src="https://placehold.co/1600x900/2f3437/ffffff?text=Project+Preview"
                    width={1600}
                    height={900}
                    alt='project preview'
                    className='hidden rounded-lg border border-primary-200 object-cover aspect-video md:block'
                />
                <div className='relative text-md text-wrap text-justify bg-primary-100 text-primary-950 p-3 rounded-md flex flex-col min-h-0'>
                    <div className='line-clamp-2 overflow-hidden'>
                        {description}
                    </div>
                    <div className='mt-auto ms-auto'>
                        <Link href={`/project/${routeTitle}`}
                            className='text-primary-600 hover:text-primary-800 font-medium'
                            target='_blank'>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
