import Feedback from "../../Home/Feedback";


export function getAllFeedbackReducer(state = { status: false, feedback: [] }, actions) {

    switch (actions.type) {

        case "GET_ALL_FEEDBACK":
            return actions.payload;

        default:
            return {status:false,feedback:[]};

    }
}