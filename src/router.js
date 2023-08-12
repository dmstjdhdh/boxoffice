import {createBrowserRouter} from "react-router-dom";
import MovieList from "./pages/MovieList";
import News from "./pages/News";
import TvList from "./pages/TvList";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>,
    },
    {
        path: "/news",
        element: <News/>,
    },
    {
        path: "/tv",
        element: <TvList/>,
    },
    {
        path: "/movie/:movieId",
        element: <Detail/>,
    },
    {
        path: "/tv/:tvId",
        element: <Detail/>,
    }
])

export default router;