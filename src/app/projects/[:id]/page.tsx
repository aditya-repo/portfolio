import { marked } from "marked";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

interface Section {
  type: "markdown" | "text" | "list" | "ordered_list" | "image";
  title?: string;
  content?: string;
  items?: string[];
  images?: { src: string; alt?: string }[];
}


export interface ILink {
  name: string
  link: string
}


interface ProjectData {
  title: string;
  mainImage: string;
  description: string;
  githubUrl: string;
  hostedUrl: string;
  tags: string[];
  sections: Section[];
}

const jsonData: ProjectData = {
  title: "Spherix Marketing Website",
  mainImage: "/project.webp",
  description: "A website that provides a roadmap for various fields in programming and helps people learn to code for free.",
  githubUrl: "https://github.com/user/repo",
  hostedUrl: "https://project-live.com",
  tags: ["React", "Tailwind", "Next.js", "Markdown"],
  sections: [
    { type: "text", title: "Overview", content: "This section contains plain text content." },
    { type: "list", title: "Key Features", items: ["Feature 1", "Feature 2", "Feature 3"] },
    { type: "ordered_list", title: "Setup Steps", items: ["Step 1", "Step 2", "Step 3"] },
    {
      type: "image",
      title: "Screenshots",
      images: [
        { src: "/project.webp", alt: "Screenshot 1" },
        { src: "/project.webp", alt: "Screenshot 2" },
        { src: "/project.webp", alt: "Screenshot 3" },
        { src: "/project.webp", alt: "Screenshot 4" }
      ]
    }
  ]
};

const DynamicProjectRenderer: React.FC = () => {
  return (
    <div className="p-5 max-w-5xl mx-auto">
      <div>
        <Image src={jsonData.mainImage} alt="Project Image" width={800} height={400} className="rounded-lg w-full" />
      </div>

      <h1 className="font-bold text-3xl md:text-5xl pb-3 pt-6 ">{jsonData.title}</h1>
      <p className="text-gray-400">{jsonData.description}</p>

      <div className="flex gap-10 mt-4 pb-3 mb-4 items-center border-b border-gray-800">
        <a href={jsonData.hostedUrl} target="_blank" rel="noopener noreferrer" className="text-[#3CCF91] flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} className="w-6 h-6" /> <span> Live Project</span>
        </a>
        <a href={jsonData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#F7AB0A] flex items-center gap-2">
          <FontAwesomeIcon icon={faSquareGithub} className="w-6 h-6" /> <span> Source Code</span>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {jsonData.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
        ))}
      </div>

      <div className="prose prose-lg mt-6">
        {jsonData.sections.map((section, index) => (
          <div key={index} className="mb-6">
            {section.title && <h3 className="text-3xl font-semibold mb-2">{section.title}</h3>}

            {section.type === "markdown" && section.content && (
              <div dangerouslySetInnerHTML={{ __html: marked.parse(section.content) }} />
            )}

            {section.type === "text" && section.content && <p>{section.content}</p>}

            {section.type === "list" && section.items && (
              <ul className="list-disc pl-5">
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}

            {section.type === "ordered_list" && section.items && (
              <ol className="list-decimal pl-5">
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ol>
            )}

            {section.type === "image" && section.images && (
              <div className="grid grid-cols-2 gap-4">
                {section.images.map((img, i) => (
                  <Image width={400} height={320} key={i} src={img.src} alt={img.alt || `Image ${i + 1}`} className="rounded-lg shadow-lg w-full" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicProjectRenderer;
