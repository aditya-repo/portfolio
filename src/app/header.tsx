'use client'
import { useState } from "react";

export default function Header({children}: {children: React.ReactNode}) {

      const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div>
        <div className="flex justify-between items-center px-6 py-5">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-3xl font-extrabold">{'{Aditya}'}</h1>
          </div>
  
          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
  
          {/* Navigation Menu */}
          <div
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:bg-transparent transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            } md:flex`}
          >
            <ul className="flex md:flex-row flex-col gap-4 items-center px-4">
              {["Home", "Projects", "Blogs"].map((item) => (
                <li key={item} className="font-bold px-3">
                  <a href="#" className="text-white hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
              
      </div>
    )
}