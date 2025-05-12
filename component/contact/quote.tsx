'use client'

import { inter, lusitana } from "@/lib/font";
import { quoteData } from "@/lib/quoteData";
import clsx from "clsx";
import { useEffect } from "react";
import { useQuoteStore } from "@/lib/useQuoteStore";

export default function Quote() {
  const index = useQuoteStore((state) => state.index);
  const setIndex = useQuoteStore((state) => state.setIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % quoteData.length;
      setIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [setIndex, index]);

  const handleCopy = () => {
    const quote = `“${quoteData[index].quote}”\t- ${quoteData[index].from}`;
    navigator.clipboard.writeText(quote);
  };

  return (
    <section
      onClick={handleCopy}
      className="flex flex-col text-center bg-gradient-to-br from-red-900 via-red-800 to-red-700 p-7 gap-5 rounded-lg cursor-pointer transition-all duration-150 ease-in-out hover:scale-102"
      title="Click to copy"
    >
      <h1 className={clsx(lusitana.className, "italic text-2xl sm:text-3xl md:text-4xl")}>
        &ldquo;{quoteData[index].quote}&rdquo;
      </h1>
      <p className={clsx(inter.className, "text-xs sm:text-base md:text-lg self-end")}>
        - {quoteData[index].from}
      </p>
    </section>
  );
}
