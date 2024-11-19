
import Header from "../partials/Header";
import { useState, useEffect } from "react";
import { Box, Typography, Link, Grid, Button } from "@mui/material";
import Lession from "./Lession";

import { Link as routerLink, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getMyCourseDetailsAction } from "../Redux/actions/courseAction";
let data = { status: false };
export default function WatchVideo() {
    let [{ topic_name, video_link }, setVideoObj] = useState({ topic_name: "", video_link: "" });

    const { course_id } = useParams();
    let dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getMyCourseDetailsAction(course_id));
    }, [])
    data = useSelector((state) => state.getMyCourseDetailsData);
    let crs = data.myCourse;

    return (

        <>
            <Header />
            {
                (data.status == true) ?

                    <Grid container lg={12} className="gap-1 " style={{ marginTop: "5.5rem" }}>
                        <Grid item lg={3}>
                            <Lession setVideoObj={setVideoObj} crs_list={crs.myCourseDetails.crs_list} />
                        </Grid>
                        <Grid item lg={8.8} className="mx-auto">
                            <Box className="w-75 h-75 mx-auto d-block">
                                <Typography variant="h5" className=" text-bold my-3 ">{(topic_name == "") ? crs.myCourseDetails.crs_list[0].topic_name : topic_name} </Typography>
                                <video className="" style={{ width: "100%" }} controls>
                                    <img src={`${process.env.PUBLIC_URL}/img/profile.png`} alt="" className="w-100 h-100 d-block" />
                                </video>

                                <Link to="/profile" component={routerLink}><Button className="d-block w-25 mx-auto mt-3" variant="contained">Cancel</Button></Link>
                            </Box>
                        </Grid>
                    </Grid>
                    : ""
            }
        </>
    )
}