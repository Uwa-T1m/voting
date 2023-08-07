import {Link} from 'react-router-dom'
import {FaAngleLeft} from 'react-icons/fa'
import {Center} from '../components'

const ReportResults = ({ballots}) => {
  // Find the candidate with the most votes
  const ballot = ballots[ballots.length - 1]
    const candidates = ballot.candidates

  const winner = candidates.reduce((prevCandidate, currentCandidate) => {
    const prevVotes = localStorage.getItem(prevCandidate) || 0;
    const currentVotes = localStorage.getItem(currentCandidate) || 0;
    return parseInt(currentVotes, 10) > parseInt(prevVotes, 10) ? currentCandidate : prevCandidate;
  }, candidates[0]);

  return (
    <Center>
        <div className='p-6 shadow-sm shadow-slate-600'>
      <h4 className="mb-4">Results Reporting</h4>
      <p className='font-medium text-lg'>Winner: <span className='capitalize font-normal'>{winner}</span></p>
    </div>
    <Link className='capitalize flex items-center text-sky-500 absolute top-5 left-5' to='/dashboard'><FaAngleLeft /> back home</Link>
    </Center>
  );
};

export default ReportResults;
