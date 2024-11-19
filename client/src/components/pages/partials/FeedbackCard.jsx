

import { Typography, Button, Box } from '@mui/material';
import styled from '@emotion/styled'

const Image = styled("img")(({ theme }) => ({
    display: "block",

    borderRadius: "100%",
    border: "solid 3px red",

    backgroundColor: "white",

}))
const FeedbackCardStyle = styled(Box)(({ theme }) => ({
    ":hover": {
        backgroundImage: "linear-gradient(to left,green,#e19b94)",
        boxShadow: "2px 2px 20px 10px #DFE1E5",
        transform: "scale(1.2)",
        transition: "all 1s ease-out",
        transform: "skew(5deg, 5deg)"
    },
    width:"80%",
    borderRadius:"15px",
    backgroundColor:"#f54a7c",
    border:"solid 2px red"

}))
const FeedbackStyle = styled(Box)(({ theme }) => ({

    width: "350px",

    marginBlock: "20px",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "solid 3px red"
}))
export default function FeedbackCard({ feed }) {
    // console.log(feed)
    return (
        <>
            <FeedbackCardStyle className="mb-5 p-3 text-center">
                <FeedbackStyle className="p-4 mx-auto">
                    {feed.feed_stu_content}
                </FeedbackStyle>
                <Box className="  ">
                    <a href="#" className="w-25 h-25 d-block mx-auto"><Image style={{ width: "70px", height: "70px" }} className='mx-auto' src={`${process.env.PUBLIC_URL}/img/ProgLang/${feed.feed_stu_img}`} alt="" /></a>
                    <Button className="text-dark bg-white text-bold mt-4" variant="contained">{feed.feed_stu_name}</Button>                </Box>
            </FeedbackCardStyle>
        </>
    )
}