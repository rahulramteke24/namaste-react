import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    //first {} is telling us that style is expecting a js code inside the curly brackets
    //second {} is telling us that we are passing a js object where a piece of js code is expected.
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};
export default RestaurantCard;
