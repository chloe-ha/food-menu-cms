import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { getPageData } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import React from "react"

export default async function Page() {
  const { general, menus } = await getPageData()

  return (
    <main>
      {general.images?.length ? (
        <Carousel className="w-full grid" opts={{ loop: true }}>
          <CarouselContent>
            {general.images.map((image, index) => (
              <CarouselItem key={index} className="">
                <div key={image} className={cn("relative h-[150px]")}>
                  <Image src={image} alt="banner image" fill className="object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ): null}
      <div className="flex flex-col gap-4 max-w-7xl mx-auto p-2">
        {general.name ? <h1 className="text-3xl sm:text-5xl font-bold">{general.name}</h1>: null}
        {general.description ? <p>{general.description}</p>: null}
        {general.address ? <span className="flex gap-1 items-center"><MapPin size={18} />{general.address}</span>: null}
        {general.phoneNumber ? <a className="flex gap-1 items-center" href={`tel:${general.phoneNumber}`}><Phone size={18} />{general.phoneNumber}</a>: null}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="justify-start items-center py-0 gap-1"><Clock size={18} />Horaires d&apos;ouverture</AccordionTrigger>
            <AccordionContent className="flex flex-wrap p-2">
              {general.openingHours.map(({ day, open, windows }) => {
                const label = open && windows.length ? `${windows.map(({ from, to }) => from + ' à ' + to).join(', ')}`: open && !windows.length ? 'Ouvert': 'Fermé';
                return (
                  <React.Fragment key={day}>
                    <div className="w-[125px]">{day}</div>
                    <div className="basis-[calc(100%-125px)]">{label}</div>
                  </React.Fragment>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  )
}