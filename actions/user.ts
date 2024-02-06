'use server'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'


// Add the User
const schema = z.object({
    name: z.string({
        required_error: "Name is Required",
        invalid_type_error: 'Name must be a string',
    }),
    email: z.string({
        required_error: "Email is Required",
        invalid_type_error: 'Email must be a string',
    }),
    phone: z.string({
        required_error: "Phone is Required",
        invalid_type_error: 'Invalid Phone number',
    }),
    jobtype: z.string({
        required_error: "Phone is Required",
        invalid_type_error: 'Invalid Phone number',
    }),
    country: z.string({
        required_error: "Phone is Required",
        invalid_type_error: 'Invalid Phone number',
    }),
})
export async function addUser(formData: FormData) {
    const validatedFields = schema.safeParse({
        name: formData.get('name')?.toString(),
        email: formData.get('email')?.toString(),
        phone: formData.get('phone')?.toString(),
        country: formData.get('country')?.toString(),
        jobtype: formData.get('role')?.toString(),
    })

    if (!validatedFields.success) {
        return {
            message : "fill Data Properly.",
        }
    }
    
    const data = {...validatedFields.data}
    
    await fetch(process.env.SECRET_API_KEY!,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    revalidateTag('users');
}


// Update the user
export async function updateUser(userId:any,formData: FormData){
    const name = formData.get('name');
    const jobtype = formData.get('jobtype');
    const phone = formData.get('phone');
    const country = formData.get('country');

    const updated_data = {
        name,
        jobtype,
        phone,
        country
    }

    await fetch(`${process.env.SECRET_API_KEY!}/${userId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updated_data)
    })

    revalidateTag('users');
    redirect('/');
}


// Delete the user 
export async function deleteUser(userId:any){
    await fetch(`${process.env.SECRET_API_KEY!}/${userId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    revalidateTag('users');
}