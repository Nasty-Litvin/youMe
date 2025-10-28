import Button from "../../Button/Button";
import Logo from "../../Logo/Logo";
import Menu from "../../Menu/Menu";

import "./style.scss";

const textButton = "Личный кабинет";

const DefaultHeader = () => {
  return (
    <div className="default-header">
        <div className="default-header__content">
          <div className="default-header__logo">
            <Logo />
          </div>
          <div className="default-header__menu">
            <Menu />
          </div>
          <div className="default-header__btn">
            <Button text={textButton}/>
          </div>
        </div>
    </div>
  );
};

export default DefaultHeader;
