export type Frontmatter = {
    title: string;
    date: string;
};

export interface ProjectCard {
    title: string;
    subtitle: string;
    description: string;
    tech: {
        title: {
            name: string;
            url: string;
        }
        image: {
            src: string;
            alt: string;
        }
    }[];
}