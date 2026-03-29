import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

//给 spec 定义完整 schema
const specCollection = defineCollection({
	schema: z.object({
		title: z.string().optional(),

		// 本站信息
		myInfo: z
			.object({
				name: z.string(),
				introduction: z.string(),
				link: z.string(),
				avatar: z.string(),
			})
			.optional(),

		// 友链列表
		friends: z
			.array(
				z.object({
					name: z.string(),
					introduction: z.string(),
					link: z.string(),
					avatar: z.string(),
				}),
			)
			.optional(),
	}),
});

export const collections = {
	posts: postsCollection,
	spec: specCollection,
};
