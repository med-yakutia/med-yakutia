import { defineConfig } from 'astro/config';
import { useSanityClient } from 'astro-sanity';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sanity from "astro-sanity";
import cloudflare from "@astrojs/cloudflare";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    site: 'http://med-yakutia.ru/',
    integrations: [mdx(), sitemap(), sanity({
        projectId: 'zlw6bq4o',
        dataset: 'production',
        apiVersion: '2021-03-25',
        useCdn: true
    }), alpinejs()],
    output: 'server' // adapter: cloudflare()
        ,
    adapter: cloudflare()
});