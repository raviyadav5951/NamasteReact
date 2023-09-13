import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Params, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const results = await fetch(MENU_API + resId);
    const json = await results?.json();
    //console.log(json);
    setResInfo(json?.data);
    // setResInfo(json?.data?.cards[0]?.card?.card?.info)
  };

  if (resInfo === null || undefined) {
    return <Shimmer />;
  }

  const { name } = resInfo?.cards[0].card?.card?.info;

  //console.log("resinfo", resInfo?.cards[0].card.card.info.name);

  const { itemCards } =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
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
