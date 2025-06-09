'use client'

import {useContext} from "react";
import StyledButton from "@/components/styled_button";
import {UserContext} from "@/components/user_context";
import {verifyToken} from "@/utils/auth";
import InsecureApiCall from "@/utils/insecure_api_call";

export default function Old() {
    const {user} = useContext(UserContext);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <StyledButton onClick={() => verifyToken({userId: user?.userId}, user?.token, InsecureApiCall)}>Make Call</StyledButton>
        </div>
    )
}