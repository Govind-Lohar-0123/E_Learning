
//400->for missing and madantory fiedl

import userModel from "../utils/models/userSchema.js";

import { generateHashPass, verifyPassword } from "../utils/actions/passHashAction.js";
import { generateToken } from "../utils/actions/tokenAction.js";
export default class UserController {
    static userRegister = async (req, res) => {
        const user_data = req.body.user_data;

        for (let key in user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }
        try {
            let user = await userModel.findOne({ email: user_data.email });

            if (user == undefined || user == null) {
                user_data.password = await generateHashPass(user_data.password);
                await userModel(user_data).save();

                let token = generateToken(user_data.email);
                res.status(200).send({ msg: "User Registered", user: { name: user_data.name, email: user_data.email }, token });
            }
            else {
                res.status(201).send({ msg: "User Already Registered" });
            }

        }
        catch (err) {
            res.status(500).send({ msg: "Server Error " + err });
        }

    }

    static userLogin = async (req, res) => {
        const user_data = req.body.user_data;

        for (let key in user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }
        // Configure Passport.js


        try {
            let user = await userModel.findOne({ email: user_data.email });

            if (user != undefined && user != null) {
                let hashPass = user.password;

                let isMatchPass = await verifyPassword(user_data.password, hashPass);

                if (isMatchPass == false) {
                    res.status(201).send({ msg: "Invalid Email or Password" });
                }
                else {
                    let token = generateToken(user_data.email);

                    res.status(200).send({ msg: "User LoggedIn", user: { name: user.name, email: user_data.email }, token });
                }
            }

            else res.status(201).send({ msg: "Invalid Email or Password" });


        }
        catch (err) {
            console.log(err);
            res.status(500).send({ msg: "Server Error " + err });
        }

    }
    static changePassword = async (req, res) => {
        let user_data = req.body.user_data;
        let { email, newPassword, oldPassword } = req.body.user_data;
        
        for (let key in user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }


        try {
            let user = await userModel.findOne({ email: email });
            let hashPass = user.password;
            let isMatchPass = await verifyPassword(oldPassword, hashPass);

            if (isMatchPass == false) {
                res.status(201).send({ msg: "Old Password is Wrong..." });
            }
            else {
                let newHashPass = await generateHashPass(newPassword);

                await userModel.updateOne({ email: email }, { password: newHashPass });

                res.status(200).send({ msg: "User Password Changed..." });
            }


        }
        catch (err) {
            res.status(500).send({ msg: "Server Error " + err });
        }

    }
    static forgetPassword = async (req, res) => {
        let user_data = req.body.user_data;
        let { email, newPassword } = req.body.user_data;

        for (let key in req.body.user_data) {
            if (user_data[key] == "" || user_data[key] == undefined) {
                res.status(201).send({ msg: "Please Fill All Field" });
                return;
            }
        }

        try {
            let user = await userModel.findOne({ email:email });
            if (user==undefined || user==null) {
                res.status(201).send({ msg: "Email is Invalid..." });
                return ;
            }

            let newHashPass = await generateHashPass(newPassword);

            await userModel.updateOne({ email: email }, { password: newHashPass });

            res.status(200).send({ msg: "User Password Changed..." });

        }
        catch (err) {
            res.status(500).send({ msg: "Server Error " + err });
        }

    }
    static deleteAccount = async (req, res) => {
        
        let email = req.body.email;
      

        if (email == "") {
            res.status(201).send({ msg: "Please Fill All Field" });
            return;
        }
        try {
       
            await userModel.deleteOne({ email: email });
            res.status(200).send({ msg: "User Account Deleted" });

        }
        catch (err) {
            res.status(500).send({ msg: "Server Error " + err });
        }

    }

}