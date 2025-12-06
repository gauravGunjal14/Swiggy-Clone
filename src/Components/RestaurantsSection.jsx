import { RestaurantData } from "../Utils/RestaurantData";

export default function RestaurantsSection() {
    return (
        <div className="my-30 w-[80%] mx-auto font-sans">
            <h3 className="text-2xl font-bold mb-8">Discover best restaurants on Dineout</h3>
            <div className="flex gap-10 flex-wrap justify-center">
                {RestaurantData.map((RestaurantItem) => (
                    <a href={`https://www.swiggy.com/restaurants/${RestaurantItem.info.id}/dineout`}>
                        <div key={RestaurantItem.info.id} className="w-80 rounded-2xl shadow-md border border-gray-300 ">
                            <div className="relative">
                                <img src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${RestaurantItem.info.mediaFiles[0].url}`} alt={RestaurantItem.info.name} className="w-80 h-48 object-cover rounded-t-2xl" />
                                <div className="flex justify-between gap-5 items-center text-lg font-sans font-bold text-white absolute bottom-0 w-full h-auto px-2 py-2 bg-linear-to-t from-black to-black-100">
                                    <h4 className="">{RestaurantItem.info.name}</h4>
                                    <p className="flex self-end gap-1"><svg className="self-center" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8.00005" cy="7.99999" r="7.2" fill="url(#StoreRating16_svg__paint0_linear_32982_71565)"></circle><path d="M8.06524 10.292C8.02495 10.2683 7.97496 10.2683 7.93466 10.292L5.85313 11.5174C5.54781 11.6972 5.1768 11.4206 5.26191 11.0766L5.8205 8.81958C5.83239 8.77154 5.81567 8.72094 5.77751 8.68943L3.96412 7.19223C3.68661 6.96312 3.82918 6.51269 4.18797 6.48497L6.58754 6.29955C6.63517 6.29587 6.67685 6.2661 6.69578 6.22223L7.63269 4.05109C7.77165 3.72907 8.22825 3.72907 8.36722 4.05109L9.30412 6.22223C9.32305 6.2661 9.36473 6.29587 9.41237 6.29955L11.8119 6.48497C12.1707 6.51269 12.3133 6.96312 12.0358 7.19223L10.2224 8.68943C10.1842 8.72094 10.1675 8.77154 10.1794 8.81958L10.738 11.0766C10.8231 11.4205 10.4521 11.6972 10.1468 11.5174L8.06524 10.292Z" fill="white"></path><defs><linearGradient id="StoreRating16_svg__paint0_linear_32982_71565" x1="8.00005" y1="0.799988" x2="8.00005" y2="15.2" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>{RestaurantItem.info.rating.value}</p>
                                </div>
                            </div>
                            <div className="mt-2 px-2 text-sm text-gray-400 font-normal">
                                <div className="flex justify-between gap-10">
                                    <p>{RestaurantItem.info.cuisines.join(", ")}</p>
                                    <p>{RestaurantItem.info.costForTwo}</p>
                                </div>
                                <div className="mt-2 flex justify-between gap-10">
                                    <p>{RestaurantItem.info.locationInfo.formattedAddress}</p>
                                    <p>{RestaurantItem.info.locationInfo.distanceString}</p>
                                </div>
                                <div className="bg-gray-200 flex items-center gap-1 px-2 w-31 mt-3 rounded-2xl">
                                    <img src={`https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${RestaurantItem.info.vendorOffer.offerHighlights[0].logoCtx.logo}`} alt="book" className="h-3 w-3" />
                                    <p>Table booking</p>
                                </div>
                                <div className="mt-3 flex justify-between items-center bg-[#1BA672] text-white font-bold px-2 py-2.5 rounded-xl">
                                    <img className="w-6 h-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png" alt="OFFER" />
                                    <p>Flat 10% off on pre-booking</p>
                                    <p>+ 1 more</p>
                                </div>
                                <div className="mt-3 flex justify-between items-center bg-[#c8f9e5] text-[#1BA672] font-bold px-3 py-2.5 mb-3 rounded-xl">
                                    <p>Up to 10% off with bank offers</p>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}