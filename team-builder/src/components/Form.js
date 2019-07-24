import React from 'react';
import {useState} from 'react';
import TeamDisplay from './TeamDisplay';

function Form() {

    function handleChange(event) {
        const [teamMember, setTeamMember]=useState('');
        setTeamMember({ ...teamMember, [event.target.id]: event.target.value });
        console.log(event.target.value)
    }
        return (
            <>
            <fieldset>
                <form>
                    <label>Input new member name:</label>
                    <input type='text' id='name' value={teamMember.name} onChange={handlechange}></input>
                    <button>Submit!</button>
                </form>
            </fieldset>
            <TeamDisplay teamMember={teamMember}/>
            </>
        )
    }

    export default Form
