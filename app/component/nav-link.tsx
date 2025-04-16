'use client'

import {
  CreditCardIcon,
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
    icon: CreditCardIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: PhoneIcon,
  }
]

export default function Navlink() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row sm:flex-col gap-3">
      {link.map((val, inx) => {
        const LinkIcon = val.icon;
        return (
          <Link 
            key={inx}
            href={val.href}
            className={clsx(
              "flex grow-1 flex-row gap-2 justify-center md:justify-start items-center p-3 rounded-lg hover:bg-stone-900 hover:text-red-700",
              pathname === val.href 
                ? "bg-stone-900 text-red-700"
                : ""
            )}
          >
            <LinkIcon className="w-10 h-10" />
            <p className="text-3xl hidden sm:block">
              {val.name}
            </p>
          </Link>)
      })}
    </nav>
  )
}