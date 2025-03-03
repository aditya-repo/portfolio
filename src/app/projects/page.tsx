"use client"

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "../_project";
import { useEffect, useState } from "react";
import data from "../../lib/project.json";

export type Iprojects = {
    id: number;
    slug: string;
    title: string;
    description: string;
    mainImage: string;
    hostedUrl: string;
    githubUrl: string;
    tags: string[];
    sections: Section[];
  };
  
  type Section =
    | { type: string; title: string; content: string }
    | { type: string; title: string; items: string[] }
    | { type: string; title: string; items: string[] }
    | { type: string; title: string; images: Image[] };
  
  type Image = {
    src: string;
    alt: string;
  };
  

const projectsData: Iprojects[] = data

export default function About() {
    const [projects, setProjects] = useState<Iprojects[]>([]);
    useEffect(() => {
        setProjects(projectsData);
    }, [])

    const searchProjects = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const data = projectsData.filter((item) => item.title.trim().toLowerCase().includes(event.target.value.toLowerCase()))
        
        setProjects(data)
    }

    return (
        <div className="md:py-10 py-6 px-5">
            <h1 className="text-6xl font-bold md:pt-16 pb-6">Projects</h1>
            <p>I love building projects and practice my engineering skills, here&apos;s an archive of things that I&apos;ve worked on.</p>
            <div className="flex items-center">
                <input type="text" placeholder="Type project name..." onChange={searchProjects} className="bg-transparent border border-gray-300 py-2 pl-4 my-3 w-[300px] outline-none rounded-l-lg border-r-0 " />
                <div className="bg-transparent p-2 rounded-r-lg border border-l-0">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="w-[22px] h-[16px] bg-transparent" />
                </div>
            </div>
            <div className="h-[0.25px] border-b-[0.1px] border-gray-800 text-white mt-1"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {projects.map((item, index) => (
                    <Projects key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
