import { Box, Typography, Grid, TextField, styled, Button } from "@mui/material";
import { Textarea } from "@mui/joy";
import { useState } from "react";
import sendEmail from "../emailjs/email";


const LeftComponent = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(to right,red,yellow)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px 100px",


}))

export default function Contact() {
    const [contact, setContact] = useState({
        subject: "", to_email: "", msg: ""
    })
    let [result, setResult] = useState({ type: false, msg: "" })
    let handleContact = () => {
        if (contact.subject == "" || contact.to_email == "" || contact.msg == "") {
            setResult({ type: true, msg: "Please Fill All Feilds..." })

        }
        else {
            let options = {
                subject: contact.subject,
                to: "govindlohar3210@gmail.com",
                msg: contact.msg

            }
            sendEmail(options);
            setResult({ type: true, msg: "We will reach you at " + contact.to_email + " after some time" })

        }
        setTimeout(() => setResult({ type: false, msg: "" }), 5000)
    }
    return (
        <>
            <Box className="mt-4" id="contact">
                <Typography variant="h5" className="text-center bg-danger w-50 mx-auto text-white py-2">CONTACT US</Typography>
                {(result.type == true) ? <div className="alert alert-primary w-50 mx-auto mt-2" role="alert">
                    {result.msg}
                </div> : ""}
                <Box className="my-5 px-4">
                    <Grid container className="mx-auto gap-5 ">
                        <Grid item lg={7} md={6} sm={12} xs={12} >
                            <Box className="d-flex flex-direction-column gap-2 p-2 w-100">

                                <TextField
                                    id="outlined-textarea"
                                    label="Subject"
                                    value={contact.subject}
                                    onChange={(e) => setContact({ ...contact, subject: e.target.value })}
                                    placeholder="Enter Your Subject"
                                    multiline
                                />
                                <TextField
                                    id="outlined-textarea"
                                    label="Email"
                                    value={contact.to_email}
                                    onChange={(e) => setContact({ ...contact, to_email: e.target.value })}
                                    placeholder="Enter Your Email"
                                    multiline
                                />
                                <Textarea minRows={3} value={contact.msg} onChange={(e) => setContact({ ...contact, msg: e.target.value })} placeholder="How Can We Help You..." />
                            </Box>
                            <Button variant="contained" className="w-25 max-auto mt-2 " onClick={handleContact}>Submit</Button>
                        </Grid>
                        <Grid item lg={4} md={5} sm={12} xs={12}>
                            <marquee scrollamount="2" className="h-100" direction="down">
                                <LeftComponent className="text-center text-white">
                                    <Typography variant="h6">iSchool</Typography>
                                    <Typography>iSchool Near Police Station</Typography>
                                    <Typography>Jharkhand - 4545455</Typography>
                                    <Typography>Phone - 91090922</Typography>
                                    <Typography>www.iSchool.com</Typography>

                                </LeftComponent>
                            </marquee>
                        </Grid>


                    </Grid>
                </Box>
            </Box>
        </>
    )
}