import Image from "next/image";
import { IProject } from "./projects/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import ProjectPic from "../../public/project.webp";
import { faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";

export default function Projects({ item }: { item: IProject }) {
    return (
        <div className="p-2">
          <div className="rounded">
            <Image src={ProjectPic} alt="Profile Picture" className="rounded-t-lg w-[100%]" />
          </div>
          <div className="p-3 bg-gray-900 rounded-b-lg">
            <div className="flex justify-between items-center">

              <div className="font-bold text-2xl">{item.title}</div>
              <div className="font-bold text-2xl"><FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" /></div>
            </div>
            <div className="tech-stack">
              <div className="flex gap-2 py-3 mb-3 border-b border-gray-600">
                <div className="bg-yellow-400 bg-opacity-25 text-yellow-400 rounded-lg font-bold px-2 flex items-center gap-1"><FontAwesomeIcon icon={faReact} className="w-3 h-3" /> React</div>
                <div className="bg-gray-300 bg-opacity-25 text-yellow-600 rounded-lg font-bold px-2 flex items-center gap-1"><FontAwesomeIcon icon={faHtml5} className="w-3 h-3" /> JavaScript</div>
              </div>
              <div className="tracking-wide text-gray-400">{item.description}</div>
            </div>
          </div>
        </div>
    )
}