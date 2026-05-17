import { z } from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(3, {message: "name must be at least 3 characters"})
        .max(120, {message: "name must be less than 120 characters"}),
    slug: z
        .string()
        .min(3, {message: "slug must be at least 3 characters"})
        .max(140, {message: "slug must be less than 140 characters"})
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "slug must be lowercase and containt only letters and numbers"
        }),
    tagline: z
        .string()
        .max(200, {message: "slug must be less than 200 characters"}),
    description: z
        .string()
        .min(20, { message: "description must be at least 20 characters" }),
    websiteUrl: z
        .string()
        .min(1, {message: "website URL is required"}),
    tags: z
        .string()
        .min(1, {message: "tags are required"})
        //to transform and split tgl,ggl,ggd
        .transform((val) => val.split(",").map((tag) => 
        tag.trim().toLowerCase()))
});