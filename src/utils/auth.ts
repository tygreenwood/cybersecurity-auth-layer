'use server'

import {secretKey} from "@/utils/key";

const jwt = require("jsonwebtoken");

export async function verifyToken<T extends Object>(information: T, token, serverFunction: (arg: T) => any, { strict } = {strict: false}) {
    const data = jwt.verify(token, secretKey);
    let status = true;
    Object.keys(information).forEach((key) => {
        if ((!data[key] && strict) || (information[key] && information[key] != data[key])) {
            status = false;
        }
    });
    if (status) {
        return serverFunction(information);
    } else {
        console.error("Invalid information: ", information);
    }
}