import { createBrowserRouter } from "react-router-dom";
import CourseCatalog from "../pages/CourseCatalog/CourseCatalog";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import Enroll from "../pages/Enroll/Enroll";
import Login from "../pages/Login/Login";
import Registration from "../pages/Signup/registration";
import DashboardLayout from "../Layout/DashboardLayout";
import CreateCourse from "../pages/Dashboard/page/CreateCourse/CreateCourse";
import ManageCourse from "../pages/Dashboard/page/ManageCourse/ManageCourse";
import PublishCourse from "../pages/Dashboard/page/PublishCourse/PublishCourse";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CourseCatalog></CourseCatalog>
    },
    {
        path: "courseDetail/:id",
        element: <CourseDetail></CourseDetail>
    } 
,
    {
        path: "enroll",
        element: <Enroll></Enroll>
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path:'registration',
        element: <Registration></Registration>
    }
    ,{
        path: 'dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children: [
            { 
            path: 'create',
            element: <CreateCourse></CreateCourse>
            },
            { 
            path: 'manage',
            element: <ManageCourse></ManageCourse>
            },
            {
            path: 'publish',
            element: <PublishCourse></PublishCourse>
            }
        ]
    }
      
  ]);
export default router;