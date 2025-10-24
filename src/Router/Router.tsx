import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import CabinetLayout from "../layouts/CabinetLayout/CabinetLayout";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Cabinet from "../pages/Cabinet/Cabinet";
import Main from "../pages/Main/Main";
import Psys from "../pages/Psys/Psys";
import Rates from "../pages/Rates/Rates";
import Webinars from "../pages/Webinars/Webinars";


const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />}/>
                <Route path="/main" element={<Main />} />
                <Route path="/psys" element={<Psys />} />
                <Route path="/rates" element={<Rates />} />
                <Route path="/webinars" element={<Webinars />} />
            </Route>
            <Route element={<CabinetLayout />}>
                <Route path="/cabinet" element={<Cabinet />} />
            </Route>
        </Routes>
    )
}

export default Router;