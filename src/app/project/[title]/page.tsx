import { Metadata } from "next";
import { marked } from "marked";
import matter from "gray-matter";
import DOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import { isValidImageUrl } from "@/src/lib/imageUtils";
import { Frontmatter } from "@/src/types/types";
import ProjectsRenderer from "@/src/lib/ProjectRenderer";
import { fetchGitHubDirectory, fetchGitHubFile } from "@/src/lib/github";

async function preprocessMarkdown(markdown: string): Promise<string> {
    const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
    let match;
    let processedMarkdown = markdown;

    while ((match = imageRegex.exec(markdown)) !== null) {
        const [fullMatch, altText, url] = match;
        const isValid = await isValidImageUrl(url);
        if (!isValid) {
            processedMarkdown = processedMarkdown.replace(fullMatch, `![${altText}](fallback)`);
        }
    }

    return processedMarkdown;
}

async function fetchProjectMarkdown(slug: string): Promise<{ content: string; frontmatter: Frontmatter }> {
    const data = await fetchGitHubFile(`projects/${slug}.md`);
    const markdown = Buffer.from(data.content, "base64").toString("utf-8");
    const { data: frontmatter, content: markdownContent } = matter(markdown);
    const processedMarkdown = await preprocessMarkdown(markdownContent);

    marked.use({
        renderer: new ProjectsRenderer(),
        gfm: true,
        breaks: true,
    });

    const htmlContent = await marked(processedMarkdown);

    return {
        content: htmlContent,
        frontmatter: frontmatter as Frontmatter,
    };
}

export async function generateStaticParams() {
    const files = await fetchGitHubDirectory('projects');
    return files
        .filter((file: { name: string }) => file.name.endsWith(".md"))
        .map((file: { name: string }) => ({
            title: file.name.replace(".md", ""),
        }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const title = (await params).title;

    return {
        title: `${title.toUpperCase()} - Adrian Han-Lim Oah`,
    };
}

interface ProjectPageProps {
    params: Promise<{ title: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const title = (await params).title;
    const { content, frontmatter } = await fetchProjectMarkdown(title);

    const window = new JSDOM('<!DOCTYPE html>').window;
    const purify = DOMPurify(window);

    const sanitizedHtml = purify.sanitize(content, {
        ADD_ATTR: ['target']
    });

    return (
        <section className="container mx-auto py-16">
            <h1 className="text-2xl md:text-5xl font-bold mb-6">{frontmatter.title}</h1>
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </section>
    );
}