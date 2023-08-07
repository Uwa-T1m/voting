import { toast } from 'react-toastify';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Center, TextInput } from '../components'
import { v4 as uuid } from 'uuid'

const Register = ({ setIsLoggedIn, setUser, admin, setAdmin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    if (email && password) {
      e.preventDefault();
      const newUser = {
        email, password, userId: uuid(), admin
      }
      setUser(newUser)
      setIsLoggedIn(true)

      navigate('/')
    }
    else {
      toast.error('Please provide all fields')
    }
  }

  return (
    <Center>
      <div className="shadow-sm shadow-slate-600 p-6">
        <form action="" onSubmit={handleSubmit}>
          <TextInput type='text' name='email address' handleChange={(e) => setEmail(e.target.value)} />
          <TextInput type='password' name='password' handleChange={(e) => setPassword(e.target.value)} />
          <label htmlFor="admin" className='capitalize mr-2'>admin:</label>
          <input type="checkbox" name="" id="admin" onChange={(e) => { setAdmin(e.target.checked) }} />
          <Button className='block w-full' onClick={handleSubmit}>Register</Button>

        </form>
      </div>
    </Center>
  )
}

export default Register