'use client'
import { ProjectCard as ProjectCardType } from '@/src/types/types'
import InfiniteCarousel from './InfiniteCarousel'
import ProjectCard from './ProjectCard'

export default function ProjectsCarousel({ projects }: { projects: ProjectCardType[] }) {
    const projectCards = projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
    ))

    return (
        <InfiniteCarousel items={projectCards} />
    )
}
