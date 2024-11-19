import bcrypt from "bcrypt";
export async function verifyPassword(currPass, hashPass) {

    return await bcrypt.compare(currPass, hashPass);



}
export async function generateHashPass(password) {

    let salt = await bcrypt.genSalt(10);
    let hash_pass = await bcrypt.hash(password, salt);
    return hash_pass;

}