import { Link } from "react-router-dom"
import { Center } from "../components"

const UserPanel = ({user, handleLogOut}) => {
  return (
    <Center>
        <div className="w-full items-center flex justify-center flex-col gap-4">
            <p>Good day, <span className="font-semibold">{user.email}</span> </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-[90%]">
              <Link to='/preview-ballot' className="p-6 bg-sky-500 rounded-lg capitalize font-bold">preview ballot</Link>
              <Link to='/cast-vote' className="p-6 bg-sky-500 rounded-lg capitalize font-bold">cast vote</Link>
              <Link to='/verify-vote' className="p-6 bg-sky-500 rounded-lg capitalize font-bold">verify vote</Link>
              <Link to='/see-results' className="p-6 bg-sky-500 rounded-lg capitalize font-bold">see election results</Link>
              <button className="p-6 bg-sky-500 rounded-lg capitalize font-bold text-left" onClick={handleLogOut}>log out</button>
            </div>
        </div>
    </Center>
  )
}

export default UserPanel