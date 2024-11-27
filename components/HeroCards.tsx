"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Analytics from "@/public/icons/analytics.png";
import Marketplace from "@/public/icons/marketplace.png";
import Clients from "@/public/icons/clients.png";
import Invoice from "@/public/icons/invoice.png";

import Cube from "@/public/icons/Cube.png"
import Icosahedron from "@/public/icons/Icosahedron.png"
import Cylinder from "@/public/icons/Cylinder.png"
import Pyramid from "@/public/icons/Pyramid.png"

export default function Cards() {
  return (
    <>
      <section className="grid grid-cols-1 grid-rows-4 gap-y-10 md:grid-cols-3 md:grid-rows-2 md:gap-x-5 lg:flex lg:flex-row lg:justify-between lg:gap-x-8">

        <Card className="bg-[#F6F7F9] relative flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <Image src={Pyramid} alt="" className="w-10 h-10 absolute left-2 animate-wiggle -top-7" />
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Marketplace} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-2 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Marketplace
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-5 md:mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Customized <br />store</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Clientyne’s personalized shop helps you manage your products and connect with customers your way.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] relative flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
        <Image src={Icosahedron} alt="" className="w-10 h-10 absolute left-2 animate-wiggle -top-7" />
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Clients} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-2 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Clients
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-5 md:mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Manage your customers</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Easily manage all your customer details in one place and build better relationships.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] relative flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
        <Image src={Cube} alt="" className="w-10 h-10 absolute left-2 animate-wiggle -top-7" />
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Analytics} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-2 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Analytics
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-5 md:mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Clear insights for better decisions</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Gain insights into your business performance and make data-driven decisions with ease.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] relative flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <Image src={Cylinder} alt="" className="w-10 h-10 absolute left-2 animate-wiggle -top-7 " />
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Invoice} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-2 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Invoice
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-5 md:mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Easy invoicing, organized payments</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Send automatic invoices quickly, keeping your payments organized and hassle-free.</p>
              </div>
            </CardContent>
        </Card>
      </section>
    </>
  );
}
