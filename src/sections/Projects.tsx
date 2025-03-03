import ProjectsCarousel from '@/src/components/ProjectsCarousel'
import { ProjectCard } from '@/src/types/types'
import { fetchGitHubDirectory, fetchGitHubFile } from '@/src/lib/github'
import remarkParse from 'remark-parse'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { parseProjects } from '@/src/lib/markdownUtils'

async function fetchProjects(): Promise<ProjectCard[]> {
    const files = await fetchGitHubDirectory('projects');

    const projectPromises = files
        .filter((file: { name: string }) => file.name.endsWith(".md"))
        .map(async (file: { path: string }) => {
            const data = await fetchGitHubFile(file.path);
            const markdown = Buffer.from(data.content, "base64").toString("utf-8");
            const processor = unified().use(remarkParse);
            const parseTree = processor.parse(markdown);
            const tree = await processor.run(parseTree);
            removePosition(tree, { force: true });
            return tree;
        });

    const trees = await Promise.all(projectPromises);
    return parseProjects(trees);
}

export default async function ProjectsSection() {
    const projects = await fetchProjects();

    return (
        <section id="projects-container" className="h-[60dvh] md:h-[100dvh] flex flex-col overflow-hidden justify-center px-2 md:px-40">
            <h2 className='text-3xl md:text-4xl font-semibold mb-4 md:mb-8 text-start'>My Projects</h2>
            <ProjectsCarousel projects={projects} />
        </section>
    )
}