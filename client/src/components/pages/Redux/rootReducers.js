import { combineReducers } from "@reduxjs/toolkit";
import { getAllCoursesReducer, getCourseDetailReducer, getMyCourseDetailsReducer, getMyCoursesByLimitReducer } from "./reducers/courseReducer";
import { getAllFeedbackReducer } from "./reducers/feedbackReducer";



const rootReducers = combineReducers({
   getAllCourseData: getAllCoursesReducer,
   getCourseDetailData: getCourseDetailReducer,
   getMyCoursesByLimitData: getMyCoursesByLimitReducer,
   getAllFeedbackData: getAllFeedbackReducer,
   getMyCourseDetailsData: getMyCourseDetailsReducer

})


export default rootReducers;

