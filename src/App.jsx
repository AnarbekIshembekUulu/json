import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { StorePage } from "./pages/StorePage";
import { Card } from "./components/Card/Card";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/store" element={<StorePage />} />
            </Routes>
        </>
    );
};
