import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import mdxMermaid from 'mdx-mermaid'
import {Mermaid} from 'mdx-mermaid/lib/Mermaid'

export default defineConfig({
    integrations: [mdx()],
    markdown: {
    }
});