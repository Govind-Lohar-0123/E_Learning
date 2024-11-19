
import { Link, List, ListItem, styled, Box } from "@mui/material";

import { Link as routerLink } from "react-router-dom";
import logOut from "../auth/logout";
import { deleteAccount } from "../auth/userApi";
import { getUser } from "../auth/userAction";

const ListStyle = styled(List)(({ theme }) => ({
    "li": { backgroundColor: "blue" },
    "a": {
        fontWeight: "bold",

        padding: "6px 30px",

        color: "white",
        width: "100%",
        textDecoration: "none",
    }
}))

const ImageComponent = styled(Box)(({ theme }) => ({
    borderRadius: "100%",
    marginInline: "auto",
    height: "30%",
    width: "80%",
    backgroundColor: "red",
    "img": {
        borderRadius: "100%",
    }

}))
const Wrapper=styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]: {
        
       width:"80%!important",
        paddingInline:"10px",
       
    }
}))
export default function LeftSlide({ img }) {

    let email = getUser().email;
    return (
        <>
            <Wrapper className="px-2  pt-4 mx-auto" style={{ height: "100vh",  }} >
                <ImageComponent className="">
                    <img src={`${process.env.PUBLIC_URL}/img/profile.png`} className="d-block w-100 h-100" alt="" />
                </ImageComponent>
                <Box className="mt-3">
                    <ListStyle className="d-flex gap-2" style={{ flexDirection: "column" }}>
                        <ListItem><i className="fa-regular text-white  fa-user"></i><Link to="/profile" component={routerLink} > My Profile </Link></ListItem>
                        <ListItem><i className="fa-solid fa-book text-white"></i><Link to="/mycourses" component={routerLink} > My Courses </Link></ListItem>
                        <ListItem><i className="fa-solid text-white fa-right-from-bracket"></i><Link to="/feedback" component={routerLink} >Feedback</Link></ListItem>
                        <ListItem onClick={() => deleteAccount(email)}><i className="fa-solid text-white fa-right-from-bracket"></i><Link to="#"  >Delete Account</Link></ListItem>
                        <ListItem><i className="fa-solid text-white fa-comment"></i><Link to="#" onClick={() => logOut()} >Logout</Link></ListItem>
                    </ListStyle>
                </Box>
            </Wrapper>
        </>
    )
}