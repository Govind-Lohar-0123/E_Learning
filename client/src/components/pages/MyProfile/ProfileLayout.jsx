import { Outlet } from "react-router-dom";
import Header from "../partials/Header";
import LeftSlide from "./LeftSlide";
import { Grid } from "@mui/joy";
import ChangePassword from "../auth/ChangePassword";
import { createContext, useState } from "react";
import { getUser } from "../auth/userAction";



export const profileContext = createContext();
const ProfileProvider=profileContext.Provider;
export default function ProfileLayout() {
    let [img, setImg] = useState("");
    
    
    return (

        <><ProfileProvider value={{setImg}}>
            <Header />
            <Grid container lg={12} className="gap-1 " style={{ marginTop: "5.5rem" }}>
                <Grid item lg={2.3} md={3} sm={4.5} xs={12} style={{ backgroundColor: "#f6f6f7" }}>
                    <LeftSlide img={img}/>
                </Grid>
                <Grid item lg={9.5} md={8.7} sm={7.3} xs={12} className="mx-auto" style={{ backgroundColor: "#f6f6f7" }}>
                    <Outlet />
                </Grid>
            </Grid>
            <ChangePassword />
        </ProfileProvider>
        </>
    )
}