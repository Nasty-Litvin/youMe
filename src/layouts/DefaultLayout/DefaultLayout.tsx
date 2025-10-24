import { Outlet } from "react-router-dom";
import DefaultHeader from "../../components/Header/DefaultHeader/DefaultHeader";

import "./style.scss";

const DefaultLayout = () => {
    return ( 
        <div className="default-layout">
            <DefaultHeader />
            <main className="container">
                <Outlet />
            </main>
        </div>
     );
}
 
export default DefaultLayout;