import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [useToken, setUseToken] = useState(localStorage.getItem('token') ?? '');



    return (
        <AuthContext.Provider value={{ useToken, setUseToken }}>
            {children}
        </AuthContext.Provider>
    );
}
