import { dmsans } from "../lib/font"
import { clsx } from "clsx"
import Introduction from "./introduction"
import Navlink from "./nav-link"

export default function Sidenav() {
  return (
    <nav className={clsx("flex h-full flex-col gap-3 px-4 py-4 md:px-3", dmsans.className)}>
      <Introduction />
      <Navlink />
    </nav>
  )
}
