'use client'

import {
  WindowIcon,
  UserIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import clsx from "clsx";
import Link from "next/link"
import { usePathname } from "next/navigation";

const link = [
  {
    name: "About",
    href: "/",
    icon: UserIcon,
  },
  {
    name: "Project",
    href: "/project",
    icon: WindowIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  }
]

export default function Navlink({
  title
}: {
  title: boolean
}) {
  const pathname = usePathname();

  return (
    <>
      {link.map((val, inx) => {
        const LinkIcon = val.icon;
        return (
          <Link 
            key={inx}
            href={val.href}
            className={clsx(
              "flex grow-1 flex-row gap-2 justify-center md:justify-start items-center p-3 rounded-lg hover:bg-stone-800 sm:hover:bg-stone-900 hover:text-red-700",
              title 
                ? "hover:bg-stone-800"
                : "hover:bg-stone-900",
              pathname === val.href 
                ? "sm:bg-stone-900 text-red-700 bg-stone-800"
                : title
                  ? "sm:bg-transparent bg-stone-900"
                  : "bg-transparent"
            )}
          >
            <LinkIcon className="w-10 h-10" />
            {title && 
              <p className="text-3xl hidden sm:block">
                {val.name}
              </p>
            }
          </Link>)
      })}
    </>
  )
}