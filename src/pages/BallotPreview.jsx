import { Center } from '../components'
import {Link} from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa'


const BallotPreview = ({ ballots }) => {
    console.log(ballots);
    return (
        <Center>
            <div className="shadow-sm p-6 shadow-slate-600 md:w-[400px] w-full text-center">
                <h5 className='capitalize mb-4'>available ballots</h5>
                <table className='w-full'>
                    <tr className='w-full flex items-center justify-between border-b p-2'>
                        <th className='w-1/2'>Sessions</th>
                        <th className='w-1/2'>Candidates</th>
                    </tr>
                    {
                        ballots.map((ballot, index) => (
                            <tr className='w-full flex items-center justify-between m-2'>
                                <td key={index} className='w-1/2'>{ballot.session}</td>
                                <td key={index} className='w-1/2'>{ballot.candidates.join(' ')}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
    <Link className='capitalize flex items-center text-sky-500 absolute top-5 left-5' to='/'><FaAngleLeft /> back home</Link>

        </Center>
    )
}

export default BallotPreview