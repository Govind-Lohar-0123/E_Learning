
import axios from "axios";
import { url } from "../../partials/data";
import { GET_ALL_COURSES_FAILED, GET_ALL_COURSES_SUCCESS, GET_ONE_COURSE_BY_ID_FAILED, GET_ONE_COURSE_BY_ID_SUCCESS } from "../constraints";
import { getUser } from "../../auth/userAction"

export const getAllCourseAction = () => async (disptach) => {


    try {
        let result = await axios.get(url + "/getallcourses");

        disptach({ type: GET_ALL_COURSES_SUCCESS, payload: result.data });

    }
    catch (err) {

        return;
    }
}

export const getMyAllCoursesByLimit = (page) => async (disptach) => {
    let stu_email = getUser().email;
    try {
        let result = await axios({
            method: "post",
            url: url + "/getmyallcoursesbylimit/" + page,
            data: { stu_email }
        })

        disptach({ type: "getMyCoursesByLimit", payload: result.data });

    }
    catch (err) {
        // console.log(err)
        return;
    }
}
export const getMyCourseDetailsAction = (courseId) => async (disptach) => {
    let stu_email = getUser().email;

    try {
        let result = await axios({
            method: "post",
            url: url + "/getmycoursedetails/",
            data: { stu_email, courseId }
        })

        disptach({ type: "getMyCourseDetails", payload: result.data });


    }
    catch (err) {

        return;
    }
}


export const getMyAllCoursesCountAction = async () => {
    let stu_email = getUser().email;
    try {
        let result = await axios({
            method: "post",
            url: url + "/getmyallcourses",
            data: { stu_email }
        })

        return result.data.len
        //   return result.data.myCourses.length;
    }
    catch (err) {
        return 0;

    }
}
export let getCourseDetailAction = (course_id) => async (disptach) => {
    try {
        let result = await axios.get(url + "/course-detail/" + course_id);
        disptach({ type: GET_ONE_COURSE_BY_ID_SUCCESS, payload: result.data });
    }
    catch (err) {
        disptach({ type: GET_ONE_COURSE_BY_ID_FAILED, payload: { status: false, result: {} } });
        return;
    }
}