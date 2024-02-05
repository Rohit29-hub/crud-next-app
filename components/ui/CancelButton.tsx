"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const CancelButton = () => {
    const router = useRouter();
    function navigateUser(){
        router.back();
    }
    return (
        <button onClick={navigateUser}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}

export default CancelButton