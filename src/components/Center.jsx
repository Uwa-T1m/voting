import React from 'react'

const Center = ({children}) => {
  return (
    <div className='flex items-center justify-center w-full h-screen flex-col relative'>{children}</div>
  )
}

export default Center