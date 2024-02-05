"use client"
import { Button } from "@nextui-org/react"

export default function Error({ error, reset }: {
    error: any,
    reset: () => void
}) {
    return (
        <div className="m-6">
            <h1 className="text-4xl">{error?.message}</h1>
            <Button color="danger" onClick={() => reset()}>Try again</Button>
        </div>
    )
}