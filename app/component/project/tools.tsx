import { dmsans } from "@/app/lib/font";
import { searchTectData } from "@/app/lib/utils"
import clsx from "clsx";
import Image from "next/image";

export default function Tools({
  mostUsed,
  allTools,
}: {
  mostUsed: string[],
  allTools?: string[],
}) {
  return (
    <section className="flex flex-col xl:flex-row justify-between items-baseline xl:items-center">
      <div>
        <p className={clsx(dmsans.className)}>
          Main
        </p>
        <div className="flex flex-row justify-center flex-wrap gap-1">
          {mostUsed.map((val:string, inx:number) => {
            const dataMost = searchTectData(val);
            if (!dataMost) return null;

            const { img, bgColor } = dataMost;
            return (
              <div 
                key={inx}
                className={clsx("relative h-10 rounded-sm", val === "Pokemon API" ? "w-20" : "w-10")}
                style={{
                  backgroundColor: bgColor,
                }}
              >
                <Image 
                 alt="Logo Image"
                 fill
                 className="p-1 object-contain"
                 src={img}
                />
              </div>
            )
          })}
        </div>
      </div>
      {allTools && 
        <div>
          <p className={clsx(dmsans.className)}>
            Other
          </p>
          <div className="flex flex-row flex-wrap gap-1">
            {allTools.map((val:string, inx:number) => {
              const dataMost = searchTectData(val);
              if (!dataMost) return null;

              const { img, bgColor } = dataMost;
              return (
                <div 
                  key={inx}
                  className="relative w-10 h-10 rounded-sm"
                  style={{
                    backgroundColor: bgColor,
                  }}
                >
                  <Image 
                  alt="Logo Image"
                  fill
                  className="p-1"
                  src={img}
                  />
                </div>
              )
            })}
          </div>
        </div>
      }
    </section>
  )
}