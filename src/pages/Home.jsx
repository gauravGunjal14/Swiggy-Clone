import Header from "../Components/Header.jsx";
import FoodGrid from "../Components/FoodGrid.jsx";
import GroceriesGrid from "../Components/GroceriesGrid.jsx";
import RestaurantsSection from "../Components/RestaurantsSection.jsx";
import DeliverySection from "../Components/DeliverySection.jsx";
import Footer from "../Components/Footer.jsx";

export default function Home() {
    return (
        <div className="font-serif">
            <Header></Header>
            <FoodGrid></FoodGrid>
            <GroceriesGrid></GroceriesGrid>
            <RestaurantsSection></RestaurantsSection>
            <DeliverySection></DeliverySection>
            <Footer></Footer>
        </div>
    );
}