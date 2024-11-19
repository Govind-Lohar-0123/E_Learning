import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import Modal from '@mui/material/Modal';
import { context } from '../../../ContextApi';
import { userRegister } from './userApi';
import { addEmailPassToCookie } from './userAction';
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

export default function Register() {
    const { openSignUp, setOpenSignUp } = React.useContext(context);

    const [result, setResult] = useState({ type: false, msg: "" });
    const [user_data, setUser_data] = useState({
        name: "", email: "", password: "", confirmPassword: "",
    });
    const handleInput = (e) => {
        setUser_data({ ...user_data, [e.target.name]: e.target.value });
    }
    const registerHandle = () => {


        userRegister(user_data, setResult);
    }
    return (
        <div className="border-none">

            <Modal
                open={openSignUp}
                onClose={() => setOpenSignUp(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="p-4">
                    {(result.type == true) ? <div className="alert alert-primary" role="alert">
                        {result.msg}
                    </div> : ""}
                    <Typography variant='h5' className="text-center text-bold">Register</Typography>
                    <FormStyle >
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><i className="fa-solid fa-user"></i> Enter Name</label>
                            <input type="text" name="name" onChange={handleInput} value={user_data.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label"><i className="fa-regular text-dark fa-envelope "></i> Enter Email </label>
                            <input type="email" onChange={handleInput} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Password</label>
                            <input type="password" onChange={handleInput} name="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label"><i className="fa-solid fa-lock"></i> Confirm Password</label>
                            <input type="password" onChange={handleInput} name="confirmPassword" className="form-control" id="exampleInputPassword1" />
                        </div>


                        <Button variant='contained' onClick={registerHandle} className="mx-auto d-block text-bold w-50">Sign Up</Button>
                    </FormStyle>
                </Box>
            </Modal>
        </div>
    );
}