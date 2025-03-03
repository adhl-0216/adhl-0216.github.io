import { ProjectCard } from "@/src/types/types";

type MarkdownNode = {
    type: string;
    depth?: number;
    children?: MarkdownNode[];
    value?: string;
    url?: string;
    alt?: string;
    title?: string | null;
};

export function parseProjects(trees: MarkdownNode[]): ProjectCard[] {
    return trees.map(tree => {
        const title = tree.children?.find(node =>
            node.type === 'heading' && node.depth === 1
        )?.children?.[0]?.value || '';

        const subtitle = tree.children?.find(node =>
            node.type === 'heading' && node.depth === 6
        )?.children?.[0]?.value || '';

        const description = tree.children?.find(node =>
            node.type === 'paragraph'
        )?.children?.[0]?.value || '';

        const techList = tree.children?.find(node =>
            node.type === 'list'
        );

        const tech = techList?.children?.map(item => {
            const paragraph = item.children?.[0];
            const [imageNode, , linkNode] = paragraph?.children || [];

            return {
                title: {
                    name: linkNode?.children?.[0]?.value || '',
                    url: linkNode?.url || '',
                },
                image: {
                    src: imageNode?.url || '',
                    alt: imageNode?.alt || '',
                }
            };
        }) || [];

        return {
            title,
            subtitle,
            description,
            tech
        };
    });
}
