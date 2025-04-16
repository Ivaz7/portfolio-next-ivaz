import clsx from "clsx";
import ContainerSection from "./containerSection";
import { poppins } from "@/app/lib/font";

export default function Description() {
  return (
    <ContainerSection title="About">
      <p className={clsx("font-normal text-xs sm:text-sm md:text-base", poppins.className)}>
        I build <strong>responsive layouts</strong> with a focus on <strong>clean, user-friendly interfaces</strong> that adapt well across devices. My approach is guided by a basic understanding of <strong>UI and UX principles</strong> to ensure a smooth experience.
      </p>
      <p className={clsx("font-normal text-xs sm:text-sm md:text-base", poppins.className)}>
        I&apos;m confident in <strong>translating designs into functional code</strong>. One of my projects was a <strong>Netflix clone</strong>, where I focused on <strong>closely matching the original interface</strong> for a polished and familiar feel.
      </p>
    </ContainerSection>
  );
}
