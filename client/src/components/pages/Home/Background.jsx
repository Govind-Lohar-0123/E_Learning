
import { Box, Button, styled, Typography, Link } from "@mui/material"

import { useContext } from "react";
import { context } from "../../../ContextApi";

import { Link as routerLink } from "react-router-dom";
import { getToken } from "../auth/tokenAction"
import { getUser } from "../auth/userAction";
const MiddleBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",




}))
export default function Background({ flag }) {
    const { setOpenSignIn } = useContext(context);


    return (
        <>
            <Box className="position-relative">
                {
                    (flag == false) ?
                        <>
                            <Box >
                                {/* <video className="w-100 h-100" autoPlay muted >
                                    <source src={bg} />
                                </video> */}
                                <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt=""  className="w-100 h-100 d-block"/>
                            </Box>
                            <MiddleBox className=" text-center">
                                <Typography variant="h4">Welcome To iSchool</Typography >
                                <Typography className="bg-muted my-3">Learn And Implements</Typography>
                                {
                                    (getUser() == null) ?

                                        <Button variant="contained" onClick={() => setOpenSignIn(true)} className="bg-danger text-white">Get Started</Button>
                                        :
                                        <Link to="/profile" component={routerLink}><Button variant="contained"className="bg-primary text-white">My Profile</Button></Link>


                                }
                            </MiddleBox>
                        </>
                        :
                        <Box>
                            <img src={`${process.env.PUBLIC_URL}/img/bg1.png`} className="w-100 h-100 d-block" alt="" />
                        </Box>

                }

            </Box>

        </>
    )
}