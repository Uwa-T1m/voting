import { FaAlignLeft } from 'react-icons/fa'
import { useState } from 'react'
import {Sidebar} from '../components'
import { Link } from 'react-router-dom'

const AdminPanel = ({handleLogOut, user}) => {
const [isOpen, setIsOpen] = useState(false)


const handleSidebar = () => setIsOpen(!isOpen);
  return (
<>
<nav className="w-full p-6 bg-slate-900 flex items-center justify-between">
           <div className="flex gap-3">
           <button className="font-bold text-xl text-sky-500" onClick={handleSidebar}><FaAlignLeft /></button>
            <h3 className='font-bold text-xl'>Dash<span className='text-sky-500'>board</span></h3>
           </div>
        </nav>
        <div className="flex min-h-screen w-full">
          <div className={isOpen ? "w-1/5 block" : 'hidden'}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} handleLogOut={handleLogOut}/>
          </div>
            <div className={isOpen ? 'w-4/5' : 'w-full'}> 
            <div className="w-full py-8 px-4 text-lg">Good day, <span className='font-semibold'>{user.email}</span></div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 w-[90%] m-auto ">
             <Link to='/create-ballot' className="p-6 bg-sky-500 rounded-lg font-bold">Create Ballot</Link>
             <Link to='/create-ballot' className="p-6 bg-red-500 rounded-lg font-bold">Add Candidate</Link>
             <Link to='/create-ballot' className="p-6 bg-teal-500 rounded-lg font-bold">Add Sessions</Link>
             <Link to='/count-votes' className="p-6 bg-yellow-500 rounded-lg font-bold">Tabulate Votes</Link>
            </div>
            </div>
        </div>

</>
    )
}

export default AdminPanel;