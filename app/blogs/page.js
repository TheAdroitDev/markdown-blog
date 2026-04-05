import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'
import matter from "gray-matter";

export const dynamic = "force-dynamic";

const slugs = [
    "c-tutorial-in-hindi",
    "chatgpt-vs-gemini",
    "css-tutorial",
    "git-tutorial",
    "js-tutorial-in-hindi",
    "onboarding-docs-for-chaicode-cohort",
];

const getBlogs = async () => {
    const blogs = await Promise.all(
        slugs.map(async (slug) => {
            const res = await fetch(
                `https://adroit-blogs.vercel.app/content/${slug}.md`,
                { cache: "no-store" }
            );

            if (!res.ok) return null;

            const fileContent = await res.text();
            const { data } = matter(fileContent);

            return { ...data, slug };
        })
    );

    return blogs.filter(Boolean);
};

const Blog = async () => {
    const blogs = await getBlogs();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-md overflow-hidden dark:border-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />

                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

                            <p className=" mb-4">{blog.description}</p>

                            <div className="text-sm  mb-4">
                                <span>By {blog.author}</span> |{" "}
                                <span>
                                    {new Date(blog.date).toLocaleDateString('en-GB', {
                                        day: '2-digit',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>

                            <Link
                                href={`/blog/${blog.slug}`}
                                className={buttonVariants({ variant: "outline" })}
                            >
                                Click here
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog