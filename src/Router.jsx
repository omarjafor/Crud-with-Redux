import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/addUser',
                element: <AddUser></AddUser>
            },
            {
                path: '/editUser/:id',
                element: <EditUser></EditUser>
            }
        ]
    },
]);

export default Router;