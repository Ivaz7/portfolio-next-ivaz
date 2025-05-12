import Description from "@/component/about/description";
import Skill from "@/component/about/skill";
import Certification from "@/component/about/certification";
import type { Metadata } from "next";
// import Description from "../component/about/description";
// import Skill from "../component/about/skill";
// import Certification from "../component/about/certification";

export const metadata: Metadata = {
  title: "About | Ivaz Reza",
};

export default function About() {
  return(
    <div className="min-h-screen px-4 py-4.5 md:px-3 flex flex-col gap-4 mb-10">
      <Description />
      <Skill />
      <Certification />
    </div>
  )
}