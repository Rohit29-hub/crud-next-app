'use client'
import React from 'react'
import { Spinner } from '@nextui-org/react'

const Loading = ({color}:{color: any}) => {
  return (
    <Spinner label='Loading..' color={color}>

    </Spinner>
  )
}

export default Loading