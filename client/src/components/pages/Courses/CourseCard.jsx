
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Link, Box, Button } from '@mui/material';
import { Link as routerLink } from "react-router-dom"

import styled from '@emotion/styled';
const CardStyle = styled(Card)(({ theme }) => ({
    ":hover": {

        boxShadow: "2px 2px 20px 10px #DFE1E5",
        transform: "scale(1.1)"
    }

}))




export default function CourseCard({ crs }) {

    return (
        <>


            <CardStyle className="p-2">
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ width: "100%" }}
                    image={`${process.env.PUBLIC_URL}/img/${crs.crs_img}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {crs.crs_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {crs.crs_desc}
                    </Typography>
                    <Typography variant="body2" className="my-2" sx={{ color: 'text.secondary' }}>
                        Duration: {crs.crs_duration}
                    </Typography>
                    <Typography variant='h6' className=''>Price <del>{crs.crs_org_price}</del>&nbsp;&nbsp; &#8377;{crs.crs_sell_price}</Typography>

                </CardContent>
                <CardActions className=" m-2 d-block p-0">

                    <Box className="mt-2 d-flex align-item-center justify-content-space-between">
                        <Link to={crs.crs_document} className=" text-bold  d-block" component={routerLink}><Button variant='contained' className='btn-danger' style={{ backgroundColor: "#f74331" }}>Documentation</Button></Link>

                        <Link to={`/course-details/${crs._id}`} style={{ borderRadius: "5px", marginLeft: "auto" }} className="bg-primary px-2 py-1 text-white " component={routerLink}>Enroll
                        </Link>

                    </Box>

                </CardActions>
            </CardStyle>

        </>
    )
}