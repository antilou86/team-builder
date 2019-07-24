import React from 'react';

function TeamDisplay(props) {
    const {teamMember} = props;

    return (
        <div>
            <h1>Current Members:</h1>
            <ul>
                {teamMember.map(member => <li>{member}</li>)}
            </ul>
        </div>
    )
}


export default TeamDisplay