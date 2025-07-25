import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pagyes/Home/Home";
import Register from "../pagyes/Home/Register/Register";
import SignIn from "../pagyes/SignIn/SignIn";
import JobDetails from "../pagyes/JobDetailes/JobDetails";
import ParivateRoute from "./ParivateRoute";
import JobApply from "../pagyes/JobApply/JobApply";
import MyApplications from "../pagyes/MyApplications/MyApplications";
import Assignment from "../pagyes/Assignment/Assignment";
import MyPostedJobs from "../pagyes/MyPostedJobs/MyPostedJobs";
import VewApplications from "../pagyes/VewApplications/VewApplications";
import AllJob from "../pagyes/AllJobs/AllJob";


//create router from router tutrial start>
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2> Oh Devloper Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: "alljobs",
        element: <AllJob></AllJob>,
      },
      {
        path: "/jobs/:id",
        element: <ParivateRoute><JobDetails></JobDetails></ParivateRoute>,
        loader: ({ params }) => fetch(`https://job-applly-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: "/jobapply/:id",
        element: <ParivateRoute>
          <JobApply></JobApply>
        </ParivateRoute>
      },
      {
        path: "myapplications",
        element: <MyApplications></MyApplications>
      },
      {
        path:"assignment",
        element: <ParivateRoute>
          <Assignment></Assignment>
        </ParivateRoute>
      },
      {
        path:"postedjobs",
        element:<ParivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </ParivateRoute>
      },
      {
        path:"vewapplications/:job_id",
        element: <ParivateRoute>
          <VewApplications></VewApplications>
        </ParivateRoute>,
        loader:({params})=> fetch(`https://job-applly-server.vercel.app/job-applications/jobs/${params.job_id}`)
      },
      
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>
      },
      {
        path: '*',
        element: <h2>404 - Page Not Found</h2>
      },
    ]
  },
]);
export default router;
//create router from router tutrial end>