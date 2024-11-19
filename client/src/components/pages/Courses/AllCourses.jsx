import { Link, Box, Typography, Grid, styled, CircularProgress } from "@mui/material";
import CourseCard from "./CourseCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink } from "react-router-dom"
import { useEffect } from "react";
import { getAllCourseAction } from "../Redux/actions/courseAction";
import Footer from "../partials/Footer";
// import javaImg from "../../img/ProgLang/php.png";

const SearchField = styled("input")(({ theme }) => ({
    padding: "10px 20px",
    outline: "none",
    // border:"none",
    margin: "auto",
    color: "black",
    display: "block",
    marginTop: "10px",
    [theme.breakpoints.down("md")]:{
        width:"60%"
    },
    width: "40%",
    border: "solid 2px #f3dcda",
    // fontWeight:"bold",
    fontSize: "1.4rem",
    height: "50px",
    borderRadius: "10px 10px",
    backgroundColor: "white"

}))
export default function AllCourses() {
    let [search, setSearch] = useState("");
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCourseAction());
    }, [])
    let data = useSelector((state) => state.getAllCourseData);

    let searchHandle = (e) => {
        setSearch(e.target.value);
    }
// console.log(search)
    return (
        <>
            <Box className="mt-2" id="courses">
                <Typography variant="h5" className="text-center bg-danger text-white py-2 w-75 mx-auto">COURSES</Typography>
                <SearchField type="text" onChange={searchHandle} placeholder="Search" />
                <Box className="my-5 px-4">
                    {
                        (data.status == true) ?
                            <Grid container className="mx-auto gap-4">
                                {
                                    data.courses.filter((crs, idx) => {
                                       console.log(crs.crs_name.replace(" ",""))
                                        return (crs.crs_name.replace(" ","").toLowerCase().includes(search.replace(" ","").toLowerCase()));
                                    })
                                        .map((crs, idx) => {
                                            return <Grid item lg={2.7} key={idx} md={3.9} sm={5.9} className="mx-auto" ><CourseCard crs={crs} /></Grid>
                                        })



                                }





                            </Grid>
                            :<Box className="mx-auto w-25 text-center"><CircularProgress/></Box>

                    }


                </Box>
            </Box>
            <Footer/>
        </>
    )
}