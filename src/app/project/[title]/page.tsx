import { marked, Tokens, Renderer, Parser } from "marked";
import matter from "gray-matter";
import DOMPurify from "dompurify";
import { JSDOM } from 'jsdom';
import { isValidImageUrl } from "@/src/util/imageUtils";
import { Frontmatter } from "@/src/types/types";


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

class ProjectsRenderer extends Renderer {
    heading = ({ text, depth }: Tokens.Heading) => {
        const classes = {
            1: 'text-5xl font-bold mb-6',
            2: 'text-4xl font-semibold mb-4',
            3: 'text-3xl font-semibold mb-3',
            4: 'text-2xl font-medium mb-2',
            5: 'text-xl font-medium mb-2',
            6: 'text-lg font-medium mb-2',
        }[depth] || '';
        return `<h${depth} class="${classes}">${text}</h${depth}>`;
    };

    image = ({ href, title, text }: Tokens.Image) => {
        if (href === 'fallback') {
            return `<svg  xmlns="http://www.w3.org/2000/svg" class="fill-secondary-500 w-8 h-8" viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-apps"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" /></svg>`;
        }
        return `<img src="${href}" alt="${text}" title="${title || ''}" class="inline-block align-middle h-8 w-8"/>`;
    };

    paragraph = ({ text }: Tokens.Paragraph) => {
        return `<p class="mb-4 leading-relaxed">${text}</p>`;
    };

    list = ({ items, ordered }: Tokens.List) => {
        const type = ordered ? 'ol' : 'ul';
        const listItems = items.map((item) => this.listitem(item)).join('');
        return `<${type} class="list-${ordered ? 'decimal' : 'disc'} ml-6 mb-4 bg-primary-50 rounded-xl p-4 text-accent-950">${listItems}</${type}>`;
    };

    listitem = ({ tokens }: Tokens.ListItem) => {
        return `<li class="flex items-center text-xl gap-3 mb-3">${new Parser().parseInline(tokens)}</li>`;
    };
}


async function fetchProjectMarkdown(slug: string): Promise<{ content: string; frontmatter: Frontmatter }> {
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = "adhl-0216";
    const repoName = "portfolio-contents";
    const filePath = `projects/${slug}.md`;

    let data;
    try {
        const response = await fetch(
            `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`,
            {
                headers: {
                    Authorization: `token ${githubToken}`,
                    Accept: "application/vnd.github.v3+json",
                },
                cache: "no-store",
            }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        }

        data = await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }

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
    const githubToken = process.env.GITHUB_TOKEN;
    const repoOwner = "adhl-0216";
    const repoName = "portfolio-contents";
    const dirPath = "projects";

    const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${dirPath}`,
        {
            headers: {
                Authorization: `token ${githubToken}`,
                Accept: "application/vnd.github.v3+json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch project directory");
    }

    const files = await response.json();
    const projectSlugs = files
        .filter((file: { name: string }) => file.name.endsWith(".md"))
        .map((file: { name: string }) => ({
            "project-title": file.name.replace(".md", ""),
        }));

    return projectSlugs;
}

interface ProjectPageProps {
    params: Promise<{ title: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const title = (await params).title;
    const { content, frontmatter } = await fetchProjectMarkdown(title);

    const window = new JSDOM('<!DOCTYPE html>').window;
    const purify = DOMPurify(window);
    const sanitizedHtml = purify.sanitize(content);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-6">{frontmatter.title}</h1>
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
    );
}

export const revalidate = 3600;