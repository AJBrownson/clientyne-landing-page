import Image from "next/image";
import Logo from "@/public/clientyne-logo-black.svg";
import { Button } from "./ui/button";
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs";
import Link from "next/link";


export default function Footer() {
  return (
    <main className="max-w-7xl mx-auto">
      <footer className="px-4 md:px-8 lg:px-20 pt-10 pb-6 bg-[#0E0E0D] mt-10 lg:mt-28">
        <div className="container flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col max-w-[369px]">
            <div className="flex items-center gap-x-1">
              <Image src={Logo} alt="" />
              <p className="font-redHat font-black lg:text-xl text-[#F5F5F5]">Clientyne</p>
            </div>
            <p className="font-onest font-medium text-sm text-[#C6C6C6] my-2">Clientyne is a customer management platform designed to empower small and medium businesses.</p>
            <div className="mt-8 md:mt-0">
              <Button className="font-onest font-semibold text-sm bg-[#303030] hover:bg-[#303030]">MVP Coming Soon</Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:flex md:flex-row justify-between lg:gap-x-20">
            <div>
              <p className="text-[#FFFFFF] font-onest font-semibold text-base">Company</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm my-3">About Us</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm">Contact Us</p>
            </div>

            <div className="">
              <p className="text-[#FFFFFF] font-onest font-semibold text-base">Get in Touch</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm mt-3">Clientyne@gmail.com</p>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="text-[#FFFFFF] font-onest font-semibold text-base mb-3">Connect with Us</p>

              <Link href="/" className="flex items-center gap-x-1 text-[#C6C6C6] hover:text-[#fff]">
                <BsCaretRightFill />
              <p className="font-onest font-semibold text-sm">X</p>
              </Link>
               <Link href="/" className="flex items-center gap-x-1 text-[#C6C6C6] hover:text-[#fff]">
                <BsCaretRightFill />
              <p className="font-onest font-semibold text-sm my-3">Instagram</p>
              </Link>
               <Link href="/" className="flex items-center gap-x-1 text-[#C6C6C6] hover:text-[#fff]">
                <BsCaretRightFill />
              <p className="font-onest font-semibold text-sm">Linkedin</p>
              </Link>
            </div>
          </div>
        </div>

        {/* lower footer section */}
        <div className="container flex space-x-1 border-t-[1px] border-[#2D2D2D] mt-4 lg:mt-8">
          <p className="font-onest text-xs text-[#C6C6C6] font-medium pt-2">&copy;</p>
          <p className="font-onest text-xs text-[#C6C6C6] font-medium pt-2">2024 Clientyne</p>
        </div>
      </footer>
    </main>
  );
}
