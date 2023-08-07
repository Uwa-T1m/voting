import React from 'react'
import { Center, Button } from '../components'
import { FaAngleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <Center>
        <h1>Sorry 😥</h1>
        <p className='my-4'>We can't seem to find the page you are looking for!</p>
        <Button><NavLink to='/'  className='flex items-center'><FaAngleLeft /> back home</NavLink></Button>
    </Center>
  )
}

export default Error