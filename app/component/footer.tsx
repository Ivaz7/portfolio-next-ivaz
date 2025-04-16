import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-row gap-2 items-center justify-center border-t border-white p-5">
      <p>
        This Portfolio Website full code is available at my 
      </p>
      <Link 
        href="https://github.com/Ivaz7/portfolio-next-ivaz"
        className="text-stone-500 hover:underline" 
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </Link>
    </footer>
  )
}