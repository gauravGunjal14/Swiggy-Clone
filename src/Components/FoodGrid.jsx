import { FoodData } from "../Utils//FoodData";

export default function FoodGrid() {
    return (
        <div className="mt-30 w-[80%] mx-auto font-serif">
            <h3 className="text-2xl font-bold mb-8">Order our best food options</h3>
            <div className="flex gap-10 justify-center flex-wrap">
                {FoodData.map((foodItem) => (
                    <div key={foodItem.id} className="cursor-pointer">
                        <a href="" target="_blank" rel="noopener noreferrer" >
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodItem.imageId}`} alt={foodItem.name} className="w-36 h-45 " />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}