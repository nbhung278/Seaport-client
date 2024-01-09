"use client";

import React from "react";
import CommonCarousel from "../carousel/CommonCarousel";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "@/graphql/actions/getCategories.ation";

const CategoryBar = () => {
  const { loading, data } = useQuery(GET_CATEGORIES);
  const categories: CategoryTypes[] = data?.getCategories?.categories || [];

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
      <CommonCarousel data={categories} />
    </div>
  );
};

export default CategoryBar;
