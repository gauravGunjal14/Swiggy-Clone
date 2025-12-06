import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Restaurant from "./pages/Restaurant.jsx";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/restraurants" element={<Restaurant />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}