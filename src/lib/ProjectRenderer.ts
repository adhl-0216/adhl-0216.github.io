import { Tokens, Renderer, Parser } from "marked";


export default class ProjectsRenderer extends Renderer {
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

    link = ({ href, text }: Tokens.Link) => {
        return `<a href="${href}" rel="noopener noreferrer" class="text-primary-500 hover:text-primary-600 underline" title="${text || ''}" target="_blank">${text}</a>`;
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