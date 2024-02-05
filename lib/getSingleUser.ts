// get the Single user
export async function getSingleUser(id: any){
    const res = await fetch(`${process.env.SECRET_API_KEY!}/${id}`,{
        cache : 'no-cache',
        next: {tags: ['users']}
    })
    const user = await res.json();
    
    return user;
}