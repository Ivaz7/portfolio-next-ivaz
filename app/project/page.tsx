import type { Metadata } from "next";
import ProjectItems from "../component/project/project-iitems";

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