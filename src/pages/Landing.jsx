import Button from '../components/Button'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <>
    <nav className='flex flex-col md:flex-row'>
        <h3 className='text-xl w-full p-6 items-center font-bold'>Your<span className='text-sky-500'>Vote</span></h3>
    </nav>
    <div className="m-auto p-6 w-fit h-fit">
        <h1 className='mb-2'>voting system app</h1>
        <hr className='my-4'/> 
        <p className='m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, suscipit.</p>
        <Button><Link to='/register'>log in/register</Link></Button>
    </div>
    </>
  )
}

export default Landing