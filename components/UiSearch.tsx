import React from 'react'
import { Input } from '@nextui-org/react'
import UiModal from './UiModal'
const UiSearch = ({handleChange}:{
  handleChange: any
}) => {

  return (
    <div className="w-full h-auto p-3 flex items-center gap-x-2 justify-center">
      <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} className="w-full sm:w-[70%]" type="text" label="Search" placeholder="Search by name.." />
      <UiModal />
    </div>
  )
}

export default UiSearch