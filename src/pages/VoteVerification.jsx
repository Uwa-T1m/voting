import React, { useState } from 'react';
import {toast} from 'react-toastify'
import {Center, Button} from '../components'

const VoteVerification = ({ voterId, voteSubmitted }) => {
  const [verificationStatus, setVerificationStatus] = useState('');
    voterId =localStorage.getItem('voterId')
  function handleVerifyVote() {
        const voteStatus = localStorage.getItem('voterId');

        if (voteStatus) {
            setVerificationStatus('Vote Verified');
        } else {
            setVerificationStatus('Vote Not Found');
        }
        toast.info(verificationStatus)
    }

  return (
   <Center>
     <div className='p-6 shadow-sm shadow-slate-600 rounded-lg border-t-4 border-t-sky-500'>
      <h2 className="mb-4">Vote Verification</h2>
      <p>Voter ID: <span className='font-mono  mt-4 mb-4'>{voterId}</span></p>
      <Button onClick={handleVerifyVote} disabled={voteSubmitted} className="mt-4 w-full">
        Verify Vote
      </Button>
    </div>
   </Center>
  );
};

export default VoteVerification;
