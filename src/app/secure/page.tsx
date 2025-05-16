'use client'

import {useEffect, useState} from "react";
import SecureAPICall from "@/utils/secure_api_call";
import {generateAuthToken} from "@/utils/generate_auth_token";
import StyledButton from "@/components/styled_button";

export default function Old() {
    const [userId, setUserId] = useState(42);
    const [token, setToken] = useState("");

    useEffect(() => {
        generateAuthToken(userId).then(res => setToken(res));
    });

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <StyledButton onClick={() => SecureAPICall(userId, token)}>Make Call</StyledButton>
        </div>
    )
}