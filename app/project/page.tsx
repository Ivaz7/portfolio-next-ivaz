import ProjectItems from "@/component/project/project-iitems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Ivaz Reza",
};

export default function Project() {
  return(
    <div className="min-h-screen w-full px-4 py-0 md:py-4.5  md:px-3">
      <ProjectItems />
    </div>
  )
}