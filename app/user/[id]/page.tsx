import { getSingleUser } from '@/lib/getSingleUser';
import Image from 'next/image';
import React from 'react'

const SingleUser = async ({ params }: { params: any }) => {
    const user = await getSingleUser(params.id);
    return (
        <div className='w-full h-screen' style={{ background: `url(${user.backgroundimg})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='w-full h-screen grid place-content-center bg-[#ffffff21]'>
                <div className='sm:w-96 w-full h-auto m-auto  border border-solid border-white bg-[#00000091] rounded-lg py-4 backdrop-blur-[15px] flex items-center flex-col gap-y-2 relative'>
                    <Image src={user.image} width={100} height={100} alt='' priority={true}></Image>
                    <h1 className='text-3xl font-bold underline'>{user.name}</h1>
                    <p className='text-1xl font-medium'>Position:- {user.jobtype}</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus at nesciunt eligendi, saepe cumque similique vero quae consequuntur exercitationem voluptates, placeat ut ullam fugit iusto ipsa numquam? Quam, qui! Illum.</p>
                </div>
            </div>
        </div>
    )
}

export default SingleUser