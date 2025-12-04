export default function Footer() {
    return (
        <div className="mt-20  bg-[#F0F0F5] flex flex-col justify-center items-center">
            <div className="w-[80%] flex justify-center py-10 gap-20">
                <div>
                    <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="logo" />
                    <p className="font-sans text-gray-600 pt-2">&copy; 2035 Swiggy Limited</p>
                </div>
                <div>
                    <h3 className="font-sans font-bold">Company</h3>
                    <div className=" font-sans text-gray-500 flex flex-col gap-3 pt-2">
                        <a href="">About Us</a>
                        <a href="">Swiggy Corporate</a>
                        <a href="">Careers</a>
                        <a href="">Team</a>
                        <a href="">Swiggy One</a>
                        <a href="">Swiggy Instamart</a>
                        <a href="">Swiggy Dineout</a>
                        <a href="">Minis</a>
                        <a href="">Pyng</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-sans font-bold">Contact us</h3>
                    <div className=" font-sans text-gray-500 flex flex-col gap-3 pt-2">
                        <a href="">Help & Support</a>
                        <a href="">Partner With Us</a>
                        <a href="">Ride with Us</a>
                    </div>
                    <h3 className="font-sans font-bold pt-6">Legal</h3>
                    <div className=" font-sans text-gray-500 flex flex-col gap-3 pt-2">
                        <a href="">Terms & Condition</a>
                        <a href="">Cookie Policy</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-sans font-bold">Available in:</h3>
                    <div className=" font-sans text-gray-500 flex flex-col gap-3 pt-2">
                        <a href="">Bangalore</a>
                        <a href="">Gurgaon</a>
                        <a href="">Hyderabad</a>
                        <a href="">Delhi</a>
                        <a href="">Mumbai</a>
                        <a href="">Pune</a>
                        <a className="border px-2 rounded-md font-sans" href="">685 cities &#129171;</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-sans font-bold">Life at Swiggy</h3>
                    <div className=" font-sans text-gray-500 flex flex-col gap-3 pt-2">
                        <a href="">Explore With Swiggy</a>
                        <a href="">Swiggy News</a>
                        <a href="">Snackables</a>
                    </div>
                    <div className="font-sans font-bold pt-6">
                        <p>Social Links</p>
                        <div className="flex gap-4 mt-4">
                            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" alt="Linkedin" />
                            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" alt="instagram" />
                            <img src="http://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" alt="facebook" />
                            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" alt="pinterest" />
                            <img src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" alt="Twitter" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="py-6 border-t border-gray-400 w-[90%] flex justify-center items-center gap-6">
                <p className="font-sans text-gray-600 font-bold text-2xl text-center py-4">For better experience, download the Swiggy app now</p>
                <img className="w-49" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="App Store" />
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="Play Store" />
            </div>
        </div>
    );
}