import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
import Menu from "../../Menu/Menu";
import menuData from "../../../data/menuData.json"
import type { MenuSection } from "../../Menu/Menu";
import "./style.scss";

const textButton = "Личный кабинет";




const DefaultHeader = () => {
const arrayMenu: MenuSection[] = menuData.data as MenuSection[];


const menuHeader = arrayMenu.find((item) => item.variant === 'header')?.data ?? []
console.log('menuHeader====', menuHeader)


  return (
    <div className="default-header">
        <div className="default-header__content">
          <div className="default-header__logo">
            <Logo />
          </div>
          <div className="default-header__menu">
            <Menu variant="header" data={menuHeader} />
          </div>
          <div className="default-header__btn">
            <Button text={textButton}/>
          </div>
        </div>
    </div>
  );
};

export default DefaultHeader;
