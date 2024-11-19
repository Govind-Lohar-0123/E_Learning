
import { Box ,Grid,Typography} from "@mui/material"

export default function Footer() {
    return (
        <>
            <footer className="my-4  w-100 h-100 mt-2">
                <Box className="p-2 bg-dark text-white py-4 ">
                    <Grid container className=" text-center " style={{justifyContent:"space-evenly"}}>
                        <Grid item lg={2} md={6} xs={8} >
                            <Box>
                                <Typography variant="h5" className="text-bold">About Us</Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, consectetur.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={2} md={6} className="my-4" xs={8}>
                            <Box>
                                <Typography variant="h5" className="text-bold">Category</Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, consectetur.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={2}  md={6} xs={8}>
                            <Box>
                                <Typography variant="h5" className="text-bold">Contact Us</Typography>
                                <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, consectetur.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="text-white p-3 bg-dark mt-4">
                    <marquee behavior="" style={{ fontSize: "1.5rem" }} direction="left">
                        Welcome To iSchool
                    </marquee>

                </Box>
            </footer>
        </>
    )
}