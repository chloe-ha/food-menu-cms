import MaxWidthContainer from "@shared/components/MaxWidthContainer"
import ScrollSpyNav from "@shared/components/ScrollSpyNav"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shared/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem } from "@shared/components/ui/carousel"
import { getPageData } from "@shared/lib/data"
import { cn, formatPrice } from "@shared/lib/utils"
import { Clock, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import React from "react"

export default async function Page() {
  const { general, menus } = await getPageData()

  return (
    <main>
      {/* Banner */}
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
      {/* General information */}
      <MaxWidthContainer>
        <div className="flex flex-col gap-4">
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
      </MaxWidthContainer>
      {/* Menu */}
      <div className="sticky top-0 z-1000 bg-primary-foreground">
        <ScrollSpyNav
          activeClass="text-red-500"
          offsetTop={80}
          rootMargin="-60px 0px 0px 0px"
        >
          <MaxWidthContainer>
            <nav className="overflow-x-auto">
              <ul className="flex items-center">
                <li>
                  <h2 className="text-xl sm:text-2xl font-bold pr-4">Menu</h2>
                </li>
                {menus.map((item) => (
                  <li key={item.uriFragment}className="flex">
                    <a
                      href={`#${item.uriFragment}`}
                      className="p-4 hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </MaxWidthContainer>
        </ScrollSpyNav>
      </div>
      <MaxWidthContainer>
        <div className="flex flex-col gap-6">
          {menus.map(({ uriFragment, name, items }) => (
            <section key={name} id={uriFragment} className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">{name}</h3>
              <ul className="flex flex-col gap-2">
                {items.map((item, index) => (
                  <li key={item.name + index}>
                    <div>{item.name}</div>
                    <div>{formatPrice(item.price)}</div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </MaxWidthContainer>
    </main>
  )
}