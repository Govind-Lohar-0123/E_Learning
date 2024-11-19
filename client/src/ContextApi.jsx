import { useContext, useState } from "react";
import { createContext } from "react";

export const context = createContext("");
const Provider = context.Provider;

export default function ContextApi({ children }) {
    const [openSignIn, setOpenSignIn] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openChangePass, setOpenChangePass] = useState(false);
    let obj = { openSignIn, openSignUp, setOpenSignIn, setOpenSignUp, openChangePass, setOpenChangePass };
    return (
        <>
            <Provider value={{ ...obj }}>
                {children}
            </Provider>
        </>
    )

}