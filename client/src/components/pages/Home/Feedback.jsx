
import FeedbackCard from "../partials/FeedbackCard";


import { styled, Box, Typography, CircularProgress } from "@mui/material";
import { useState,useEffect } from "react";
import Carousel from 'react-multi-carousel';
import { getAllFeedbackAction } from "../Redux/actions/feedbackAction"
import "react-multi-carousel/lib/styles.css";
import { useDispatch,useSelector } from "react-redux";

const CarouselComponent = styled(Carousel)(({ theme }) => ({

  "& .react-multiple-carousel__arrow react-multiple-carousel__arrow--right": {
    right: 0,
    backgoundColor: "white",
    color: "black",
    height: "40px",
  }

}))
const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Feedback = () => {

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFeedbackAction());
  }, [])
  let {status,feedback} = useSelector((state) => state.getAllFeedbackData);
// console.log(feedback)
  return (
    <> <Box className="mt-2 mx-2" id="feedback">
      <Typography variant="h5" className="text-center bg-danger w-50 mx-auto text-white py-2">FEEDBACK</Typography>
      {
        (status == true) ?

          <CarouselComponent className="mt-3 "
            responsive={responsive} dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px" swipeable={false}
            draggable={false}

            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            containerClass="carousel-container"
            keyBoardControl={true}
          >
            {
              feedback.map((feed, idx) => {
                return (<FeedbackCard key={idx} feed={feed} />)
              })
            }
          </CarouselComponent>
          : <Box className="mx-auto w-25 text-center"><CircularProgress/></Box>
      }
    </Box>
    </>
  )
}
export default Feedback;
