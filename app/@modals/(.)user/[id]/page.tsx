
import Model from '@/components/ui/Model';
import { getSingleUser } from '@/lib/getSingleUser'
import React from 'react'
import { Input } from '@nextui-org/react';
import Image from 'next/image';
import CancelButton from '@/components/ui/CancelButton';
import SaveButton from '@/components/ui/SaveButton';
import { updateUser } from '@/actions/user';

const ParalleRender = async ({ params }: { params: any }) => {

    const user = await getSingleUser(params.id);
    const upDateUser = updateUser.bind(null,params.id);

    return (
        <Model>
            <div className='sm:w-96 w-80 m-1 h-auto sm:m-auto  border border-solid border-white bg-[#00000091] rounded-lg py-4 backdrop-blur-[15px] relative'>
                <div className='absolute right-1 top-1'><CancelButton /></div>
                <form action={upDateUser} className='flex items-center flex-col gap-y-2 px-3 w-full h-full'>
                    <Image src={user.image} width={100} height={100} alt='' priority={true}></Image>
                    <Input type="text" name='name' isRequired variant={"underlined"} label="Name" placeholder="Enter your changed name." defaultValue={user.name} />
                    <Input type="text" name='jobtype' isRequired variant={"underlined"} label="Position" placeholder="Enter your changed job role." defaultValue={user.jobtype} />
                    <Input type="text" name='phone' isRequired variant={"underlined"} label="Phone" placeholder="Enter your changed phone." defaultValue={user.phone} />
                    <Input type="text" name='country' isRequired variant={"underlined"} label="Country" placeholder="Enter your changed Country." defaultValue={user.country} />
                    <SaveButton />
                </form>
            </div>
        </Model >
    )
}

export default ParalleRender