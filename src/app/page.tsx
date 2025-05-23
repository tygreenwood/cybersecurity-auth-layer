'use client'

import Image from "next/image";
import {test_call} from "@/utils/server_actions";
import {useState} from "react";

export default function Home() {
    const [userId, setUserId] = useState(42);
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={test_call}>Test</button>
    </div>
  );
}
