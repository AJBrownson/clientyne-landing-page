import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/public/hero.png";
import Gradient from "@/public/gradient-bg.svg";
import About from "@/public/about-image.png";
import PillIcon from "@/public/icons/Pill 1.png";
import ArrowRight from "@/public/icons/circle-arrow-right-01.png";
import ArrowRightGreen from "@/public/icons/circle-arrow-right-green.png";
import Img from "@/public/icons/img.png";
import Star from "@/public/icons/Star.png";
import Cards from "@/components/HeroCards";
import FAQs from "@/components/FAQs";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* hero section */}
       <section className="pt-32 md:pt-36 lg:pt-44" id="home">
        <div className="container flex flex-col px-4 md:px-8 lg:px-40">
          <div className="mx-auto max-w-[864px] justify-center text-center">
            <h1 className="font-redHat text-[#3D3D3D] text-2xl md:text-4xl lg:text-[42px] font-black tracking-wide lg:leading-[60px]">
              Simplify Customer Management and{" "}
              <span className="text-[#FF8749] lg:leading-[63.5px]">
                Boost Growth
              </span>
            </h1>
            <p className="mt-5 font-onest text-[#626262] font-medium lg:text-base leading-[22.95px] max-w-[650px] mx-auto">
              Manage your customers easily with our simple tools. Gain valuable
              insights to help your business grow. Simplify your processes and
              focus on what matters most.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="font-onest font-medium lg:text-base flex items-center justify-center bg-[#008080] py-6 px-4 rounded-full hover:bg-[#008080]">
                Join Waitlist{" "}
                <span>
                  <Image src={ArrowRightGreen} alt="" className="w-5 h-5" />
                </span>
              </Button>
            </div>
          </div>

          <div className="mt-5 md:mt-8 lg:mt-10 flex justify-center">
             {/* <Image src="/icons/oval.png" alt="" width={119.7} height={119.7} /> */}
            <Image
              src={Hero}
              alt="Hero image of Clientyne dashboard"
              className=""
            />
          </div>
        </div>
      </section> 

      {/* onboarding businesses section */}
       <section className="pt-40 md:pt-[21rem] lg:pt-[30rem]">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-20">
          <div className="max-w-[570px]">
            <h1 className="font-redHat font-extrabold text-xl lg:text-[32px] text-[#626262] max-w-[405px] leading-tight mb-4">
              Ready to onboard{" "}
              <span className="text-[#3D3D3D]">10,000+ businesses</span>
            </h1>
            <p className="font-onest font-medium text-[#626262] lg:text-base mb-3">
              Clientyne is ready to onboard 10,000+ businesses. Streamline
              customer management, analytics, and checkouts with AI-driven
              insights.
            </p>
            <p className="font-onest font-semibold text-[#626262] lg:text-base">
              Transform your business with Clientyne.
            </p>
          </div>

          <div className="hidden lg:block">
            <Image src={PillIcon} alt="" className="lg:w-14 lg:h-14 " />
          </div>

          <div className="flex gap-5 mt-8 lg:mt-0">
            <Card className="bg-[#333333] w-full max-w-[216px] lg:h-[194px]">
              <CardHeader className="font-redHat text-[#fff] text-[32px]">
                5k
              </CardHeader>
              <CardContent className="font-onest font-medium text-sm text-[#C6C6C6] w-full mx-auto max-w-[184px]">
                Active businesses ready to onboard Clientyne!
              </CardContent>
            </Card>
            <Card className="bg-[#F9F9F9] w-full max-w-[216px] lg:h-[194px]">
              <CardHeader className="font-redHat text-[#3D3D3D] text-[32px]">
                4.9
              </CardHeader>
              <CardContent className="font-onest font-medium text-sm text-[#A5A5A5]">
                <div className="flex justify-between items-center mb-3">
                  <Image src={Star} alt="" className="w-5 h-5" />
                  <Image src={Star} alt="" className="w-5 h-5" />
                  <Image src={Star} alt="" className="w-5 h-5" />
                  <Image src={Star} alt="" className="w-5 h-5" />
                  <Image src={Star} alt="" className="w-5 h-5" />
                </div>
                Rating processing...
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* features section  */}
      <section className="mt-20 lg:mt-20">
        <div className="container flex flex-col items-center justify-center px-4 md:px-8 lg:px-20">
          <div className="max-w-[766px] mx-auto text-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#3D3D3D] font-redHat font-black text-2xl lg:text-4xl lg:leading-snug max-w-[500px]">
                Smart solutions for your{" "}
                <span className="text-[#626262]">business growth</span>
              </h1>
              <p className="mt-5 md:mt-6 text-sm font-onest text-[#626262] leading-[20.4px] max-w-[590px]">
                {" "}
                We’re dedicated to providing powerful tools tailored to small
                and medium businesses. Our team works hard to give you easy,
                effective tools designed to help your business grow.
              </p>
            </div>
          </div>
          <div className="mt-10 w-full">
            <Cards />
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="mt-20 lg:mt-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="container flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-20">
          <div className="flex flex-col order-last lg:order-first w-full lg:max-w-[520px]">
            <h1 className="font-redHat font-black text-2xl lg:text-4xl leading-relaxed mt-3 mb-2 lg:mb-5">
              <span className="text-[#626262]">Clientyne:</span> Built for your
              business growth
            </h1>
            <p className="text-[#626262] font-onest font-medium lg:text-base mt-3">
              Clientyne is a customer management platform designed to empower
              small and medium businesses. We offer intuitive tools to
              streamline customer interactions, gain insights, and manage
              essential business tasks like invoicing and analytics.
            </p>
            <p className="text-[#3D3D3D] font-onest font-medium lg:text-base mt-3">
              Our mission is to simplify business management for small and
              medium businesses, helping them grow through efficient,
              user-friendly tools.
            </p>
            <p className="text-[#626262] font-onest font-medium lg:text-base mt-3">
              Our vision is to become the go-to platform for businesses
              worldwide, transforming customer management into a seamless and
              empowering experience.
            </p>
          </div>
          <Image
            src={About}
            alt=""
            className="lg:w-[528px] lg:h-[440px] object-contain"
          />
        </div>
      </section>

      {/* call to action card section */}
      <section className="mt-10 md:mt-20 lg:mt-40">
        <div className="container px-4 md:px-8 lg:px-28">
          <div className="py-10 px-8 lg:py-20 text-center relative bg-[#333333] text-[#FFF] rounded-xl max-w-[1036px]">
            <h1 className="font-redHat text-xl font-extrabold lg:text-4xl mb-5">
              Join us early and grow your business
            </h1>
            <p className="font-onest font-medium text-base lg:text-[18px] max-w-[699px] mx-auto">
              Clientyne is launching soon, and we're welcoming 10,000+
              businesses in our first stage. Join us early and let’s grow
              together!
            </p>
            <div className="mt-6 mb-5 lg:mt-11 flex justify-center">
              <Button className="font-onest font-medium lg:text-base flex items-center justify-center bg-[#FFF] text-[#3D3D3D] hover:bg-[#FFF] py-6 px-4 rounded-full">
                Join Waitlist{" "}
                <span>
                  <Image src={ArrowRight} alt="" className="w-5 h-5" />
                </span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Image src={Img} alt="" className="w-[180px] absolute bottom-0" />
            </div>
          </div>
        </div>
      </section>

      {/* faqs section  */}
      <section className="mt-20 lg:mt-40" id="faq">
        <div className="container flex flex-col lg:flex-row justify-between px-4 md:px-8 lg:px-20">
          <h1 className="font-redHat font-black text-2xl text-center lg:text-left mb-4 lg:text-4xl">
            Frequently asked Questions
          </h1>
          <FAQs />
        </div>
      </section>
    </>
  );
}
