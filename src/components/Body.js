import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filterlistOfRestaurants, setFilterListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
    const results = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=18.5904779&lng=73.7271909#"
    );
    const json = await results.json();
    console.log(json);
    //optionalChaining
    setListofRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilterListofRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  return listOfRestaurants === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(text) => {
              setSearchText(text.target.value);
            }}
          ></input>
          <button
            className="search-button"
            onClick={() => {
              const filterlist = listOfRestaurants.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText?.toLowerCase())
              );
              setFilterListofRestaurants(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log(filteredList);
            setFilterListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterlistOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
