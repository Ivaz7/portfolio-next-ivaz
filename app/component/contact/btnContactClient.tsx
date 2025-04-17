'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { CheckIcon } from '@heroicons/react/24/solid';
import clsx from "clsx";
import { poppins } from "@/app/lib/font";

export default function BtnContactClient() {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement('a');
    link.href = '/IvazRezaCV.pdf'; 
    link.download = 'IvazRezaCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ivazreza@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button 
        onClick={handleDownload}
        className="cursor-pointer p-3 bg-stone-800 rounded-md flex flex-row items-center justify-center gap-1 transition-all duration-150 ease-in-out hover:bg-stone-700"
      >
        {downloaded ? (
          <CheckIcon className="w-4 h-4 text-green-400" />
        ) : (
          <FontAwesomeIcon icon={faFile} />
        )}
        <p className={clsx(poppins.className)}>
          {downloaded ? 'Downloaded' : 'Download CV'}
        </p>
      </button>

      <button 
        onClick={handleCopyEmail}
        className="cursor-pointer p-3 bg-stone-800 rounded-md flex flex-row items-center justify-center gap-1 transition-all duration-150 ease-in-out hover:bg-stone-700"
      >
        {copied ? (
          <CheckIcon className="w-4 h-4 text-green-400" />
        ) : (
          <FontAwesomeIcon icon={faFile} />
        )}
        <p className={clsx(poppins.className)}>
          {copied ? 'Copied' : 'Copy Email'}
        </p>
      </button>
    </>
  )
}
