import * as React from 'react';
import { Link, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { context } from '../../../ContextApi';
import { userLogin } from './userApi';
import { addEmailPassToCookie, getCookie } from './cookieAction.js';
import { setUser } from './userAction.js';

import sendEmail from '../emailjs/email.js';
import { useAuth0 } from '@auth0/auth0-react';
import { isValidEmail } from './regularExp.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const FormStyle = styled("form")(({ theme }) => ({
    "i": { marginRight: "10px" }
}))

let cookieEmail = getCookie("email");
let cookiePass = getCookie("password");

// console.log(document.cookie("email"));
let options = {
    to: "govindlohar3210@gmail.com",
    subject: "Welcome to reset your password",
    msg: "<p>Please click on the link to reset you password link: http://localhost:3000/forget-password</p>"
}
export default function Login() {
    //Third Party api
    let { user, loginWithRedirect } = useAuth0();
    if (user != null && user != undefined)
        setUser({ name: user.name, email: user.email })




    const { openSignIn, setOpenSignIn } = React.useContext(context);
    const [openLogin, setOpenLogin] = React.useState(false);

    const [checkMe, setCheckMe] = useState(false);
    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        email: (cookieEmail == null) ? "" : cookieEmail, password: (cookiePass == null) ? "" : cookiePass
    });

    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }
    const loginHandle = () => {
        if (checkMe == true) {
            addEmailPassToCookie(user_data.email, user_data.password);
        }

        userLogin({ ...user_data }, setResult);
    }
    const sendEmailHandle = () => {
        if (user_data.email == "") {
            setResult({ type: true, msg: "Please Fill This Field...." });

        }
        else if(isValidEmail(user_data.email)==false){
            setResult({ type: true, msg: "Enter Valid Email Type...." });
        }
        else {
            //send email to user
            options.to = user_data.email;
            window.localStorage.setItem("email", user_data.email);
            sendEmail(options);
            setResult({ type: true, msg: "Check your email..." })




        }
        setTimeout(() => setResult({ type: false, msg: "" }), 5000)
    }

    return (
        <div className="border-none">



            <Modal
                open={openSignIn}
                onClose={() => setOpenSignIn(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    (openLogin == false) ?

                        <Box sx={style} className="p-4">
                            {(result.type == true) ? <div className="alert alert-primary" role="alert">
                                {result.msg}
                            </div> : ""}
                            <Typography variant='h5' className="text-center text-bold">LOGIN</Typography>
                            <FormStyle>

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label"><i className="fa-regular text-dark fa-envelope "></i> Enter Email </label>
                                    <input type="email" value={user_data.email} onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Password</label>
                                    <input type="password" value={user_data.password} onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" onClick={(e) => setCheckMe(checkMe ? false : true)} className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                </div>

                                <Link onClick={() => setOpenLogin(true)} className="d-block" style={{ textDecoration: "underline" }}>ForgetPassword</Link>
                                {/* <Button onClick={() => loginWithRedirect()} className=" text-center mx-auto my-2 mx-auto d-block bg-danger" variant='contained'>Login With Redirect</Button> */}
                                <Button variant='contained' onClick={loginHandle} className="mt-3 mx-auto d-block text-bold w-50">Sign Up</Button>
                            </FormStyle>
                        </Box>
                        :
                        <Box sx={style} className="p-4">
                            {(result.type == true) ? <div className="alert alert-primary" role="alert">
                                {result.msg}
                            </div> : ""}
                            <Typography variant='h5' className="text-center text-bold">Forget Password</Typography>
                            <form className="my-4">

                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Enter Email </label>
                                    <input type="email" name="email" value={user_data.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>


                                <Box className="d-flex gap-2">

                                    <Button variant='contained' onClick={() => { setOpenLogin(false); setResult({ type: false, msg: "" }) }} className="mt-3  bg-danger  text-bold w-50">Cancel</Button>

                                    <Button variant='contained' onClick={sendEmailHandle} className="mt-3  btn-primary text-bold w-50">Submit</Button>
                                </Box>
                            </form>
                        </Box>
                }


            </Modal>


        </div>
    );
}