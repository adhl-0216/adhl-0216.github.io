'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import InfiniteCarousel from '@/src/components/InfiniteCarousel'
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'

function ProjectsSection() {
    const [projects] = useState([
        {
            title: "CAQES",
            subtitle: "Centralised Automated Quarantine & Endpoint Segmentation",
            description: "Automated Internet of Things (IoT) network segmentation tool for smart homes. Developed to improve network security by integrating with Snort, an open-source IDS. CAQES is designed to segment and secure IoT devices automatically using Python, Open vSwitch, and syslog-ng.",
            tech: [
                {
                    name: "Python",
                    url: "https://www.python.org/",
                    icon: faPython
                },
                {
                    name: "Snort",
                    url: "https://www.snort.org/",
                    icon: faCircle
                },
                {
                    name: "Open vSwitch",
                    url: "https://www.openvswitch.org/",
                    icon: faCircle
                },
                {
                    name: "syslog-ng",
                    url: "https://www.syslog-ng.com/",
                    icon: faCircle
                },
            ]
        },
        {
            title: "Sblitz",
            subtitle: "Split Your Bill With Ease",
            description: "A user-friendly application enabling users to split bills with friends and family. Features a reactive frontend built with Next.js and a robust backend microservices architecture deployed on Kubernetes. Offers seamless interaction via a microservices structure using Express.js and Spring Boot with Nginx as the ingress controller.",
            tech: [
                {
                    name: "Next.js",
                    url: "https://nextjs.org/",
                    icon: faReact
                },
                {
                    name: "Express.js",
                    url: "https://expressjs.com/",
                    icon: faNodeJs
                },
                {
                    name: "Spring Boot",
                    url: "https://spring.io/projects/spring-boot",
                    icon: faJava
                },
                {
                    name: "Kubernetes",
                    url: "https://kubernetes.io/",
                    icon: faCircle
                },
                {
                    name: "Nginx",
                    url: "https://www.nginx.com/",
                    icon: faCircle
                }
            ]
        },
        {
            title: "VendorVerse",
            subtitle: "Venue Booking System with Role-Based Access Control",
            description: "Led a team of 6 in software quality assurance at JRI-America. Contributed across DBA, infrastructure, design, and project management. Implemented a CI/CD pipeline with GitHub Actions, cutting time-to-deploy by 80%. Developed using Flask, with Firebase Authentication and Firestore for cloud-based identity management and database solutions.",
            tech: [
                {
                    name: "Cloud Firestore",
                    url: "https://firebase.google.com/products/firestore",
                    icon: faCircle
                },
                {
                    name: "Firebase Authentication",
                    url: "https://firebase.google.com/products/auth",
                    icon: faCircle
                },
                {
                    name: "GitHub Actions",
                    url: "https://github.com/features/actions",
                    icon: faGithubSquare
                },
                {
                    name: "Flask",
                    url: "https://flask.palletsprojects.com/",
                    icon: faPython
                },
                {
                    name: "Bootstrap",
                    url: "https://getbootstrap.com/",
                    icon: faBootstrap
                }
            ]
        },
        {
            title: "NBA Fantasy Scheduler",
            subtitle: "Basketball League Season Game Scheduling System",
            description: "Developed a fantasy league scheduling system for 10 teams, ensuring 3 games against each team. The system provides post-season standings analysis. Built with C# and Oracle SQL Server, it automates scheduling and supports advanced statistical analysis for fantasy league enthusiasts.",
            tech: [
                {
                    name: "C#",
                    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
                    icon: faCircle
                },
                {
                    name: "Oracle SQL Server",
                    url: "https://www.oracle.com/database/",
                    icon: faCircle
                }
            ]
        }
    ])
    const projectCards = projects.map(({ title, subtitle, description, tech }, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 bg-primary-900 p-8 rounded-lg w-[48rem] h-[27rem] transition-all duration-300 group hover:scale-105"
            data-active="false"
        >
            <div className="flex flex-col">

                <a href={`/project/${title.trim().replaceAll(' ', '-').toLowerCase()}`} className='text-2xl font-bold mb-1 text-primary-100'>{title}</a>
                <span className='text-base text-text-50 font-semibold italic mb-2'>{subtitle}</span>
                <ul className='flex gap-2 flex-wrap mt-4'>
                    {tech.map(({ name, url, icon }, index) => (
                        <li key={index}>
                            <Link href={url} className='flex flex-col items-center w-14'>
                                <div className='flex bg-primary-400 rounded-full p-1.5 justify-center items-center w-10 h-10'>
                                    <FontAwesomeIcon icon={icon} size='lg' />
                                </div>
                                <div className='text-center text-xs'>
                                    {name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex-grow"></div>
                <a href={`/project/${title.trim().replaceAll(' ', '-').toLowerCase()}`} className='inline-flex text-center mt-auto px-4 py-2 bg-primary-400 hover:bg-primary-300 text-primary-100 rounded-lg font-semibold transition-colors duration-200'>See more</a>

            </div>

            <div className='text-md text-wrap col-span-2 overflow-y-auto bg-primary-100 text-primary-950 p-3 rounded-md'>
                {description}
            </div>
        </div>
    ))

    return (
        <section id="projects-container" className="min-h-[50dvh] h-[80dvh] flex flex-col overflow-hidden justify-center">
            <h2 className='text-4xl font-semibold mb-8 text-center'>My Projects</h2>
            <InfiniteCarousel items={projectCards} />
        </section>
    )
}

export default ProjectsSection