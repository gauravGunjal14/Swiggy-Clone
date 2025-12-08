import { useState } from "react";
import { RestaurantPageData } from "../Utils/RestaurantData.jsx";

export default function RestaurantsGrid() {
    const [visibleCount, setVisibleCount] = useState(16);

    const visibleRestaurants = RestaurantPageData.slice(0, visibleCount);

    function loadMore() {
        setVisibleCount((prev) => prev + 16);
    }

    return (
        <div className="w-[90%] flex flex-col items-center mx-auto">
            <div className="flex flex-wrap gap-10 mx-auto justify-center">{
                visibleRestaurants.map((restaurant) => (
                    <a key={restaurant?.info?.id} href="">
                        <div className="flex flex-col w-75">
                            <div className="relative rounded-2xl overflow-hidden">
                                <p className="absolute bottom-0 left-0 w-full pb-2 pl-2 font-bold text-2xl text-white bg-linear-to-t from-black">{restaurant?.info?.aggregatedDiscountInfoV3?.header + " " + restaurant?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                                <img className="w-75 h-50 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`} alt="" />

                            </div>
                            <div className="mx-4 my-2 flex flex-col gap-1">
                                <h2 className="font-bold text-xl">{restaurant?.info?.name}</h2>
                                <p className="font-bold">{restaurant?.info?.avgRating} &#9733; &#8226; {restaurant?.info?.sla?.deliveryTime} mins</p>
                                <p className="text-gray-500">{restaurant?.info?.cuisines?.join(", ")}</p>
                            </div>
                        </div>
                    </a>
                )
                )}
            </div>

            {visibleCount < RestaurantPageData.length && (
                <button onClick={loadMore} className="my-4 px-4 py-2 bg-orange-500 text-white rounded cursor-pointer">
                    Load more
                </button>
            )}
        </div>
    )
}