import React from 'react';


function Form() {

    function handleChange(event) {
        setTeamMember({ ...teamMembers, [event.target.id]: event.target.value });
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTeamMember({ ...teamMembers, [event.target.id]: event.target.value });
        console.log(teamMembers)
    }
    return (
        <>
            <fieldset>
                <form onSubmit={event => handleSubmit(event)}>
                    <label>Input new member name:</label>
                    <input type='text' id='name' value={teamMembers.name} onChange={handleChange}></input>

                    <label>Roll:</label>
                    <input type='text' id='roll' value={teamMembers.roll} onChange={handleChange}></input>

                    <label>Member Email:</label>
                    <input type='text' id='email' value={teamMembers.email} onChange={handleChange}></input>

                    <button>Submit!</button>
                </form>
            </fieldset>
        </>
    )
}

export default Form
