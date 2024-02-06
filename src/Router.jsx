import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import AddAdmin from "./Pages/AddAdmin";
import UpdateAdmin from "./Pages/UpdateAdmin";

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
            },
            {
                path: '/addAdmin',
                element: <AddAdmin></AddAdmin>
            },
            {
                path: '/editAdmin/:id',
                element: <UpdateAdmin></UpdateAdmin>
            }
        ]
    },
]);

export default Router;