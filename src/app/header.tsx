'use client'
import { useState } from "react";

export default function Header({children}: {children: React.ReactNode}) {

      const [isOpen, setIsOpen] = useState<boolean>(false);

      const nav = [
        {name: "Home", link: '/'},
        {name: "Projects", link: "/projects"}, 
        {name: "Blogs", link: "/blogs"},
        {name: "Stories", link: "/stories"}
      ]

    return (
      <div className="sticky top-0 bg-[#0a0a0a]">
        <div className="flex justify-between items-center px-6 py-5 sticky top-0 self-start">
          <div className="logo">
            <h1 className="text-3xl font-extrabold">{'{Aditya}'}</h1>
          </div>
          <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>☰</button>
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <div className="flex md:flex-row flex-col gap-4 items-center px-4">
              {nav.map((item, index) => (
                <div key={index} className="font-bold px-3">
                  <a href={item.link} className="text-white hover:underline">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}