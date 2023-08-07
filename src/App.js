import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import { Wrapper } from './components';
import {
  Landing,
  AdminPanel,
  Register,
  UserPanel,
  CreateBallot,
  BallotPreview,
  Error,
  VoteCasting,
  VoteVerification,
  VoteTabulation,
  ReportResults,
} from './pages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [session, setSession] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [ballots, setBallots] = useState(JSON.parse(localStorage.getItem('ballots')) || [])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleVote = () => {
    if (selectedCandidate) {
      localStorage.setItem('selected_candidate', selectedCandidate);

      toast.success(`You have voted for: ${selectedCandidate}`);

      setSelectedCandidate('');
    } else {
      toast.error('Please select a candidate before submitting your vote.');
    }
  };

  const handleLogOut = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('users')
      setUser([])
      window.location.href = '/landing'
    }
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user))
  })

  useEffect(() => {
    localStorage.setItem('ballots', JSON.stringify(ballots))
    localStorage.setItem('voterId', user.userId)
  })

  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path='landing' element={<Landing />} />
          <Route path='count-votes' element={user !== [] && user.admin === true && <VoteTabulation ballots={ballots} />} />
          <Route path='verify-vote' element={user !== [] && <VoteVerification />} />
          <Route path='see-results' element={user !== [] && <ReportResults ballots={ballots} />} />
          <Route path='*' element={<Error />} />
          <Route path='/cast-vote' element={user !== [] && <VoteCasting
            ballots={ballots}
            selectedCandidate={selectedCandidate}
            setSelectedCandidate={setSelectedCandidate}
            handleVote={handleVote}
          />} />
          <Route path='/create-ballot' element={user !== [] && <CreateBallot
            ballots={ballots}
            setBallots={setBallots}
            session={session}
            candidates={candidates}
            setSession={setSession}
            setCandidates={setCandidates}
          />} />
          <Route path='/preview-ballot' element={<BallotPreview ballots={ballots} />} />
          <Route path='/' element={isLoggedIn === true
            ? <Navigate to='dashboard' user={user} />
            : <Navigate to='landing' user={user} />} />
          <Route path='register' element={
            <Register
              setIsLoggedIn={setIsLoggedIn}
              setUser={setUser}
              admin={admin}
              setAdmin={setAdmin}
            />
          }
          />
          <Route path='dashboard' element={user.admin === true
            ? <AdminPanel user={user} handleLogOut={handleLogOut} />
            : <UserPanel
              user={user}
              handleLogOut={handleLogOut}
            />} />
        </Routes>
        <ToastContainer position='top-center' />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
