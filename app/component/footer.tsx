import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full justify-center border-t border-white p-5">
      <p className="text-center">
        My Portfolio Website full code is available at my&nbsp; 
        <Link 
          href="https://github.com/Ivaz7/portfolio-next-ivaz"
          className="text-stone-500 hover:underline" 
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </Link>
      </p>
    </footer>
  )
}