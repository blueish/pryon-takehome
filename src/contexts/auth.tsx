import { createContext, useState, useEffect } from "react";
import { useOutlet } from "react-router-dom";


export interface UserData {
    // if no name, we'll count user as non-existant 
    // simplest thing to do for this demo, for a real app we'd likely have more complicated states
    name?: string;
}

export interface AuthContextT {
    user: UserData,
    userLogin: (u: string, p: string) => boolean;
    userLogout: () => void;
}

export const USER_LOCALSTORAGE_KEY = "user"
// @ts-ignore - weird stuff with nulling initial contexts, seea https://stackoverflow.com/q/63080452
export const AuthContext: React.Context<AuthContextT> = createContext({});


export const  AuthProvider = (): JSX.Element => {
    const [user, setUserData] = useState<UserData>({})

    const outlet = useOutlet();
    // check if we have a user stored in localstorage
    const val = window.localStorage.getItem(USER_LOCALSTORAGE_KEY);

    useEffect(() => {
        // On first load, check if we have a stored user in localstorage and set if so
        if (val) {
            const parsed = JSON.parse(val)

            if (parsed?.user?.name !== user?.name) {
                setUserData(parsed)
            }
        }
    }, [])

    const userLogin = (username: string, password: string): boolean => {
        // This is where we could validate on the backend, but for this demo we can fake it
        if (username == "pryon" && password == "pryoff") {
            const userData = {
                name: username,
            };

            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
            setUserData(userData)

            return true;
        } 

        return false;
    };

    const userLogout = () => {
        // Clearing out user data acts as being logged out - if no name, we'e not logged in
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, "{}")
        setUserData({})
    };

    const contextData = {
        user,
        userLogin,
        userLogout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {outlet}
        </AuthContext.Provider>
    );
}