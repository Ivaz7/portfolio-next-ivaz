import Image from "next/image"

export default function ImgProject({
  src
}: {
  src: string
}) {
  return (
    <div className="relative w-full aspect-[20/9]">
      <Image 
        fill
        className="object-cover object-top rounded-lg"
        src={src}
        alt="Project Image"
      />
    </div>
  )
}