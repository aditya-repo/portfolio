import Image from "next/image";
import { Iprojects } from "./projects/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faFaceDizzy, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCss3Alt, faHtml5, faJs, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type TagConfig = { bg: string, text: string, icon: IconDefinition }
type TagProps = { name: string, bg: string, icon: IconDefinition, text: string }
type TagDictonary = {
  [name: string]: TagConfig
}

const tagConfig:TagDictonary = {
  react: { bg: "bg-blue-100", text: "text-blue-400", icon: faReact },
  javascript: { bg: "bg-yellow-100", text: "text-yellow-600", icon: faJs },
  html: { bg: "bg-red-100", text: "text-red-600", icon: faHtml5 },
  css: { bg: "bg-pink-100", text: "text-pink-600", icon: faCss3Alt },
  nodejs: { bg: "bg-green-100", text: "text-green-600", icon: faNode },
};

const DynamicTag = (Component: React.FC<TagProps>) => {
  const WrappedComponent = ({ name }: { name: string }) => {
    const tag = tagConfig[name.toLowerCase()];
    if (!tag) return <Component name={name} bg={"bg-blue-100"} icon={faFaceDizzy} text={"bg-blue-100"} />;

    return <Component name={name} bg={tag.bg} icon={tag.icon} text={tag.text} />;
  };

  WrappedComponent.displayName = `DynamicTag(${Component.displayName || "Tag"})`; // ✅ Assign display name

  return WrappedComponent;
};

const Tag = ({ name, bg, icon, text }: TagProps) => {
  return (
    <div className={`px-2.5 py-0.5 flex items-center gap-1 text-sm rounded-full bg-opacity-25 ${bg} ${text}`}>
      <FontAwesomeIcon icon={icon} className="w-3 h-3" />
      <span>{name}</span>
    </div>
  );
}

const FinalTag = DynamicTag(Tag);

function ProjectsComponent({ item }: { item: Iprojects }) {

  console.log(item);
  
    return (
        <div className="p-2">
          <div className="rounded">
          <Link href={`/projects/${item.slug}/?id=${item.id}`}><Image src={item.mainImage} width={400} height={400} alt="Profile Picture" className="rounded-t-lg w-[100%]" /></Link>
          </div>
          <div className="p-3 bg-gray-900 rounded-b-lg">
            <div className="flex justify-between items-center">
            <Link href={`/projects/${item.slug}/?id=${item.id}`}>
              <div className="font-bold text-2xl">{item.title}</div></Link>
              <Link target="_blank" href={item.hostedUrl}><div className="font-bold text-2xl"><FontAwesomeIcon icon={faExternalLink} className="w-4 h-4" /></div></Link>
            </div>
            <div className="tech-stack">
              <div className="flex  flex-wrap gap-2 py-3 mb-3 border-b border-gray-600">
                {item?.tags?.map((data: string , index: number)=> <FinalTag name={data} key={index} />)}
              </div>
              <div className="tracking-wide text-gray-400">{item.description}</div>
            </div>
          </div>
        </div>
    )
}

ProjectsComponent.displayName = "Projects";
export default ProjectsComponent;