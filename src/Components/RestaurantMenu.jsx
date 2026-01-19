import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [restData, setRestData] = useState(null);

  useEffect(() => {

    async function fetchRestaurantData() {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const restaurantAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1463&lng=79.0849&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

        const finalUrl = proxyUrl + restaurantAPI;
        const response = await fetch(finalUrl);
        const text = await response.text();

        setRestData(text);
        console.log("Fetched Restaurant Data:", restData);
      } catch (err) {
        console.error("Error fetching restaurant menu data:", err);
      }
    }
    fetchRestaurantData();
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Restaurant Menu Page
      </h1>
    </div>
  );
}
