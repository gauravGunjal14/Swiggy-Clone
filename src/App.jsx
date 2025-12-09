import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Restaurant from "./pages/Restaurant.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import Loader from "./Components/Loader.jsx";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restraurants" element={<Restaurant />} />
                    <Route path="/city/nagpur/:id" element={<RestaurantMenu />}></Route>
                    <Route path="/loader" element={<Loader></Loader>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}