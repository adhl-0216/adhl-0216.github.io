'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faJava } from '@fortawesome/free-brands-svg-icons'

function ProjectsContainer() {
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
    return (
        <section id="projects-container" className="min-h-[50dvh] flex flex-col pt-32 mb-4">
            <h2 className='text-4xl font-semibold mb-8'>My Projects</h2>
            <div className='flex flex-col lg:grid lg:grid-cols-2 rounded-2xl gap-4'>
                {projects.map(({ title, subtitle, description, tech }, index) => {
                    return (
                        <div key={index} className='flex flex-col bg-secondary-800 p-4 rounded-lg'>
                            <span className='text-lg lg:text-2xl font-bold'>{title}</span>
                            <span className='text-md lg:text-lg text-secondary-100 font-semibold italic '>{subtitle}</span>
                            <span className='text-lg h-70 lg:h-56 overflow-y-auto bg-secondary-200 text-secondary-700 p-3 rounded-md mt-4'>{description}</span>
                            <ul className='flex mt-2 gap-2 flex-wrap justify-center py-2'>
                                {tech.map(({ name, url, icon }, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={url} className='flex flex-col items-center w-24'>
                                                <div className='flex bg-secondary-400 rounded-full p-2 justify-center items-center w-14 h-14'>
                                                    <FontAwesomeIcon icon={icon} size='2xl' />
                                                </div>
                                                <div className='text-center'>
                                                    {name}
                                                </div>
                                            </Link>
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