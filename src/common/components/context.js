import { createContext } from "react";

export const LoginContext = createContext({
    userId:null,
    isLoggedIn : false,
    login : () => {},
    logout : () => {}
});

