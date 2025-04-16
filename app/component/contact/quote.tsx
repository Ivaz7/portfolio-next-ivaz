'use client'

import { inter, lusitana } from "@/app/lib/font";
import { quoteData } from "@/app/lib/quoteData";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Quote() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quoteData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    const quote = `“${quoteData[index].quote}”\t- ${quoteData[index].from}`;
    navigator.clipboard.writeText(quote)
  };

  return (
    <section
      onClick={handleCopy}
      className="flex flex-col text-center bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-7 gap-5 rounded-lg cursor-pointer transition-all duration-150 ease-in-out hover:scale-102"
      title="Click to copy"
    >
      <h1 className={clsx(lusitana.className, "italic text-4xl")}>
        &ldquo;{quoteData[index].quote}&rdquo;
      </h1>
      <p className={clsx(inter.className, "text-lg self-end")}>
        - {quoteData[index].from}
      </p>
    </section>
  );
}
