import { GET_ALL_COURSES_FAILED, GET_ALL_COURSES_SUCCESS, GET_ONE_COURSE_BY_ID_FAILED, GET_ONE_COURSE_BY_ID_SUCCESS } from "../constraints";


export function getAllCoursesReducer(state = { status: false, courses: [] }, actions) {

    switch (actions.type) {

        case GET_ALL_COURSES_SUCCESS:
            return actions.payload;

        default:
            return { status: false, course: [] };

    }
}

export function getMyCourseDetailsReducer(state = { status: false, myCourse: {} }, actions) {

    switch (actions.type) {

        case "getMyCourseDetails":
            return actions.payload;

        default:
            return { status: false, myCourse: {} };

    }
}
export function getMyCoursesByLimitReducer(state = { status: false, len: [] }, actions) {

    switch (actions.type) {

        case "getMyCoursesByLimit":
            return actions.payload;

        default:
            return { status: false, len: [] };


    }
}
export function getCourseDetailReducer(state = { status: false, course: {} }, actions) {

    switch (actions.type) {

        case GET_ONE_COURSE_BY_ID_SUCCESS:
            return actions.payload;

        default:
            return { status: false, course: {} }

    }
}