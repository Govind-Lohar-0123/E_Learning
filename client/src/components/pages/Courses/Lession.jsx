
import { Typography, List, Link, ListItem, styled, Box } from "@mui/material";
import { useEffect } from "react";
import { Link as routerLink } from "react-router-dom";


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
let topicName="";

export default function Lession({ setVideoObj ,crs_list}) {
 
    return (
        <>
            <Box className="px-2  pt-4 mb-2" style={{ height: "86vh", overflowY: "scroll", backgroundColor: "#e9e9ef" }} >
                <Box className="mt-2" id="courses">
                    <Typography variant="h5" className="text-center bg-danger text-white py-2">LESSIONS LIST</Typography>
                    <Box className="my-3  px-4">
                        <List className="" >
                            {
                                crs_list.map((crs, idx) => {
                                    return (<>
                                        <ListItem className="d-flex gap-4" onClick={()=>setVideoObj(crs)}><span >{idx + 1}</span>
                                            <Link to="/watch/1" className="text-dark w-100" component={routerLink}>
                                                {crs.topic_name}
                                            </Link>


                                        </ListItem>
                                        <hr className="w-100 text-dark" />
                                    </>
                                    )
                                })
                            }


                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    )
}