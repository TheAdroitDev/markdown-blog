import fs from "fs"
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { Processor, unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/onthispage";

export default async function Page({ params }) {
    const slug = (await params).slug
    const filePath = `content/${slug}.md`
    if (!fs.existsSync(filePath)) {
        notFound();
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeAutolinkHeadings)
        .use(rehypeSlug)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .use(rehypeStringify);

    const processedContent = await processor.process(content);
    const htmlContent = processedContent.toString();
    // const blog = {
    //     title:"How To setup Ngnix",
    //     author:"John Doe",
    //     description:"This is a sample blog",
    //     date:"2024-23-12",
    //     content:'<p>To Setup ngnix you have to follow these steps first and then you are a professinal developer</p>'
    // }
    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
            <OnThisPage htmlContent={htmlContent} />
        </div>
    )
}
