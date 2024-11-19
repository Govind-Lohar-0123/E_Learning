
import CourseCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Link, Button, Box } from '@mui/material';
import { NavLink, Link as routerLink, useNavigate } from "react-router-dom"
import styled from '@emotion/styled';
import { useDispatch } from "react-redux";
import { getMyCourseForWatch } from '../Redux/reducers/courseReducer';
import { addMyCourseForWatch, getMyCourseDetailsAction } from '../Redux/actions/courseAction';
const CardStyle = styled(Box)(({ theme }) => ({

    ":hover": {

        boxShadow: "2px 2px 20px 10px #DFE1E5",
        transform: "scale(1.1)"
    }

}))
export default function MyCourseCard({ crs }) {
    let disptach = useDispatch();


    return (
        <>  <CardStyle className='course-card'>
            <CourseCard >
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
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
                <CardActions className="m-2">

                    <Link to={`/watch/${crs._id}`}  style={{ borderRadius: "5px" }} className="bg-primary p-2 px-3 text-bold  mx-auto text-white " component={routerLink}>Start Course
                    </Link>
                </CardActions>
            </CourseCard>
        </CardStyle>
        </>
    )
}