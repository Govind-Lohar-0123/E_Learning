import { removeCookies } from "./cookieAction";
import { removeToken } from "./tokenAction";
import { removeUser } from "./userAction";

export default function logOut() {
    removeUser();
    removeToken();
    window.localStorage.removeItem("email")
    
    window.location.href = "/";
}
