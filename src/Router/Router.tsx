import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import CabinetLayout from "../layouts/CabinetLayout/CabinetLayout";


const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}></Route>
            <Route element={<CabinetLayout />}></Route>
        </Routes>
    )
}

export default Router;