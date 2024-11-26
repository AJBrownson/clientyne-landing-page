import Image from "next/image";
import { Button } from "./ui/button";
import Logo from "@/public/clientyne-logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="fixed w-full flex justify-center py-10 z-50 px-4 md:px-8">
        <nav className="flex justify-between items-center bg-[#0E0E0D] text-[#C6C6C6] h-16 px-2 w-full sm:max-w-[500px] lg:max-w-[700px] rounded-full">
          <Link href="/" className="flex items-center gap-x-2">
            <Image src={Logo} alt="Clientyne's Logo" />
            <p className="font-onest font-extrabold text-lg text-[#fff]">
              Clientyne
            </p>
          </Link>
          <ul className="hidden lg:flex justify-between gap-x-10 text-xs">
            <li className="font-onest font-medium lg:text-base hover:text-white">
              <Link href="#home">Home</Link>
            </li>
            <li className="font-onest font-medium lg:text-base hover:text-white">
              <Link href="#company">Company</Link>
            </li>
            <li className="font-onest font-medium lg:text-base hover:text-white">
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
          <Button className="bg-[#fff] text-[#3D3D3D] py-6 px-4 rounded-full font-onest font-meduim lg:text-base hover:bg-[#fff]">
            Join Waitlist
          </Button>
        </nav>
      </header>
    </>
  );
}
