import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    props.resData.info;
  const { slaString } = sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="food-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
