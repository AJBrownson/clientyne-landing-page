import Image from "next/image";
import { Button } from "./ui/button";
import Logo from "@/public/clientyne-logo.svg";

export default function Navbar() {
  return (
    <>
      <header className="fixed w-full flex justify-center py-10 z-50">
        <nav className="flex justify-between items-center bg-[#0E0E0D] text-[#C6C6C6] h-16 px-2 w-full max-w-[700px] rounded-full">
          <div className="flex items-center gap-x-2">
            <Image src={Logo} alt="Clientyne's Logo" />
            <p className="font-onest font-extrabold text-lg text-[#fff]">
              Clientyne
            </p>
          </div>
          <ul className="flex justify-between gap-x-10 text-xs">
            <li className="font-onest font-medium lg:text-base">Home</li>
            <li className="font-onest font-medium lg:text-base">Company</li>
            <li className="font-onest font-medium lg:text-base">FAQ</li>
          </ul>
          <Button className="bg-[#fff] text-[#3D3D3D] py-6 px-4 rounded-full font-onest font-meduim lg:text-base hover:bg-[#fff]">
            Join Waitlist
          </Button>
        </nav>
      </header>
    </>
  );
}
