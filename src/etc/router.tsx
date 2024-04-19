import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import QuotesPage from "../pages/QuotesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/quotes",
                element: <QuotesPage/>
            }
        ]
    }
]);

export default router;