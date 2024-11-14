import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/public/hero.png";
import Avatar1 from "@/public/avatar1.png"
import Avatar2 from "@/public/avatar2.png"
import Avatar3 from "@/public/avatar3.png"
import ArrowRight from "@/public/icons/circle-arrow-right-01.png";
import Oval from "@/public/icons/oval.png"
import Cards from "@/components/HeroCards";

export default function Home() {
  return (
    <>
      {/* hero section */}
      <section className="pt-32 md:pt-36 lg:pt-44">
        <div className="container flex flex-col px-4 md:px-8 lg:px-40">
          <div className="mx-auto max-w-[864px] justify-center text-center">
            <h1 className="font-redHat text-[#3D3D3D] text-2xl lg:text-[42px] font-black tracking-wide lg:leading-[60px]">
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
              <Button className="flex items-center justify-center bg-[#008080] py-6 px-4 rounded-full">
                Book a demo{" "}
                <span>
                  <Image src={ArrowRight} alt="" />
                </span>
              </Button>
            </div>
          </div>
          <div className="mt-5 md:mt-8 lg:mt-10 flex justify-center relative -z-30">
          <Image src="/icons/oval.png" alt="" width={119.7} height={119.7} />
          {/* </div> */}

            <Image src={Hero} alt="Hero image of Clientyne dashboard" className="hidden md:block md:top-14 absolute" />
          </div>
        </div>
      </section>

      <section className="pt-80 lg:pt-[30rem]">
        <div className="container flex flex-col items-center justify-center px-4 md:px-8 lg:px-20">
          <div className="relative flex justify-evenly items-center w-full max-w-[451px] py-4 text-[#F5F5F5] px-2 rounded-full bg-[#0E0E0D]">
            <div className="flex w-full max-w-[88px] -mt-10">
              <Image src={Avatar1} alt="" className="w-5 h-5 lg:w-10 lg:h-10 object-contain absolute left-5" />
              <Image src={Avatar2} alt="" className="w-6 h-6 lg:w-12 lg:h-12 object-contain absolute left-10" />
              <Image src={Avatar3} alt="" className="w-6 h-6 lg:w-12 lg:h-12 object-contain absolute left-[3.8rem]" />
            </div>

        <div className="text-sm text-center font-medium font-onest">
          Ready to onboard{" "}
          <span className="font-semibold text-[#FFF]">10,000+</span> businesses
        </div>
        </div>

        <div className="max-w-[766px] mx-auto text-center">
        <div className="mt-20 flex flex-col justify-center items-center">
          <h1 className="text-[#3D3D3D] font-redHat font-black text-2xl lg:text-4xl lg:leading-snug max-w-[500px]">
            Smart solutions for your{" "}
            <span className="text-[#626262]">
              business growth
            </span>
          </h1>
          <p className="mt-5 md:mt-6 text-sm font-onest text-[#626262] leading-[20.4px] max-w-[590px]">
            {" "}
            we’re dedicated to providing powerful tools tailored to small and
            medium businesses. Our team works hard to give you easy, effective
            tools designed to help your business grow.
          </p>
        </div>
        </div>
        <div className="mt-10 w-full">
          <Cards />
        </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-20 flex flex-col lg:flex-row justify-between items-center">
        <div className="container px-4 md:px-8 lg:px-20">
          <h1 className="font-redHat lg:text-4xl leading-relaxed mb-5">
            <span className="text-[#626262]">Clientyne:</span> Built for your business growth
          </h1>
          <p className="text-[#626262] font-onest lg:text-base mt-3">
            Clientyne is a customer management platform designed to empower
            small and medium businesses. We offer intuitive tools to streamline
            customer interactions, gain insights, and manage essential business
            tasks like invoicing and analytics.
          </p>
          <p className="text-[#3D3D3D] font-onest lg:text-base mt-3">
            Our mission is to simplify business management for small and medium
            businesses, helping them grow through efficient, user-friendly
            tools.
          </p>
          <p className="text-[#626262] font-onest lg:text-base mt-3">
            Our vision is to become the go-to platform for businesses worldwide,
            transforming customer management into a seamless and empowering
            experience.
          </p>
        </div>
      </section>

      <section className="mt-10 md:mt-20 lg:mt-40">
        <div className="container px-4 md:px-8 lg:px-28">
          <div className="py-10 px-8 lg:py-20 text-center bg-[#333333] text-[#FFF] rounded-xl max-w-[1036px]">
            <h1 className="font-redHat text-xl font-extrabold lg:text-4xl mb-5">Join us early and grow your business</h1>
            <p className="font-onest font-medium text-base lg:text-[18px] max-w-[699px] mx-auto">Clientyne is launching soon, and we're welcoming 10,000+ businesses in our first stage. Join us early and let’s grow together!</p>
            <div className="mt-6 lg:mt-11 flex justify-center">
              <Button className="flex items-center justify-center bg-[#008080] py-6 px-4 rounded-full">
                Book a demo{" "}
                <span>
                  <Image src={ArrowRight} alt="" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 md:mt-20 lg:mt-40">
        <div className="container">
          <h1>Frequently asked Questions</h1>
        </div>
      </section>
    </>
  );
}
