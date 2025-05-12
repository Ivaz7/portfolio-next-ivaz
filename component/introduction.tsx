import { poppins } from "@/lib/font"
import { clsx } from "clsx"
import Image from "next/image"
import Flag from 'react-world-flags'
import { MapPinIcon } from "@heroicons/react/24/outline"

export default function Introduction() {
  return (
    <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-4 sm:p-5 md:p-6 rounded-lg shadow-xl flex flex-row md:flex-col justify-center gap-4 items-center text-white">
      <div className="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px] shrink-0">
        <Image 
          src="/profile.jpg"
          alt="profile picture of Ivaz Reza"
          fill
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className="flex flex-col">
        <p className={clsx("text-base sm:text-lg md:text-xl font-bold tracking-wide text-center", poppins.className)}>
          Hi, I&apos;m M. &ldquo;Ivaz&rdquo; Reza H.
        </p>
        <p className="text-sm sm:text-base md:text-lg font-medium text-center text-zinc-300">
          I&apos;m a Web Developer
        </p>
        <div className="text-sm sm:text-base md:text-lg font-medium text-center text-zinc-300 flex flex-row gap-0.5 justify-center items-center">
          <MapPinIcon className="w-4 h-4 text-zinc-300" />
          Cirebon, Indonesia 
          <Flag 
            code="ID" 
            style={{ 
              width: '20px', 
              height: "fit-content" 
            }} 
            className="border border-zinc-300" />
        </div>
      </div>
    </div>
  )
}