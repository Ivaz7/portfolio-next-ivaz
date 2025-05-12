import { techData } from "@/lib/techData";
import ContainerSection from "./containerSection";
import Image from "next/image";
import clsx from "clsx";
import { poppins } from "@/lib/font";
import type { Technology } from "@/lib/definition";

export default function Skill() {
  return (
    <ContainerSection title="Skills">
      <div className="flex flex-wrap gap-2 justify-center items-center rounded-md">
        {techData.map((val: Technology, inx: number) => {
          if (inx > 20) return null;
          const { name, img, bgColor, bdrColor } = val;
          return (
            <div 
              key={inx}
              style={{
                backgroundColor: bgColor,
                borderColor: bdrColor,
              }}
              className="border rounded-md w-20 sm:w-25 md:w-30 h-20 sm:h-25 md:h-30 flex flex-col items-center p-3"
            > 
              <div className="relative my-auto h-7 sm:h-10 md:h-15 w-7 sm:w-10 md:w-15 flex justify-center items-center">
                <Image 
                  fill
                  className="object-contain"
                  alt={`logo tech of ${name}`}
                  src={img}
                />
              </div>
              <p className={clsx("text-center text-xs sm:text-sm md:text-base", poppins.className)}>
                {name}
              </p>
            </div>
          )
        })}
      </div>
    </ContainerSection>
  )
}