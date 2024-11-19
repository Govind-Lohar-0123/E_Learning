export function addEmailPassToCookie(email, password) {

    document.cookie = `email=${email};`
    document.cookie = `password=${password};`
}
export function removeCookies() {

    document.cookie = `email=${""};`
    document.cookie = `password=${""};`
}
export function getCookie(name) {
    // Create a pattern to find the cookie name and value
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        // If the cookie starts with the name, return its value
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length);
        }
    }

    return null; // Return null if the cookie is not found
}
