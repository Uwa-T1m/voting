import { useState } from 'react';
import { toast } from 'react-toastify'
import { Button, Center, TextInput } from '../components'
import { FaCheckCircle, FaAngleLeft } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const CreateBallot = ({ballots, setBallots, session, setSession, candidates, setCandidates}) => {
    const [newCandidate, setNewCandidate] = useState('');

    const handleAddCandidate = () => {
        if (newCandidate.trim() !== '') {
            setCandidates(prevCandidates => [...prevCandidates, newCandidate]);
            setNewCandidate('');
        }
        else {
            toast.error('Please provide all necessary fields')
        }
    };

    const handleCreateBallot = () => {
        const newBallot = { session, candidates }
        setBallots([...ballots, newBallot])

        toast.success('Ballot Created Successfully')

        setSession('');
        setCandidates([]);
        setNewCandidate('');
    };
    return (
        <Center>
            <div className="p-6 shadow-sm shadow-slate-600">
                <TextInput
                    type='text'
                    value={session}
                    name='session'
                    handleChange={e => setSession(e.target.value)}
                />

                <TextInput
                    type='text'
                    name='candidates'
                    value={newCandidate}
                    handleChange={e => setNewCandidate(e.target.value)}
                />

                <Button className='w-full block' style={{ width: '300px' }} onClick={handleAddCandidate}>Add Candidate</Button>
                <ul className='my-4'>
                    {
                        candidates.map((candidate, index) => (
                            <li key={index} className='flex gap-1 items-center'><FaCheckCircle className='text-sky-500' /> {candidate}</li>
                        ))
                    }
                </ul>
                <Button className='w-full block' style={{ width: '300px' }} onClick={handleCreateBallot}>Create Ballot</Button>

            </div>
    <Link className='capitalize flex items-center text-sky-500 absolute top-5 left-5' to='/dashboard'><FaAngleLeft /> back home</Link>
        </Center>
    )
}

export default CreateBallot