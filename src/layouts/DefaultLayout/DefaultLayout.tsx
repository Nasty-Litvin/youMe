import { Outlet } from "react-router-dom";
import DefaultHeader from "../../components/Header/DefaultHeader/DefaultHeader";

import "./style.scss";

const DefaultLayout = () => {
    return ( 
        <div className="default-layout">
            <DefaultHeader />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
     );
}
 
export default DefaultLayout;