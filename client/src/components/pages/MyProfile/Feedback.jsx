import { Textarea } from "@mui/joy"
import { Box, Button, styled, TextField } from "@mui/material"
import { getUser } from "../auth/userAction"
import { useState } from "react";
import { addFeedbackAction } from "../Redux/actions/feedbackAction";

const Component=styled(Box)(({theme})=>({
    [theme.breakpoints.down("md")]:{
        width:"100%!important",
    },
    [theme.breakpoints.down("lg")]:{
        width:"75%!important",
    }
}))
export default function Feedback() {
    let { name, email } = getUser();
    let [result, setResult] = useState({ type: false, msg: "" })
    let [feedback, setFeedback] = useState({
        feed_stu_name: name, feed_stu_content: "", feed_stu_img: "java.png"
    })

    let handleFeedback = async () => {
        let flag = await addFeedbackAction(feedback, setResult);
        
        if (flag == true) window.location.href = "/";


    }
    return (

        <><Box className="w-100 h-100" >
            {(result.type == true) ? <div className="alert alert-primary mx-auto w-50" role="alert">
                {result.msg}
            </div> : ""}

            <Box className="  d-flex " >


                <Component className="d-flex gap-4 flex-direction-column w-50  gap-2 p-4 " >

                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        defaultValue={getUser().name}
                        multiline
                        slotProps={{
                            input: { readOnly: true }
                        }}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        defaultValue={getUser().email}
                        multiline
                        slotProps={{
                            input: { readOnly: true }
                        }}
                    />

                    <Textarea minRows={4} onChange={(e) => setFeedback({ ...feedback, feed_stu_content: e.target.value })} placeholder="Please Provide Feedback..." />
                    <Button className="d-block w-25 mx-auto mt-2" onClick={handleFeedback} variant="contained">Submit</Button>

                </Component>
            </Box>
        </Box>
        </>
    )
}