import { lusitana, poppins } from "@/app/lib/font";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import BtnContactClient from "./btnContactClient";

interface BtnContact {
  name: string,
  link: string,
  icon: [IconPrefix, IconName]
}

const btnContact: BtnContact[] = [
  {
    name: "Github",
    link: "https://github.com/Ivaz7",
    icon: ["fab", "github"]
  },
  {
    name: "Gmail",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=ivazreza@gmail.com",
    icon: ["far", "envelope"]
  },
]

export default function ContacMain() {
  return (
    <section className="flex flex-col w-fit gap-3 p-3 bg-stone-900 rounded-lg">
      <h1 className={clsx(lusitana.className, "text-2xl")}>
        Contact
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {btnContact.map((val: BtnContact, inx: number) => {
          const { name, link, icon } = val;

          return (
            <Link 
              key={inx}
              href={link}
              target="_blank"
              rel="noopening noreferrer"
              className="p-3 bg-stone-800 rounded-md flex flex-row items-center justify-center gap-1 transition-all duration-150 ease-in-out hover:bg-stone-700"
            >
              <FontAwesomeIcon icon={icon}/>
              <p className={clsx(poppins.className)}>
                {name}
              </p>
            </Link>
          )
        })}
        <BtnContactClient />
      </div>
    </section>
  )
}