'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { faPython } from '@fortawesome/free-brands-svg-icons'

function ProjectsContainer() {
    const [projects] = useState([
        {
            title: "VendorVerse",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error distinctio sequi nihil temporibus quod ut nulla at architecto explicabo, recusandae repellat, modi ullam! Dolore ex exercitationem culpa harum tempora",
            tech: [
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                },
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                }
            ]
        },
        {
            title: "VendorVerse",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error distinctio sequi nihil temporibus quod ut nulla at architecto explicabo, recusandae repellat, modi ullam! Dolore ex exercitationem culpa harum tempora",
            tech: [
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                },
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                }
            ]
        },
        {
            title: "VendorVerse",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error distinctio sequi nihil temporibus quod ut nulla at architecto explicabo, recusandae repellat, modi ullam! Dolore ex exercitationem culpa harum tempora",
            tech: [
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                },
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                }
            ]
        },
        {
            title: "VendorVerse",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error distinctio sequi nihil temporibus quod ut nulla at architecto explicabo, recusandae repellat, modi ullam! Dolore ex exercitationem culpa harum tempora",
            tech: [
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                },
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                }
            ]
        },
        {
            title: "VendorVerse",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore error distinctio sequi nihil temporibus quod ut nulla at architecto explicabo, recusandae repellat, modi ullam! Dolore ex exercitationem culpa harum tempora",
            tech: [
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                },
                {
                    name: 'Flask',
                    url: '',
                    icon: faPython
                }
            ]
        },
    ])
    return (
        <section id="projects-container" className="min-h-[50dvh] flex flex-col pt-32 mb-4">
            <h2 className='text-4xl font-semibold mb-4'>My Projects</h2>
            <div className='flex flex-col rounded-2xl gap-6'>
                {projects.map(({ title, description, tech }, index) => {
                    return (
                        <div key={index} className='flex flex-col bg-secondary-800 p-4 rounded-lg'>
                            <span className='text-lg font-bold'>{title}</span>
                            <span>{description}</span>
                            <ul className='flex mt-2 gap-2'>
                                {tech.map(({ name, url, icon }, index) => {
                                    return (
                                        <li key={index} className='flex flex-col'>
                                            <Link href={url} className='flex bg-secondary-400 rounded-full p-2 justify-center items-center w-10 h-10'>
                                                <FontAwesomeIcon icon={icon} size='xl' />
                                            </Link>
                                            <span>
                                                {name}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default ProjectsContainer