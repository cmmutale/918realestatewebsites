import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define a schema for the 'blog' collection
const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/articles" }),
    // type: 'content', // Use 'content' for Markdown and MDX files
    schema: z.object({
        title: z.string(),
        pubDate: z.date(), // Astro automatically converts the string date to a Date object
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string().url(), // Validate that the image URL is a valid URL
            alt: z.string(),
        }),
        tags: z.array(z.string()), // Expects an array of strings
    }),
});

// Export a 'collections' object containing all defined collections
export const collections = { blogCollection };