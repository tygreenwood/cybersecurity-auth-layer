'use server'

import jwt from "jsonwebtoken";
import {secretKey} from "@/utils/auth";

export async function generateAuthToken(userId) {
    const payload = {
        userId: userId,
    }
    return jwt.sign(payload, secretKey, { expiresIn: "24h" });
}