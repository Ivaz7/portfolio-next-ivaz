import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from "clsx";
import { inter } from "@/lib/font";

export default function SourceCodeLinkBtn({
  href
}: {
  href: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-stone-800 transition-all duration-150 ease-in-out hover:bg-stone-700 p-2 flex flex-row gap-1 rounded-sm self-start"
    >
      <FontAwesomeIcon icon={["fab", "github"]} className="text-2xl shrink-0"/>
      <p className={clsx(inter.className)}>
        Preview Code
      </p>
    </Link>
  )
}