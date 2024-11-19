import { Link, Box, Typography, Grid, Pagination, styled } from "@mui/material";
import MyCourseCard from "../Courses/MyCourseCard";
import { useDispatch, useSelector } from "react-redux";
import { Link as routerLink } from "react-router-dom"
import { useEffect } from "react";
import { getMyAllCoursesCountAction, getMyAllCoursesByLimit } from "../Redux/actions/courseAction";
// import javaImg from "../../img/ProgLang/php.png";
import { useState } from "react";
import * as React from 'react';


const PaginationStyle = styled(Pagination)(({ theme }) => ({
    "ul": {
        marginInline: "auto",
        diplay: "flex",
        alignItem: "center",
        justifyContent: "center",
        marginBlock: "3rem"
    }
}))

export default function MyCourses() {

    let [page, setPage] = useState(1);
    let [pageCount, setPageCount] = useState(0);
    let dispatch = useDispatch();
    let limit = 6;
    useEffect(() => {
        (async () => {
            let len = await getMyAllCoursesCountAction();
            
            setPageCount(len.myCourses)
        })();

    }, [])
    useEffect(() => {
        dispatch(getMyAllCoursesByLimit(page));
    }, [page])
    let data = useSelector((state) => state.getMyCoursesByLimitData);
    
    const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {

        setPage(value);
    };
    return (
        <>
            <Box className="mt-2" id="courses">
                <Typography variant="h5" className="text-center bg-danger text-white py-2">My Courses</Typography>
                <Box className="my-5 px-4">
                    {
                        (data.status == true && data.myCourses != null) ?
                            <Grid container className="mx-auto gap-4">
                                {
                                    data.myCourses.map((crs, idx) => {
                                        return (<Grid item lg={3.5} key={idx} md={6} ><MyCourseCard crs={crs} /></Grid>)

                                    })

                                }
                            </Grid>
                            : ""
                    }



                </Box>
                {(data.status==true) ?  <PaginationStyle onChange={handlePage} count={Math.ceil(pageCount / limit)} color="secondary" /> :<h3 className="text-center">No Courses</h3> }
            </Box>
        </>
    )
}