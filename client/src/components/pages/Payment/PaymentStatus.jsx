import { Link, Box, Typography, styled,TextField, Grid, Button } from "@mui/material";


import { Link as routerLink } from "react-router-dom"
import Contact from "../Home/Contact";
import Footer from "../partials/Footer";
const style = {
   
   
    marginInline:"auto",
    width: 400,
    boxShadow: 10,
    p: 4,
};
export default function PaymentStatus() {
    const handlePaymentView = () => {

    }
    return (
        <>

            <Box className="mt-2 ">
                <Typography variant="h5" className="text-center bg-danger text-white py-2 mx-auto w-75">PAYMENT STATUS</Typography>
                <div className="border-none">


                    <Box sx={style} className="p-4 my-4">
                        <Typography variant='h5' className="text-center text-bold">Payment Status</Typography>
                        <form>

                            <div className="mb-3 my-4">

                                <input type="text" placeholder='Enter Order ID' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <Button variant='contained' onClick={handlePaymentView} className="mt-3 mx-auto d-block text-bold w-50">View</Button>
                        </form>
                    </Box>

                </div>

            </Box>
            <Contact />
            <Footer/>
        </>
    )
}