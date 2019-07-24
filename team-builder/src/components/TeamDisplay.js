import React from 'react';

function TeamDisplay(props) {
    const {teamMembers} = props;

    return (
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
    )
}


export default TeamDisplay