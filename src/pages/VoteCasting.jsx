import React from 'react'
import { Center, Button } from '../components'

const VoteCasting = ({ ballots, selectedCandidate, setSelectedCandidate, handleVote }) => {
  const ballot = ballots[ballots.length - 1]
  const session = ballot.session
  const candidates = ballot.candidates
  return (
  <Center>
      <div className='p-6 shadow-sm shadow-slate-600'>
      <h2 className="mb-4">Vote Casting</h2>
      <p>Session Name: {session}</p>
      <div className="my-4">
        <select
          id="candidateSelect"
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
          className="p-2 border rounded w-full text-slate-500"
        >
          <option value="">Select Candidate</option>
          {candidates.map((candidate, index) => (
            <option key={index} value={candidate}>
              {candidate}
            </option>
          ))}
        </select>
      </div>
      <Button
        onClick={handleVote}
        disabled={!selectedCandidate}
        className={`block w-full ${
          !selectedCandidate ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Cast Vote
      </Button>
    </div>
    
  </Center>
  );
};


export default VoteCasting