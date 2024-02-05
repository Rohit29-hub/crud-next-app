"use client"

import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

export default function SaveButton(){
    const {pending} = useFormStatus();
    return (
        <Button color="primary" type="submit">{pending ? 'Updating..': 'Save'}</Button>
    )
}