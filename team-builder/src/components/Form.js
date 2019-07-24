import React from 'react';


function Form(props) {
    //const {teamMembers, setTeamMember} = props;
console.log(props)
    function handleChange(event) {
        props.setTeamMember({ ...props.teamMembers, [event.target.id]: event.target.value });
        console.log(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setTeamMember({ ...props.teamMembers, [event.target.id]: event.target.value });
        console.log(props.teamMembers)
    }
    return (
        <>
            <fieldset>
                <form onSubmit={event => handleSubmit(event)}>
                    <>
                    <label>Input new member name:</label>
                    <input type='text' id='name' value={props.teamMembers.name} onChange={handleChange}></input>

                    <label>Roll:</label>
                    <input type='text' id='roll' value={props.teamMembers.roll} onChange={handleChange}></input>

                    <label>Member Email:</label>
                    <input type='text' id='email' value={props.teamMembers.email} onChange={handleChange}></input>

                    <button>Submit!</button>
                    </>
                </form>
            </fieldset>
        </>
    )
}

export default Form
