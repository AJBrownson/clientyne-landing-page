import Image from "next/image";
import Logo from "@/public/clientyne-logo-black.svg";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <>
      <footer className="px-4 md:px-8 lg:px-20 pt-10 pb-6 bg-[#0E0E0D] mt-10 lg:mt-28">
        <div className="container flex items-center justify-between">
          <div className="flex flex-col max-w-[369px]">
            <div className="flex items-center gap-x-1">
              <Image src={Logo} alt="" />
              <p className="font-redHat font-black lg:text-xl text-[#F5F5F5]">Clientyne</p>
            </div>
            <p className="font-onest font-medium text-sm text-[#C6C6C6] my-2">Clientyne is a customer management platform designed to empower small and medium businesses.</p>
            <div>
              <Button className="font-onest font-semibold text-sm bg-[#303030] hover:bg-[#303030]">MVP Coming Soon</Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between lg:gap-x-20">
            <div>
              <p className="text-[#FFFFFF] font-onest font-semibold text-base">Company</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm my-3">About Us</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm">Contact Us</p>
            </div>

            <div>
              <p className="text-[#FFFFFF] font-onest font-semibold text-base">Get in Touch</p>
              <p className="font-onest font-medium text-[#C6C6C6] text-sm my-3">Clientyne@gmail.com</p>
            </div>

            <div>
              <p className="text-[#FFFFFF] font-onest font-semibold text-base">Connect with Us</p>
              <p className="font-onest font-semibold text-[#C6C6C6] text-sm mt-3">X</p>
              <p className="font-onest font-semibold text-[#C6C6C6] text-sm my-3">Instagram</p>
              <p className="font-onest font-semibold text-[#C6C6C6] text-sm">Linkedin</p>
            </div>
          </div>
        </div>

        <div className="container flex space-x-1 border-t-[1px] border-[#2D2D2D] mt-4 lg:mt-8">
          <p className="font-onest text-xs text-[#C6C6C6] font-medium pt-2">&copy;</p>
          <p className="font-onest text-xs text-[#C6C6C6] font-medium pt-2">2024 Clientyne</p>
        </div>
      </footer>
    </>
  );
}
