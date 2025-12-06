import { useEffect, useState } from "react";
import RestaurantsGrid from "../Components/RestaurantsGrid.jsx";

export default function Restaurant() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRestaurantData() {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1463&lng=79.0849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

        const response = await fetch(proxyUrl + swiggyAPI);
        const data = await response.json();

        const restaurantsFilter = data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurantList(restaurantsFilter);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurantData();
  }, []);

  console.log(restaurantList);

  if (loading) return <p>Loading...</p>;
  return <RestaurantsGrid data={restaurantList} />;
}