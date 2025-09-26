"use server"
import { FieldValues } from "react-hook-form"

/// not allowed see user data in network tab

export const register = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/user`, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res?.ok) {
        console.log("User Registration Field", res.text());

    }

    return res.json();
};


export const login = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API}/auth/login`, {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res?.ok) {
        console.log("User Registration Field", res.text());

    }
    return await res.json();
}