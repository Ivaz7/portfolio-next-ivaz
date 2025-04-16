import { certificationData } from "@/app/lib/certificationData";
import ContainerSection from "./containerSection";
import type { Certification } from "@/app/lib/definition";
import Link from "next/link";
import Image from "next/image";

export default function Certification() {
  return (
    <ContainerSection title="Certification">
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 items-center justify-center">
        {certificationData.map((val: Certification, inx: number) => {
          const { link, img } = val;
          return (
            <Link 
              key={inx}
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="hover:scale-102 duration-150 ease-in-out"
            > 
              <Image 
                width={400}
                height={250}
                alt="Certification Image and Link preview"
                src={img}
              />
            </Link>
          )
        })}
      </div>
    </ContainerSection>
  )
}