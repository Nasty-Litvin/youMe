import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";


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
    data: MenuSection[];
}



const Menu = ({variant, data}: MenuProp) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    const isHeader = variant === 'header'; 

    const arrayMenu = data.find((item) => item.variant === variant);
    const menuItems = arrayMenu?.data
   


    return ( 
        <div className="menu__wrapper" ref={menuRef}>
            <nav className="menu">
                <ul className="menu__list">
                    {menuItems?.map((item, index) => {
                        const hasSubmenu = item.submenu && item.submenu.length > 0

                        return (
                            <li>
                                {isHeader && hasSubmenu ? (
                                    <>
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        >
                                            {item.label}
                                        </button>
                                        {openIndex === index && (
                                            <ul>
                                                {item.submenu?.map((sub) => (
                                                    <li>
                                                        <NavLink to={sub.url}>{sub.label}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <NavLink to={item.url}>{item.label}</NavLink>
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