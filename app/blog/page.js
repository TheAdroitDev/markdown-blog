import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'
import fs, { readFileSync } from "fs"
import matter from "gray-matter";


const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(`content/${file}`, 'utf-8')
    const { data } = matter(fileContent);
    return data;
})

const Blog = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="rounded-lg shadow-md overflow-hidden dark:border-2 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        {/* Blog post image */}
                        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />

                        {/* Blog post content */}
                        <div className="p-4">
                            {/* Blog post title */}
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

                            {/* Blog post description */}
                            <p className=" mb-4">{blog.description}</p>

                            {/* Blog post author and date */}
                            <div className="text-sm  mb-4">
                                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                            </div>

                            {/* Link to the full blog post */}
                            <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog
