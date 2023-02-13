"use client";
import Image from "next/image";
import { useState } from "react";
import SortOption from "@/components/Sort/SortOption";
import { ISortOption } from "@/types/sortOption.type";
import { getCurrentDay } from "@/utils/getCurrentDay";

export default function Sort() {
  const [isSortingPopupDisplayed, setIsSortingPopupDisplayed] =
    useState<boolean>(false);

  const sortingItems = [
    {
      name: getCurrentDay(),
      alias: "/popular",
    },
    {
      name: "24 часа",
      alias: "/popular/day",
    },
    {
      name: "Неделя",
      alias: "/popular/week",
    },
    {
      name: "Месяц",
      alias: "/popular/month",
    },
    {
      name: "Год",
      alias: "/popular/year",
    },
    {
      name: "Все время",
      alias: "/popular/all",
    },
  ];

  return (
    <div className="sort">
      <div
        className={"sort_current"}
        onClick={() => setIsSortingPopupDisplayed((prevState) => !prevState)}
      >
        <div className={"sort_current_date"}>
          {getCurrentDay()}
          <Image
            src={"/more.svg"}
            alt={"sort"}
            width={"16"}
            height={"16"}
            className="sort_more"
          />
        </div>
      </div>

      {isSortingPopupDisplayed ? (
        <div className="sort_options">
          {sortingItems.map((item: ISortOption) => (
            <SortOption item={item} key={item.name} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
