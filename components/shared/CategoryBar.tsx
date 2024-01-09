"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CommonCarousel from "../carousel/CommonCarousel";

const CategoryBar = () => {
  const listCategories = [
    {
      id: 1,
      text: "Latest Articles",
    },
    {
      id: 2,
      text: "Performance & UX",
    },
    {
      id: 3,
      text: "Tech stack",
    },
    {
      id: 4,
      text: "Developer Workflow",
    },
    {
      id: 5,
      text: "Prismic Announcements",
    },
    {
      id: 6,
      text: "Business of Web Development",
    },
  ];
  return (
    <div className="padding-content sticky top-0 flex flex-row justify-between items-center h-[100px]  border-b-[1px]  bg-bw z-[1]">
      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {listCategories.map((category) => (
            <CarouselItem
              key={category.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 text-center"
            >
              <span className="cursor-pointer">{category.text}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
      <CommonCarousel data={listCategories} />
    </div>
  );
};

export default CategoryBar;
