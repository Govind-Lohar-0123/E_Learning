import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Login from "../auth/Login"
import Register from "../auth/Register";
import PaymentPage from "../Payment/PaymentPage";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />

            <Login />
            <Register />
            
        </>
    )
}