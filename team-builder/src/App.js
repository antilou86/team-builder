import React from 'react';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [teamMembers, setTeamMember] = useState([]);
  const [user, setUser] = useState({});
  
  console.log(teamMembers)
  return (
    <div className="App">

      <header className="App-header">
        <h1> TEAM BUILDER </h1>
      </header>

      <Form teamMembers={teamMembers} setTeamMember={setTeamMember} user={user} setUser={setUser}/>
      
      <div>
            <h2>Current Members:</h2>
              <>
              <div>
                {teamMembers.map(member => (
                  <>
                    <h3>{member.name}</h3>
                    <h4>{member.roll}</h4>
                    <p>{member.email}</p>
                    <button>Edit Member</button>
                  </>
                ))}
              </div>
              </>
        </div>

    </div>
  );
}

export default App;
