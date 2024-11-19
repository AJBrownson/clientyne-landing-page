"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Analytics from "@/public/icons/analytics.png";
import Marketplace from "@/public/icons/marketplace.png";
import Clients from "@/public/icons/clients.png";
import Invoice from "@/public/icons/invoice.png";

import Cube from "@/public/icons/cube.png"
import BlueCube from "@/public/icons/blue-cube.png"
import Cylinder from "@/public/icons/Cylinder.png"
import Pyramid from "@/public/icons/Pyramid.png"

export default function Cards() {
  const content = [
    {
      icon: Marketplace,
      tag: "Marketplace",
      title: "Customized store",
      text: "Clientyne’s personalized shop helps you manage your products and connect with customers your way.",
    },
    {
      icon: Clients,
      tag: "Clients",
      title: "Manage your customers",
      text: "Easily manage all your customer details in one place and build better relationships.",
    },
    {
      icon: Analytics,
      tag: "Analytics",
      title: "Clear insights for better decisions",
      text: "Gain insights into your business performance and make data-driven decisions with ease.",
    },
    {
      icon: Invoice,
      tag: "Invoice",
      title: "Easy invoicing, organized payments",
      text: "Send automatic invoices quickly, keeping your payments organized and hassle-free.",
    },
  ];
  return (
    <>
      {/* <section className="flex flex-col justify-between items-center lg:gap-x-10 md:flex-wrap"> */}
      <section className="grid grid-cols-1 grid-rows-4 gap-y-5 md:grid-cols-3 md:grid-rows-2 md:gap-x-5 lg:flex lg:flex-row lg:justify-between lg:gap-x-8">
        {/* {content.map((item, index) => (
          <Card
            key={index}
            className="bg-[#F6F7F9] flex flex-col w-full max-w-[260px] border border-[#E8E8E8]"
          >
            <CardHeader>
              <div className="flex gap-x-3">
                <Image src={item.icon} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-1 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  {item.tag}
                </p>
              </div>
            </CardHeader>
            <CardContent className="mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">{item.title}</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">{item.text}</p>
              </div>
            </CardContent>
          </Card>
        ))} */}

        <Card className="bg-[#F6F7F9] flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Marketplace} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-1 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Marketplace
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Customized <br />store</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Clientyne’s personalized shop helps you manage your products and connect with customers your way.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Clients} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-1 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Clients
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Manage your customers</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Easily manage all your customer details in one place and build better relationships.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Analytics} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-1 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Analytics
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-10">
              <div className="text-left">
                <h1 className="font-redHat text-[#3D3D3D] font-bold text-xl">Clear insights for better decisions</h1>
                <p className="text-[#666] text-xs font-onest font-medium mt-3">Gain insights into your business performance and make data-driven decisions with ease.</p>
              </div>
            </CardContent>
        </Card>

        <Card className="bg-[#F6F7F9] flex flex-col w-full md:max-w-[260px] border border-[#E8E8E8]">
          <CardHeader>
          <div className="flex gap-x-3">
                <Image src={Invoice} alt="" width={30} height={30} />
                <p className="font-onest text-xs px-1 py-[1px] flex items-center rounded-full bg-[#E6F8ED] border border-[#B0EAC7] text-[#626262]">
                  Invoice
                </p>
              </div>
          </CardHeader>
          <CardContent className="mt-10">
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
