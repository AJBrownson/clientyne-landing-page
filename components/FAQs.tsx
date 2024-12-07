import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[650px] flex flex-col gap-y-4"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="font-onest font-medium lg:text-base text-[#626262] bg-[#F9F9F9] px-5 rounded-xl hover:no-underline">
            What is Clientyne?
          </AccordionTrigger>
          <AccordionContent className="font-onest text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10 rounded-xl">
            Clientyne is a customer management system designed for small and
            medium businesses to simplify customer interactions, track sales,
            manage invoices, and access insightful analytics. All in one
            platform.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="font-onest font-medium lg:text-base text-[#626262] bg-[#F9F9F9] px-5 rounded-xl hover:no-underline">
            Who is Clientyne for?
          </AccordionTrigger>
          <AccordionContent className="font-onest text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10 rounded-xl">
            Clientyne is built specifically for small and medium businesses that
            want to improve their customer management processes, streamline
            operations, and boost growth without the complexity of larger
            systems.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="font-onest font-medium lg:text-base text-[#626262] bg-[#F9F9F9] px-5 rounded-xl hover:no-underline">
            When will Clientyne be available?
          </AccordionTrigger>
          <AccordionContent className="font-onest text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10 rounded-xl">
            Clientyne is launching its first version soon. We’re excited to
            welcome 10,000+ businesses in our initial phase, so join early and
            experience the benefits firsthand.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className="font-onest font-medium lg:text-base text-[#626262] bg-[#F9F9F9] text-left px-5 rounded-xl hover:no-underline">
            What features will be included in the first version?
          </AccordionTrigger>
          <AccordionContent className="font-onest text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10 rounded-xl">
            The initial launch of Clientyne includes core features like customer
            management, automated invoicing, data analytics, and a personalized
            shop for showcasing products or services.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-none">
          <AccordionTrigger className="font-onest font-medium lg:text-base text-[#626262] bg-[#F9F9F9] px-5 rounded-xl hover:no-underline">
            How can I join the initial launch?
          </AccordionTrigger>
          <AccordionContent className="font-onest text-base lg:text-sm text-[#626262] bg-[#F9F9F9] pl-5 pr-10 rounded-xl">
            To be part of the initial launch, simply click on the ‘demo’ button
            on our landing page and fill in the google form with your details.
            We’ll notify you with instructions on how to get started when we go
            live.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
