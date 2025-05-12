import { lusitana, inter } from "@/lib/font";
import clsx from "clsx";

export default function ContainerSection({
  title,
  children,
}: {
  title: string,
  children: React.ReactNode,
}) {
  return (
    <section className={clsx("flex flex-col gap-2 bg-stone-900 md:p-5 sm:p-4 p-3 rounded-lg", inter.className)}>
      <h1 className={clsx("text-lg sm:text-xl md:text-2xl font-bold", lusitana.className)}>
        {title}
      </h1>

      {children}
    </section>
  )
}