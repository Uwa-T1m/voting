import {Link} from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa'
import { Center} from '../components'

const VoteTabulation = ({ ballots }) => {
    const ballot = ballots[ballots.length - 1]
    const candidates = ballot.candidates

    const voteCount = candidates.reduce((acc, candidate) => {
        const candidateVotes = ballot.candidates.length * Math.floor(Math.random()*30) || 0;
        return { ...acc, [candidate]: parseInt(candidateVotes, 10) };
    }, {});

    return (
        <Center>
            <div className='p-6 shadow-sm shadow-slate-600'>
            <h3 className='text-xl w-full p-6 items-center font-bold'>Your<span className='text-sky-500'>Vote</span></h3>
            <p className='my-6'>The previously conducted election results have been tabulated and are as follows:</p>
            <ul className='text-lg'>
                {candidates.map((candidate, index,) => (
                    <li key={index}>
                        {candidate}: {voteCount[candidate] || 0} votes
                    </li>
                ))}
            </ul>
        </div>
        <Link className='capitalize flex items-center text-sky-500 absolute top-5 left-5' to='/dashboard'><FaAngleLeft /> back home</Link>
        </Center>
    ); 
};

export default VoteTabulation;
