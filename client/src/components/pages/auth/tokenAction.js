
function setToken(token){
    window.localStorage.setItem("Token",token);
    
}
function getToken(){
    if(localStorage.getItem("Token")==undefined)return undefined;
    return localStorage.getItem("Token");
}
function removeToken(){
    localStorage.removeItem("Token");
}

export {setToken,getToken,removeToken};