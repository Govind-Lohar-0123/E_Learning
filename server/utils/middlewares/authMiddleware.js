import { tokenVerify } from "../actions/tokenAction.js";




export default function userAuthorization(req, res, next) {
    let { authorization } = req.headers;
   
    try {


        if (authorization == undefined) {
            res.status(201).send({ msg: "Token Not Found..." });
            return;
        }

        let token = authorization.split(" ")[1];

        let isValid = tokenVerify(token, req.body.user_data.email);
       
        if (isValid != null && isValid != undefined &&  Object.keys(isValid) != 0) {
            next();
        }
        else {
            res.status(201).send({ msg: "User is UnAuthorized..." });
        }
    }
    catch (err) {
        res.status(201).send({ msg: "User is UnAuthorized..." });
    }

}

