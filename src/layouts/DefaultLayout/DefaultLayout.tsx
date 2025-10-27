import { Outlet } from "react-router-dom";
import DefaultHeader from "../../components/Header/DefaultHeader/DefaultHeader";

import "./style.scss";

const DefaultLayout = () => {
    return ( 
        <div className="container">
            <DefaultHeader />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
     );
}
 
export default DefaultLayout;