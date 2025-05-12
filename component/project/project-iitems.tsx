import type { Project } from "@/lib/definition";
import { projectData } from "@/lib/projectData";
import Link from "next/link";
import ImgProject from "./imgProject";
import Tools from "./tools";
import SourceCodeLinkBtn from "./srcBtnLink";
import clsx from "clsx";
import { lusitana } from "@/lib/font";

export default function ProjectItems() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-3 md:p-4.5 p-3">
      {projectData.map((val: Project, inx: number) => {
        const { 
          img, 
          allTools, 
          mostUsedTools, 
          name, 
          linkPreview, 
          linkWebsite
        } = val;
        return (
          <Link 
            key={inx}
            href={linkWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-5 rounded-lg transition-all duration-300 ease-in-out overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-900 to-stone-900 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-800 to-red-700 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>

            <div className="relative flex flex-col gap-2 z-10">
              <h1 className={clsx("text-lg sm:text-xl md:text-2xl font-bold", lusitana.className)}>
                {name}
              </h1>
              <Tools mostUsed={mostUsedTools} allTools={allTools} />
              <ImgProject src={img} />
              <SourceCodeLinkBtn href={linkPreview} />
            </div>
          </Link>
        )
      })}
    </section>
  )
}