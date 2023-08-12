import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import NaviMenus from "./components/NaviMenus";

const App = () => {
    return (
        <>
            <NaviMenus/>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;