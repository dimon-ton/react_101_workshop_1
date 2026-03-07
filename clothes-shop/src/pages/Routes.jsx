import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Profile from "./Profile";
import Mainlayout from "../layout/Mainlayout";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },
        ]
    },

])