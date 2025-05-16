'use client'

import {useState} from "react";
import OldApiCall from "@/utils/old_api_call";
import StyledButton from "@/components/styled_button";

export default function Old() {
    const [userId, setUserId] = useState(42);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <StyledButton onClick={() => OldApiCall(userId)}>Make Call</StyledButton>
        </div>
    )
}