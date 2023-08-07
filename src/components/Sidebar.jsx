import {MdDashboard} from 'react-icons/md'
import { FaUserAlt, FaDoorOpen, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = ({isOpen, handleLogOut}) => {
  return (
    <div className={isOpen ? 'md:w-[inherit] bg-slate-900 w-full fixed md:left-0 shadow-sm shadow-slate-600 h-screen left-0' : ' left-[-100%] hidden'}>
    <Link to='/dashboard' className='flex text-center text-sky-500 p-4 items-center gap-4 md:text-lg'><MdDashboard className='text-gray-300'/> Dashboard</Link>
    <Link to='/create-ballot' className='flex text-center text-sky-500 p-4 items-center gap-4 md:text-lg'><FaPlus className='text-gray-300'/> Create Ballot</Link>
    <Link to='/count-votes' className='flex text-center text-sky-500 p-4 items-center gap-4 md:text-lg'><FaUserAlt className='text-gray-300'/> Tabulate Votes</Link>
    <button className='flex text-center text-sky-500 p-4 items-center gap-4 md:text-lg' onClick={handleLogOut}><FaDoorOpen className='text-gray-300'/> Log Out</button>
  </div>
  )
}

export default Sidebar