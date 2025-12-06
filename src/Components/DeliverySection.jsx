import { Cities } from "../Utils/Cities";

export default function DeliverySection() {
    return (
        // App Download Banner and Cities with food delivery

        <div>
            <div className="flex flex-col items-center">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="App download banner" />

                <div className="mt-20 font-sans w-[80%]">
                    <h3 className="text-2xl font-bold mb-8">Cities with food delivery</h3>
                    <div className="grid grid-cols-4 gap-5 flex-wrap">
                        {Cities.map((city) => (
                            <div key={city} className="border border-gray-600 rounded-xl px-5 py-3 mr-5 mb-5 text-gray-600 cursor-pointer flex justify-center items-center text-center">
                                Order food online in {city}
                            </div>
                        ))}
                        <div className="flex border border-gray-600 rounded-xl px-5 py-3 mr-5 mb-5 text-[#FF5200] font-bold cursor-pointer justify-center items-center">
                            See More <span className="text-3xl self-end pl-1">&#129171;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grocery delivery */}

            <div className="my-10 flex flex-col items-center">

                <div className="font-sans w-[80%]">
                    <h3 className="text-2xl font-bold mb-8">Cities with grocery delivery</h3>
                    <div className="grid grid-cols-4 gap-5 flex-wrap">
                        {Cities.map((city) => (
                            <div key={city} className="border border-gray-600 rounded-xl px-5 py-3 mr-5 mb-5 text-gray-600 cursor-pointer flex justify-center items-center text-center">
                                Order grocery delivery in {city}
                            </div>
                        ))}
                        <div className="flex border border-gray-600 rounded-xl px-5 py-3 mr-5 mb-5 text-[#FF5200] font-bold cursor-pointer justify-center items-center">
                            See More <span className="text-3xl self-end pl-1">&#129171;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}