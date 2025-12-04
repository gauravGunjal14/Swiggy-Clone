export default function Header() {
    return (
        <header className="bg-[#ff5200]">
            <div className="w-7/10 flex justify-between items-center max-w-6xl mx-auto py-8">
                <a href="https://www.swiggy.com/" target="_blank"><img className="w-40 h-12 cursor-pointer" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Swiggy logo"></img></a>
                <div className="text-white text-base font-bold space-x-10 flex items-center">
                    <a href="" target="_blank">Swiggy Corporate</a>
                    <a href="" target="_blank">Partner with us</a>
                    <a href="" target="_blank" className="px-4 py-3 border border-white rounded-2xl inline-flex gap-2">Get the APP <svg className="rotate-315" width="21" height="21" viewBox="0 0 21 21" fill="none" aria-label="rating-up-down-icon" aria-hidden="false" strokecolor="#FFFFFF" fillcolor="#FFFFFF"><path d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z" fill="#FFFFFF" fillOpacity="0.92"></path></svg></a>
                    <a href="" target="_blank" className="px-8 py-3 bg-black rounded-2xl">Sign in</a>
                </div>
            </div>
            <div className="relative">
                <img className="lg:h-112 md:h-80 sm:h-50 w-auto absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="left_img" />
                <img className="lg:h-112 md:h-80 sm:h-50 w-auto absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="right_img"/>
            </div>
            <div className="text-white font-bold pt-16 pb-8 flex justify-center flex-col items-center text-center w-6/10 mx-auto position-relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Order food & groceries. Discover best restaurants. Swiggy it!</h2>
                <div className="text-base flex justify-between mt-6 text-gray-600 w-full gap-4">
                    <input type="text" placeholder="Enter your delivery location" className="bg-white rounded-2xl px-4 py-4 w-4/10"></input>
                    <input type="text" placeholder="Search for restaurant, item or more" className="bg-white rounded-2xl px-4 py-4 w-6/10"></input>
                </div>
            </div>
            <div className="flex justify-center items-center px-2 pb-5">
                <img className="lg:h-80 md:h-50 sm:h-30 w-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="Food"/>
                <img className="lg:h-80 md:h-50 sm:h-30 w-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="IM"/>
                <img className="lg:h-80 md:h-50 sm:h-30 w-auto" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="DO"/>
            </div>
        </header>
    );
}