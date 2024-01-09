"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface dataType {
  id: string | number;
  text: string;
}

interface propsType {
  data: dataType[];
}

const CommonCarousel = (props: propsType) => {
  const { data } = props;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((el, index) => (
          <CarouselItem
            key={el?.id || index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 text-center"
          >
            <span className="cursor-pointer">{el.text}</span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CommonCarousel;
