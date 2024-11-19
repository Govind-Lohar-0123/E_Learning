



export function setUser(user_data) {

    localStorage.setItem("user", JSON.stringify(user_data));


}
export function getUser() {

    if (localStorage.getItem("user") == undefined) return undefined;
    return JSON.parse(localStorage.getItem("user"));
}
export function removeUser() {
    localStorage.removeItem("user");
}



