'use server'

import {verifyToken} from "@/utils/auth";

export default async function SecureAPICall(userId, token) {
    if (verifyToken({ userId: userId }, token)) {
        console.log(`Execute expensive/sensitive API call for ${userId}`);
    } else {
        console.log(`Invalid user for ${userId}`);
    }
}