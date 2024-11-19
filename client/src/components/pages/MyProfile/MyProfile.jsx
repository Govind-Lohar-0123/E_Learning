import { Box, TextField, Button, styled } from "@mui/material"
import { context } from "../../../ContextApi";
import { useContext, useState } from "react";
import { profileContext } from "./ProfileLayout";
import { getUser } from "../auth/userAction";


const FormStyle = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        width: "100%!important",
        marginInline: "auto",
        paddingInline:"10px",
        "button":{
            width:"80%!important"
        }
    }
}))
export default function MyProfile() {
    let { setOpenChangePass } = useContext(context);
    let { setImg } = useContext(profileContext);
    let { name, email } = getUser();
    return (

        <>
            <Box className=" w-100 h-100 d-flex " >


                <FormStyle className="d-flex gap-4 flex-direction-column w-50 gap-2 p-4 " >

                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        defaultValue={name}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        defaultValue={email}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Occuption"
                        defaultValue='Web Developer'
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                        multiline
                    />
                    {/* <form>
                        <div class="form-group ">
                            <label htmlFor="exampleFormControlFile1">Upload Image</label>
                            <input type="file" onClick={(e) =>{
                                
                                 setImg(e.target.value)}} className="form-control-file d-block mt-2" id="exampleFormControlFile1" />
                        </div>
                    </form> */}
                    <Box className="d-flex gap-3">
                        {/* <Button className="d-block w-25 mx-auto mt-2" variant="contained">Update</Button> */}
                        <Button onClick={() => setOpenChangePass(true)} className="d-block w-50 text-bold mx-auto mt-2" variant="contained">Change Password</Button>
                    </Box>
                </FormStyle>
            </Box>
        </>
    )
}