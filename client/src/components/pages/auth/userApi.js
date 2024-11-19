import axios from "axios";
import { setUser } from "./userAction";
import { getToken, setToken } from "./tokenAction";
import { isValidPassword, isValidText } from "./regularExp";
import logOut from "./logout";

export async function userRegister(user_data, setResult) {

    let { name, email, password, confirmPassword } = user_data;
    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    if (confirmPassword != password) {
        setResult({ type: true, msg: "Password is MissMatch..." });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
        return;
    }
    // if (isValidText(name) == false) {
    //     setResult({ type: true, msg: "Name type is not Valid" });
    //     return;
    // }
    // if (isValidPassword(password) == false) {
    //     setResult({ type: true, msg: "Password type is not Valid" });
    //     return;
    // }



    try {
        let { status, data } = await axios({
            method: "post",
            url: "http://localhost:8000/register",
            data: { user_data: { email, password, name } },


        })
        console.log(status, data);
        if (status == 200) {

            setUser(data.user);
            setToken(data.token);
            window.location.href = "/"

        }

        setResult({ type: true, msg: data.msg });

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
    }
    setTimeout(() => setResult({ type: false, msg: "" }), 5000);
}

export async function userLogin(user_data, setResult) {

    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    try {
        let { status, data } = await axios({
            method: "post",
            url: "http://localhost:8000/login",
            data: { user_data },

        })

        if (status == 200) {

            setUser(data.user);
            setToken(data.token);
            window.location.href = "/"

        }

        setResult({ type: true, msg: data.msg });

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
    }
    setTimeout(() => setResult({ type: false, msg: "" }), 5000);
}

export async function changeUserPassword(user_data, setResult) {

    let { confirmPassword, newPassword } = user_data;

    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    if (confirmPassword != newPassword) {
        setResult({ type: true, msg: "Password is MissMatch..." });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
        return;
    }



    try {
        let token = getToken();
        let { status, data } = await axios({
            method: "put",
            url: "http://localhost:8000/update",
            data: { user_data },
            headers: {
                'Authorization': 'Bearer ' + token
            }

        })

        if (status == 200) {
            window.location.reload();
        }

        setResult({ type: true, msg: data.msg });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
    }

}
export async function userForgetPassword(user_data, setResult) {

    let { confirmPassword, newPassword } = user_data;

    for (let key in user_data) {
        if (user_data[key] == "" || user_data[key] == undefined) {
            setResult({ type: true, msg: "Please Fill All Field" });
            return;
        }
    }
    if (confirmPassword != newPassword) {
        setResult({ type: true, msg: "Password is MissMatch..." });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
        return;
    }



    try {
        let { status, data } = await axios({
            method: "post",
            url: "http://localhost:8000/forget-password",
            data: { user_data },

        })

        if (status == 200) {
            window.location.href = "/"
        }

        setResult({ type: true, msg: data.msg });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);

    }
    catch (err) {
        setResult({ type: true, msg: err.message });
        setTimeout(() => setResult({ type: false, msg: "" }), 5000);
    }

}
export async function deleteAccount(email) {
    
    try {
        let { status, data } = await axios({
            method: "delete",
            url: "http://localhost:8000/delete-account",
            data: { email },

        })
        
        if (status == 200) {
            logOut();
            window.location.href = "/"
        }



    }
    catch (err) {
        return;
    }

}