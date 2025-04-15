'use client'

import {
  CreditCardIcon,
  UserIcon,
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
    icon: CreditCardIcon,
  }
]

export default function Navlink() {
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
              "flex flex-row gap-2 items-center p-3 rounded-lg",
              pathname === val.href 
                ? "bg-stone-900 text-red-700"
                : ""
            )}
          >
            <LinkIcon className="w-10 h-10" />
            <p className="text-3xl">
              {val.name}
            </p>
          </Link>)
      })}
    </>
  )
}