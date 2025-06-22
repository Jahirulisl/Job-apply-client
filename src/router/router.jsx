import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pagyes/Home/Home";
import Register from "../pagyes/Home/Register/Register";
import SignIn from "../pagyes/SignIn/SignIn";


//create router from router tutrial start>
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2> Oh Devloper Route not found</h2>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },

      {
        path:"register",
        element:<Register></Register>,
      },
      {
        path:"signIn",
        element:<SignIn></SignIn>
      },
      {
        
      }
    ]
  },
]);
export default router;
//create router from router tutrial end>