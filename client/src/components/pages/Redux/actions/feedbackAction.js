
import axios from "axios";
import { url } from "../../partials/data";


export const getAllFeedbackAction = () => async (disptach) => {


    try {
        let result = await axios.get(url + "/getallfeedback");
        console.log(result)
        disptach({ type: "GET_ALL_FEEDBACK", payload: result.data });

    }
    catch (err) {
       
        return;
    }
}
export const addFeedbackAction = async (feedback, setResult) => {
    // console.log(feedback)

    for (let key in feedback) {
        if (feedback[key] == "" || feedback[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    try {
        let { status, data } = await axios({
            method: "post",
            url: url + "/addfeedback",
            data: { feedback }
        })
        console.log(status, data);
        if (status == 200) {


            setResult({ type: true, msg: data.msg });
            setTimeout(() => setResult({ type: false, msg: "" }), 5000);
            return true;
        }


    }
    catch (err) {
        console.log(err)
        setResult({ type: true, msg: "Server Error..."});
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);

    }
    return false;

}
