import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../public/photo.jpeg"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,  faNewspaper } from '@fortawesome/free-solid-svg-icons';
import Projects from "./_project";
import projectdata from "../lib/project.json";

export default function Home() {

  return (
    <div className="content">
      <div className="py-10 px-10 md:py-20 ">
        <div className="text-3xl tracking-normal text-[#3CCF91] font-bold">Hey there!, I&apos;m-</div>
        <div className="md:text-9xl font-bold pb-8 pt-4 text-5xl">Aditya Raj.</div>
        <div className="md:text-3xl text-xl tracking-normal font-bold"><span className="text-white">Software Engineer.</span> <span className="text-gray-400">A self-taught developer with an
          interest in Computer Science.</span></div>
        <div className="py-4">
          <div className="md:text-2xl font-light tracking-wide text-gray-400">🚀 Currently specializing in Full Stack (React / Next.js)</div>
          <div className="md:text-2xl font-ligh text-gray-400 tracking-wide">⚡ Software Developer at <span className="text-[#3CCF91]">Iraade Digiworks Pvt Ltd</span></div>
        </div>
        <div className="flex gap-4 mt-6">
          <Link href="https://github.com/aditya-repo" target="_blank">
            <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
              <div className="font-bold">Github</div>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/aditya-raj-388002346" target="_blank">
            <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
              <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
              <div className="font-bold">LinkedIn</div>
            </div>
          </Link>
          <Link href="adityaraj6220@gmail.com" target="_blank">
            <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
              <div className="font-bold">Email</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="pb-0 md:pb-20 px-10">
        <div className="flex justify-between md:flex-row flex-col-reverse items-center">
          <div className="md:w-1/2">
            <div className="font-bold text-3xl pb-4 md:text-left text-center"><span className="hidden md:inline">⚡ </span>About Me</div>
            <p className="text-gray-400">Hey! I&apos;m Aditya Raj, I&apos;ve been close to a computer since an early age, and been passionate about it ever since.</p>
            <p className="text-gray-400 mt-6">I really liked to build stuff using no-code tools
              back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Company
              and a SaaS Company
              I&apos;m interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
              Open Source
              and Competitive Programming</p>
            <p className="text-gray-400 mt-6">When I&apos;m not coding I listen to music with my friends, watch some show on Netflix, or if the weather&apos;s good, play badminton! 🏀</p>
          </div>
          <div className="w-1/2 flex justify-center my-8">
            <Image src={ProfilePic} alt="Profile Picture" className="rounded-full" />
          </div>
        </div>
      </div>

      <div className="pt-20 pb-10 px-4">
        <div className="px-2 mb-3">
          <div className="font-bold md:text-3xl text-xl">All Creative Works.</div>
          <p className="text-gray-400 text-xl">Here&apos;s some of my projects that I have worked on.</p>
          <Link href="/projects" className="text-[#3CCF91] text-xl">View all projects →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Projects item={projectdata[0]} />
          <Projects item={projectdata[1]} />
        </div>
      </div>


      <div className="py-10 px-4">
        <div className="flex justify-between items-center mb-3 px-2">
          <div className="font-bold text-2xl md:text-3xl flex gap-2 items-center"> <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 mr-2" />Latest Article</div>
          <p className="text-[#3CCF91] md:text-lg text-sm">View all articles →</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-5 bg-gray-800 rounded-lg">
            <div className="font-bold text-2xl">2024 Retrospective</div>
            <div className="tech-stack">
              <div className="flex gap-2 py-3 mb-3 border-b border-gray-600 items-center">
                <div className="text-gray-500">July 18 2022 • </div>
                <div className="text-gray-500 text-sm">2 min read</div>
              </div>
              <div className="tracking-wide text-gray-400">A website that provides roadmap for various fields in Programming and help people learn to code for free.</div>
            </div>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <div className="font-bold text-2xl">2024 Retrospective</div>
            <div className="tech-stack">
              <div className="flex gap-2 py-3 mb-3 border-b border-gray-600 items-center">
                <div className="text-gray-500">July 18 2022 • </div>
                <div className="text-gray-500 text-sm">2 min read</div>
              </div>
              <div className="tracking-wide text-gray-400">A website that provides roadmap for various fields in Programming and help people learn to code for free.</div>
            </div>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <div className="font-bold text-2xl">2024 Retrospective</div>
            <div className="tech-stack">
              <div className="flex gap-2 py-3 mb-3 border-b border-gray-600 items-center">
                <div className="text-gray-500">July 18 2022 • </div>
                <div className="text-gray-500 text-sm">2 min read</div>
              </div>
              <div className="tracking-wide text-gray-400">A website that provides roadmap for various fields in Programming and help people learn to code for free.</div>
            </div>
          </div>
          <div className="p-5 bg-gray-800 rounded-lg">
            <div className="font-bold text-2xl">2024 Retrospective</div>
            <div className="tech-stack">
              <div className="flex gap-2 py-3 mb-3 border-b border-gray-600 items-center">
                <div className="text-gray-500">July 18 2022 • </div>
                <div className="text-gray-500 text-sm">2 min read</div>
              </div>
              <div className="tracking-wide text-gray-400">A website that provides roadmap for various fields in Programming and help people learn to code for free.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-10 pt-10 px-4 flex flex-col items-center">
        <div className="font-bold text-6xl text-center mt-3">Keep In Touch.</div>
        <div className="flex flex-col items-center py-6 max-w-[480px]">
          <div className="text-center">I&apos;m currently specializing in Front-end Development. Feel free to get in touch and talk more about your projects.</div>
          <div className="flex gap-4 mt-6">
            <Link href="https://github.com/aditya-repo" target="_blank">
              <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
                <div className="font-bold">Github</div>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/aditya-raj-1/" target="_blank">
              <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
                <div className="font-bold">LinkedIn</div>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/aditya-raj-1/" target="_blank">
              <div className="flex bg-gray-900 py-2 px-3 rounded-md items-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2.5 text-[#3CCF91]" />
                <div className="font-bold">Email</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}