import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/store">Магазин</NavLink>
            </div>
        </header>
    );
};
