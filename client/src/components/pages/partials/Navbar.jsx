import { AppBar, Box, styled, Toolbar, Button, Typography, Link } from "@mui/material"
import "../../css/common.css"
import { Link as routerLink } from "react-router-dom"
import { context } from "../../../ContextApi"
import { useContext, useState } from "react"
import { getToken } from "../auth/tokenAction"
import logOut from "../auth/logout";
import { getUser } from "../auth/userAction"
import { useAuth0 } from "@auth0/auth0-react"

import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
const LeftComponent = styled(Toolbar)(({ theme }) => ({
    
    [theme.breakpoints.down("lg")]: {
        display: "none",
        flexDirection: "column",
        position: "absolute",
        backgroundColor: "white",
        color: "black",
        left: 0,
        top: 72,
        
        width: "250px",

        gap: "10px",

        ">div": {
            flexDirection: "column",
            marginRight: "auto",
            width: "100%",
            marginBottom: "10px",

        },
       
        "a": {
            width: "100%",
            textAlign: "center",
            marginRight: "auto",
            padding: "5px 20px",
            borderRadius: "5px",
            display: "block",
            backgroundColor: "blue"
        },
        "button": { width: "100%" }
    }

}))
const Wrapper = styled(Toolbar)(({ theme }) => ({
    

        
       
        
        position: "relative"
    
}))
const RightComponent = styled(Toolbar)(({ theme }) => ({
    
}))


export default function Navbar() {
    const { setOpenSignIn, setOpenSignUp } = useContext(context);
    const [toggle, setToggle] = useState(false);
    // let { logout } = useAuth0();

    const isLogin = (getUser() == null || getUser() == undefined) ? false : true;

    const handleToggle = () => {
        setToggle(toggle ? false : true);
        let dis = document.querySelector(".dropdown").classList.toggle("d-flex")

    }
    return (
        <>

            <Wrapper className="my-auto p-0" style={{ justifyContent: "space-between" }}>



                <RightComponent className="gap-2">
                    <Box className="dropdown-btn" marginRight={3} onClick={handleToggle}>
                        {(toggle == false) ? <ReorderIcon /> : <ClearIcon />}
                    </Box>
                    <Typography variant="h3" className="text-white ">iSchool</Typography>
                    <Typography variant="small" className="bg-muted " >Learn And Implements</Typography>
                </RightComponent>
                <LeftComponent className="p-0 py-4 dropdown" >
                    <Toolbar className="text-bold gap-4" >
                        <Link to="/" component={routerLink} style={{ textDecoration: "none" }} className="text-white">Home</Link>
                        <Link to="/allcourses" component={routerLink} style={{ textDecoration: "none" }} className="text-white">Courses</Link>
                        <Link to="/payment-status" component={routerLink} style={{ textDecoration: "none" }} className="text-white">Payment Status</Link>
                        <a href="#contact" className="text-white">Contact</a>
                        {/* <a href="/#feedback" className="text-white">Feedback</a> */}
                    </Toolbar>
                    <Toolbar className="gap-3">
                        {
                            (isLogin == false) ?
                                <>
                                    <Button onClick={() => setOpenSignIn(true)} className="text-dark bg-white text-bold" variant="contained">Login</Button>
                                    <Button onClick={() => setOpenSignUp(true)} className="bg-white text-dark text-bold" variant="contained"> Register </Button>
                                </>
                                :
                                <>
                                    <Link to="/profile" component={routerLink} ><Button className="text-white bg-primary text-bold" variant="contained">{getUser().name}</Button></Link>
                                    <Button onClick={logOut} className="text-dark bg-white  text-bold" variant="contained">Logout</Button>
                                </>
                        }

                    </Toolbar>
                </LeftComponent>

            </Wrapper>


        </>
    )
}