import Image from "next/image"

export default function ImgProject({
  src
}: {
  src: string
}) {
  return (
    <div className="relative max-w-full max-h-[40vw] w-83 h-40 xl:w-120 xl:h-60">
      <Image 
        fill
        className="object-cover object-top rounded-lg"
        src={src}
        alt="Project Image"
      />
    </div>
  )
}