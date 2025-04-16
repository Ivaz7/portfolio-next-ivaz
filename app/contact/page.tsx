import type { Metadata } from "next";
import ContacMain from "../component/contact/contactMain";
import Quote from "../component/contact/quote";

export const metadata: Metadata = {
  title: "Contact | Ivaz Reza",
};

export default function Contact() {
  return(
    <div className="min-h-screen px-4 py-4.5 md:px-3 flex flex-col items-center justify-center gap-4 mb-10">
      <ContacMain />
      <Quote />
    </div>
  )
}