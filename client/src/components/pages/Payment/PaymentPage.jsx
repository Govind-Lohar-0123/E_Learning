import * as React from 'react';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link as routerLink } from "react-router-dom"
import { context } from '../../../ContextApi';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"50%",
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
};


export default function PaymentPage({state}) {
    const {open,setOpen}=state;



    return (
        <div className="border-none">



            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >



                <Box sx={style} className="p-4">
                    <Typography variant='h4' className="text-center text-bold">Welcome E-Learning Payment Page</Typography>
                    <form>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Order ID : </label>
                            <input type="text" readOnly value={1010101010} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" readOnly value={"govind@gmail.com"} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Amount</label>
                            <input type="text" readOnly value={1010} className="form-control" id="exampleInputPassword1" />
                        </div>

                        <Box className="d-flex gap-2 align-item-center">
                            <Button variant='contained' className="mt-3 mx-auto d-block bg-danger text-bold w-25" onClick={()=>setOpen(false)}>Cancel</Button>
                            <Button variant='contained' className="mt-3 mx-auto d-block text-bold w-25">Check Out</Button>
                        </Box>

                        <Typography className="mt-3">Note : Compelete Payment By Clicking On Checkout Button...</Typography>
                    </form>
                </Box>



            </Modal>


        </div>
    );
}