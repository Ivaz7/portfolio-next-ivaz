import ProjectItems from "@/component/project/project-iitems";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Ivaz Reza",
};

export default function Project() {
  return(
    <div className="min-h-screen">
      <ProjectItems />
    </div>
  )
}