import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { read } from "fs";
import Link from "next/link";

export interface ILink {
    title: string;
    link: string;
    description: string;
    readTime: string;
    date: string
}

export default function Blogs() {
    const sampleBlog = [
        {
            title: "Blog 1",
            description: "A website that provides roadmap for various fields in Programming and help people learn to code for free.",
            link: "https://github.com/aditya-repo/portfolio",
            readTime: "6 min read",
            date: "Jan 21 2025"
        },
        {
            title: "Blog 2",
            description: "A website that provides roadmap for various fields in Programming and help people learn to code for free.",
            link: "https://github.com/aditya-repo/portfolio",
            readTime: "6 min read",
            date: "Jan 21 2025"
        },
        {
            title: "Blog 3",
            description: "A website that provides roadmap for various fields in Programming and help people learn to code for free.",
            link: "https://github.com/aditya-repo/portfolio",
            readTime: "6 min read",
            date: "Jan 21 2025"
        },
        {
            title: "Blog 4",
            description: "A website that provides roadmap for various fields in Programming and help people learn to code for free.",
            link: "https://github.com/aditya-repo/portfolio",
            readTime: "6 min read",
            date: "Jan 21 2025"
        }]

    return (
        <div className="py-10 px-3">
            <h1 className="text-6xl font-bold pt-16 pb-6">Blogs</h1>
            <p>This is where I share my writings on programming, tutorials, and my experiences.</p>
            <div className="flex items-center"><input type="text" placeholder="Search" className="bg-transparent border border-gray-300 p-1 pl-4 my-3 w-[300px] outline-none rounded-l-lg border-r-0" /><div className="bg-transparent p-2 rounded-r-lg border border-l-0"><FontAwesomeIcon icon={faMagnifyingGlass} className="w-[22px] h-[16px] bg-transparent" /></div></div>
            <div>
                <SingleBlog item={sampleBlog} />
            </div>
        </div>
    )
}

const SingleBlog = ({ item }: { item: ILink[] }) => {
    return (
        <>
            {
                item.map((item, index) => (
                    <div key={index} className="flex md:flex-row flex-col gap-12 py-2">
                        <div className="flex flex-col">
                            <div className="text-gray-400">{item.date}</div>
                            <div className="text-sm md:text-right text-left text-gray-400">6 min read</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">{item.title}</div>
                            <p className="text-gray-400">{item.description}</p>
                            <Link href={item.link} className="text-[#3CCF91] cursor-pointer">Read more →</Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}