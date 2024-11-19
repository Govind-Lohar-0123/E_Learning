import { Link, Box, Typography, Grid, CircularProgress } from "@mui/material";
import CourseCard from "./CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink } from "react-router-dom"
import { useEffect } from "react";
import { getAllCourseAction } from "../Redux/actions/courseAction";
// import javaImg from "../../img/ProgLang/php.png";
export default function Courses() {

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCourseAction());
    }, [])
    let data = useSelector((state) => state.getAllCourseData);
    // console.log(data);

    return (
        <>
            <Box className="mt-2" id="courses">
                <Typography variant="h5" className="text-center bg-danger mx-auto w-75 text-white py-2">COURSES</Typography>
                <Box className="my-5 px-4">
                    {
                        (data.status == true) ?
                            <Grid container className="mx-auto gap-4">
                                {
                                    data.courses.map((crs, idx) => {
                                        return (<Grid item lg={2.7} key={idx} md={3.9} sm={5.9} className="mx-auto" ><CourseCard crs={crs}/></Grid>)

                                    })

                                }
                            </Grid>
                            : <Box className="mx-auto w-25 text-center"><CircularProgress/></Box>
                    }


                </Box>
                <Link to="/allcourses" style={{ textDecoration: "none", borderRadius: "10px" }} className="view-all-course d-block  text-center w-25 mx-auto p-2 bg-primary text-white my-3" component={routerLink}>View All Courses</Link>
            </Box>
            
        </>
    )
}