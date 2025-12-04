import { GroceriesData } from "../Utils/GroceriesData";

export default function Groceries() {
    return (
        <div className="mt-30 w-[80%] mx-auto font-serif">
            <h3 className="text-2xl font-bold mb-8">Shop groceries on Instamart</h3>
            <div className="flex gap-10 justify-center flex-wrap">
                {GroceriesData.map((GroceriesItem) => (
                    <div key={GroceriesItem.id} className="cursor-pointer w-36 flex flex-col items-center gap-2 text-center">
                        <a href="" target="_blank" rel="noopener noreferrer" className="w-36 h-45">
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${GroceriesItem.imageId}`} alt={GroceriesItem.name} />
                        </a>
                        <h4 className="text-lg text-gray-600 font-bold">{GroceriesItem.action.text}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}