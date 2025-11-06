import { NavLink } from "react-router-dom";
import { useState } from "react";


import "./style.scss";


type MenuVariant = "header" | "footer";
interface MenuItem {
    label: string;
    url: string;
    submenu?: MenuItem[];
}
export interface MenuSection {
    variant: MenuVariant;
    data: MenuItem[];
}
interface MenuProp {
    variant: MenuVariant;
    data: MenuItem[];
}

const Menu = ({variant, data}: MenuProp) => {
    const [openIndex, setOpenIndex] = useState<number| null>(null)
    const isHeader = variant === "header";




    return ( 
        <div className="menu__wrapper">
            <nav className="menu">
                <ul className="menu__list">
                    {data.map((item, index) => {
                        const hasSubmenu = item.submenu && item.submenu.length > 0

                        return (
                            <li className="menu__item">
                                {isHeader && hasSubmenu ? (
                                    <>
                                        <button onClick={() => setOpenIndex(() => index === openIndex ? null : index)}>
                                            {item.label}
                                        </button>
                                        <ul>
                                            {index === openIndex && item.submenu?.map((sub) => (
                                                <li>
                                                    <NavLink to={sub.url} className="menu__link">{sub.label}</NavLink>
                                                </li>
                                            ))}
                                        </ul>

                                    </>
                                ) : (
                                    <NavLink to={item.url} className="menu__link">{item.label}</NavLink> 
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;