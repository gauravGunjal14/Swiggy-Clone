import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Restaurant from "./pages/Restaurant.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restraurants" element={<Restaurant />} />
                    <Route path="/city/nagpur/:id" element={<RestaurantMenu />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}