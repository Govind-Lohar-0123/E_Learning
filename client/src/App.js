import Layout from './components/pages/partials/Layout';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/pages/Home/Home';
import ContextApi from './ContextApi';
import Background from './components/pages/Home/Background';
import AllCourses from './components/pages/Courses/AllCourses';
import PaymentStatus from './components/pages/Payment/PaymentStatus';
import CourseDetails from './components/pages/Courses/CourseDetails';
import ProfileLayout from './components/pages/MyProfile/ProfileLayout';
import MyProfile from './components/pages/MyProfile/MyProfile';
import Feedback from './components/pages/MyProfile/Feedback';
import MyCourses from './components/pages/MyProfile/MyCourses';
import Header from './components/pages/partials/Header';
import WatchVideo from './components/pages/Courses/WatchVideo';
import ForgetPassword from './components/pages/auth/ForgetPassword';
import { Provider } from 'react-redux';
import store from './components/pages/app/store';
import { getUser } from './components/pages/auth/userAction';
// const isLogin = (getToken() == null || getToken() == undefined) ? false : true;

import { Navigate } from "react-router-dom";

let isLogin = getUser();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allCourses",
        element: <><Background flag={true} /><AllCourses /></>,

      },
      {
        path: "/payment-status",
        element: <><Background flag={true} /><PaymentStatus /></>,

      },
      {
        path: "/course-details/:course_id",
        element: <><Background flag={true} /><CourseDetails /></>,

      },
      {
        path: "/forget-password",
        element: (window.localStorage.getItem("email") != undefined) ? <ForgetPassword /> : <Navigate to="/" />
      }
    ]
  },
  {
    path: "/",
    element: (isLogin != null) ? <ProfileLayout /> : <Navigate to="/" />,
    children: [
      {
        path: "profile",
        element: <MyProfile />
      },
      {
        path: "mycourses",
        element: <MyCourses />
      },
      {
        path: "feedback",
        element: <Feedback />
      }
    ]
  }
  ,
  {
    path: "/watch/:course_id",
    element: (isLogin != null) ? <WatchVideo /> : <Navigate to="/" />

  }
])




function App() {

  return (
    <Provider store={store}>
      <ContextApi><RouterProvider router={router} /></ContextApi>
    </Provider>
  )
}

export default App;
