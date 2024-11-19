import jwt from "jsonwebtoken";

export  function generateToken(email) {
    let JWT_SECRET_KEY = process.env.JWT_SECRET_KEY + "" + email;
    let token = jwt.sign({ email }, JWT_SECRET_KEY);
    return token;
}
export  function tokenVerify(token,email) {
    let JWT_SECRET_KEY = process.env.JWT_SECRET_KEY + "" + email;
    let isValid=  jwt.verify(token,JWT_SECRET_KEY);
    return isValid;
}


