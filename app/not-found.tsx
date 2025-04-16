import {
  FaceFrownIcon
} from "@heroicons/react/24/outline"
import clsx from "clsx"
import { dmsans } from "./lib/font"
import Navlink from "./component/nav-link"

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <FaceFrownIcon 
        className="shrink-0 w-30 h-30"
      />
      <h1 className={clsx("text-center font-medium text-xl", dmsans.className)}>
        Cannot found your Page
      </h1>
      <nav className="flex flex-row">
        <Navlink title={false} />
      </nav>
    </div>
  )
}