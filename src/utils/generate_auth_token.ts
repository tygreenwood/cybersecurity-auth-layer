'use server'

import jwt from "jsonwebtoken";
import {secretKey} from "@/utils/key";

const mockUsers = {
    "tygreenwood": {
        userPass: "password1",
        userId: 42
    },
    "admin": {
        userPass: "password2",
        userId: 1
    },
    "thirduser": {
        userPass: "password3",
        userId: 30
    }
}

export async function generateAuthToken(userName, userPass) {
    console.log(`Attempting to create auth token for ${userName}`);
    if (mockUsers[userName] && mockUsers[userName].userPass === userPass) {
        const payload = {
            userName: userName,
            userId: mockUsers[userName].userId,
        }
        return jwt.sign(payload, secretKey, {expiresIn: "24h"});
    } else {
        return Promise.reject("Invalid login credentials");
    }
}

export async function getUserInformation(token) {
    return jwt.verify(token, secretKey);
}