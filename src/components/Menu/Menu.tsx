import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./style.scss";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <div className="menu__wrapper">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/about">О нас</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/rates">Тарифы</NavLink>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/psys">Психологам</NavLink>
                    </li>
                    <li 
                        className="menu__item"
                        onMouseDown={() => setIsOpen(prev => !prev) }
                    >
                        Материалы
                    </li>
                </ul>
            </nav>
            {isOpen && (
                <div className="submenu">
                    <ul className="submenu__list">
                        <li className="submenu__item">
                            <NavLink to="/blog">Блог</NavLink>
                        </li>
                        <li className="submenu__item">
                            <NavLink to="/webinars">Вебинары</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
     );
}
 
export default Menu;