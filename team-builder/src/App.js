import React from 'react';
import { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
  const [teamMembers, setTeamMember] = useState('');

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Form teamMembers={teamMembers} setTeamMember={setTeamMember}/>
      <div>
            <h1>Current Members:</h1>
            <ul>
                {teamMembers.map(member => {
                    return(
                    <li>
                        <h3>{member.name}</h3>
                        <h4>{member.roll}</h4>
                        <p>{member.email}</p>
                        <button>Edit Member</button>
                    </li>
                    )           
                })}
            </ul>
        </div>
    </div>
  );
}

export default App;
