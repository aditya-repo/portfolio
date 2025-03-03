import Link from "next/link"
import { ILink } from "./page"


export default function SideTable({ children }: { children: ILink[] }) {
    
    return (
        <div>
            <ul className="w-[300px] sticky top-16 py-4 self-start hidden md:block">
                <li className="font-bold">Table of Contents</li>
                {children.map((item, index) => (
                    <Link href={item.link} key={index} className="block hover:bg-gray-900 py-1 px-3 rounded-lg">{item.name}</Link>
                ))}
            </ul>
        </div>
    )
}