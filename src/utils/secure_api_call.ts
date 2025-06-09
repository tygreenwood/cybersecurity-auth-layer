'use server'

import {verifyToken} from "@/utils/auth";

export default async function SecureAPICall(userId, token) {
    // const {status, data} = verifyToken({ userId }, token);
    // if (status) {
    //     console.log(`Execute expensive/sensitive API call for ${userId}`);
    // } else {
    //     console.log(`Invalid user for ${userId}, logged in user is ${data.userId}`);
    // }
}