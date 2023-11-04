import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../utils/constant";

const useRestaurantList = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
    const results = await fetch(RESTAURANT_LIST_API);
    const json = await results.json();
    //optionalChaining
    setListofRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    // setFilterListofRestaurants(
    //   json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  return listOfRestaurants;
};

export default useRestaurantList;
