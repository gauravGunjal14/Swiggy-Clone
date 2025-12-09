import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [restData, setRestData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchRestaurantData2() {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const restaurantAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1463&lng=79.0849&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

        const finalUrl = proxyUrl + restaurantAPI;
        console.log("FETCHING URL:", finalUrl);

        const response = await fetch(finalUrl);
        const text = await response.text();

        console.log("STATUS:", response.status);
        console.log("RAW RESPONSE (first 300 chars):", text.slice(0, 300));

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        let json;
        try {
          json = JSON.parse(text);
        } catch (e) {
          console.error("JSON parse failed, response was:", text);
          throw new Error("Response is not valid JSON");
        }

        setRestData(json);
      } catch (err) {
        console.error("Error fetching restaurant menu data:", err);
        setError(err.message);
      }
    }

    fetchRestaurantData2();
  }, [id]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Restaurant Menu Page
      </h1>

      {error && (
        <p className="text-center mt-4 text-red-500">
          Error: {error}
        </p>
      )}

      {!error && !restData && (
        <p className="text-center mt-4">Loading menu...</p>
      )}

      {restData && (
        <pre className="text-xs whitespace-pre-wrap max-w-4xl mx-auto mt-4">
          {JSON.stringify(restData, null, 2)}
        </pre>
      )}
    </div>
  );
}
