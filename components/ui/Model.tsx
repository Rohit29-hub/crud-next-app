import React from 'react'

const Model = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='w-full h-screen z-[1054] fixed top-0 left-0 right-0 grid place-content-center backdrop-blur-[10px]'>
            {children}
        </div>
    )
}

export default Model