"use client";

import Image from "next/image";
import ProjectPic from "../../../../public/project.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SideTable from "./sidetable";
import { useEffect, useState } from "react";


export interface ILink {
    name: string
    link: string
}

export default function SingleProject() {

    const topic = ["Overview", "Project Goals", "Tech Stack", "Features ✨", "Hero Section", "Why Spherix", "Spherix Modules", "Challenges", "Learning and Takeaways"]

    const [links, setLinks] = useState<ILink[]>([])

    useEffect(() => {
        setLinks(
            topic.map((element) => ({
                name: element,
                link: `#${element.trim().replace(/\s+/g, "-").toLowerCase()}`,
            }))
        );
    }, []);

    return (
        <div className="p-4 md:p-7">
            <div className=""><Image src={ProjectPic} alt="Profile Picture" className="rounded-lg w-[100%]" /></div>
            <div className="font-bold text-5xl py-4">Spherix Marketing Website</div>
            <div className="text-gray-400">A website that provides roadmap for various fields in Programming and help people learn to code for free.</div>
            <div className="flex gap-10 mt-4 pb-3 mb-4 items-center border-b-[0.1px] border-gray-800">
                <div className="text-[#3CCF91] flex items-center"><FontAwesomeIcon icon={faLink} className="w-6 h-6" />  <span>→</span><span> Live Project</span></div>
                <div className="text-[#F7AB0A] flex items-center gap-2"><FontAwesomeIcon icon={faGithub} className="w-6 h-6" /> <span> Source Code</span></div>
            </div>
            <div className="flex gap-3">
                {/* Main Content */}
                <div className="flex-grow md:pr-8">
                    <div id="overview" className="mt-5">
                        <div className="text-4xl font-bold mb-1 border-l-4 border-green-800 pl-4">Overview</div>
                        <p className="py-2">The Spherix website was built using Astro, chosen for its speed and built-in blogging capabilities to support SEO efforts. To create a visually engaging experience, we used Spline for the 3D hero section, adding an interactive and modern touch to the design.</p>
                    </div>
                    <div id="overview" className="mt-5">
                        <div className="text-4xl font-bold mb-1 border-l-4 border-green-800 pl-4">Project Goals</div>
                        <p className="py-2">Spherix needed a marketing website to showcase their pricing, attract potential customers, and drive SEO-driven traffic to boost their marketing efforts.</p>
                    </div>
                    <div id="overview" className="mt-5">
                        <div className="text-4xl font-bold mb-1 border-l-4 border-green-800 pl-4">Tech Stack</div>
                        <p className="py-2">To meet the project's requirements efficiently, we utilized:</p>
                        <ul className="list-disc list-inside">
                            <li className="pb-1"><span className="font-bold">Astro</span>: For simplicity, speed, and seamless integration of a blog for SEO.</li>
                            <li className="pb-1"><span className="font-bold">Spline</span>: For creating engaging and interactive 3D hero sections.</li>
                            <li className="pb-1"><span className="font-bold">Spline</span>: For creating engaging and interactive 3D hero sections.</li>
                        </ul>
                    </div>
                </div>

                <SideTable children={links} />
            </div>

        </div>
    )
}