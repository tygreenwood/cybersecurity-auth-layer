'use client'

import {createContext, useEffect, useState} from "react";
import {generateAuthToken, getUserInformation} from "@/utils/generate_auth_token";

type User = {
    userName: string,
    userId: number,
    token: string
}

type UserContext = {
    user: User | null,
    setUser: () => void | null
}

export const UserContext = createContext<UserContext>({user: null, setUser: null});

export const User = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        const getUserInfo = async () => {
            const token = await generateAuthToken("tygreenwood", "password1");
            const data = await getUserInformation(token);
            setUser({...data, token: token} as User);
        }
        getUserInfo();
    }, []);

    return (
        <UserContext.Provider value={{user, setUser} as UserContext}>
            {children}
        </UserContext.Provider>
    )
}