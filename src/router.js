import {createBrowserRouter} from "react-router-dom";
import MovieList from "./pages/MovieList";
import News from "./pages/News";
import TvList from "./pages/TvList";

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
    }
])

export default router;