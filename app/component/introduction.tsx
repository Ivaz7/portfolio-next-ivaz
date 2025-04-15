import { poppins } from "../lib/font"
import { clsx } from "clsx"
import Image from "next/image"
import Flag from 'react-world-flags'
import { MapPinIcon } from "@heroicons/react/24/outline"

export default function Introduction() {
  return (
    <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-6 rounded-lg shadow-xl flex flex-col gap-4 items-center text-white">
      <Image 
        src="/profile.jpg"
        alt="profile picture of Ivaz Reza"
        width={100}
        height={100}
        className="rounded-full border-4 border-white shadow-md"
      />
      <div className="flex flex-col">
        <p className={clsx("text-xl font-bold tracking-wide text-center", poppins.className)}>
          Hi, I&apos;m M. Ivaz Reza H.
        </p>
        <p className="text-md font-medium text-center text-zinc-300">
          I&apos;m Front End Web Dev
        </p>
        <p className="text-md font-medium text-zinc-300 flex flex-row gap-0.5 justify-center items-center">
          <MapPinIcon className="w-4 h-4 text-zinc-300" />
          Cirebon, Indonesia 
          <Flag 
            code="ID" 
            style={{ 
              width: '20px', 
              height: "fit-content" 
            }} 
            className="border border-zinc-300" />
        </p>
      </div>
    </div>
  )
}