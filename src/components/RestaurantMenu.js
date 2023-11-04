import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId)

  console.log("resInfo:",resInfo)
  if (resInfo === null || undefined) {
    return <Shimmer />;
  }

  const { name } = resInfo?.cards[0].card?.card?.info;

  //console.log("resinfo", resInfo?.cards[0].card.card.info.name);

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("itemCards", itemCards);
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        Menu
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}
              {" -"}
              {item?.card?.info?.price / 100}
              {" Rs"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
