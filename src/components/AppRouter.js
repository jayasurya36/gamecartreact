
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
export default function AppRouter({ children }) {
    return <BrowserRouter>
        {children}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
    </BrowserRouter>
}