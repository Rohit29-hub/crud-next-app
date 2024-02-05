
import React from 'react'
import { useFormStatus } from "react-dom";
import { Button } from '@nextui-org/react'


const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" color="primary" aria-disabled={pending}>
            {pending ? 'Adding...' : "Add user"}
        </Button>
    )
}

export default SubmitButton