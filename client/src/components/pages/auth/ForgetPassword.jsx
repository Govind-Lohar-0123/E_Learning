import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';

import { userForgetPassword, userRegister } from './userApi';
import { getUser } from './userAction';

const StyleBox = styled(Box)(({ theme }) => ({

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ">div": {
        boxShadow: "2px 2px 20px 10px #e9e9f0",
        borderRadius: "10px"
    }
}))

const FormStyle = styled("form")(({ theme }) => ({
    "i": { marginRight: "10px" }
}))

export default function ForgetPassword() {


    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        email: window.localStorage.getItem("email"), newPassword: "", confirmPassword: "",
    });
    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }
    const handleForgetPassword = () => {
        userForgetPassword(user_data, setResult);

    }
    return (
        <StyleBox className="border-none" style={{ height: "100vh" }}>

            <Box className=" p-3 " style={{ width: "35%" }} >

                {(result.type == true) ? <div className="alert alert-primary" role="alert">
                    {result.msg}
                </div> : ""}
                <Typography variant='h5' className="text-center text-bold">New Password</Typography>
                <FormStyle >

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label"><i className="fa-regular text-dark fa-envelope "></i> Email </label>
                        <input type="email" value={user_data.email} readOnly className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i>Enter New Password</label>
                        <input type="password" value={user_data.newPassword} onChange={handleInput} name="newPassword" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Confirm Password</label>
                        <input type="password" value={user_data.confirmPassword} onChange={handleInput} name="confirmPassword" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <Box className="d-flex gap-2">

                        <Button variant='contained' onClick={()=>window.location.href="/"} className="mt-3  bg-danger  text-bold w-50">Cancel</Button>

                        <Button variant='contained' onClick={handleForgetPassword} className="mx-auto d-block text-bold w-50">Change</Button>
                    </Box>


                </FormStyle>

            </Box>
        </StyleBox>
    );
}