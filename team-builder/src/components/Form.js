import React from 'react';


function Form(props) {
    //const {teamMembers, setTeamMember} = props;
console.log('props in form before and functions are called...')
console.log(props)


    function handleChange(event) {
        console.log(event.target.value)
        props.setTeamMember({...props.users, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setTeamMember([ ...props.teamMembers, {...props.users}]);
        console.log('teamMembers props after handling by handleSubmit...')
        console.log(props.teamMembers);
    }
    return (
        <>
            <fieldset>
                <form onSubmit={event => handleSubmit(event)}>
                    <>
                    <label>Input new member name:
                        <input type='text' name='name' value={props.teamMembers.name} onChange={handleChange}></input>
                    </label>
                    <label>Roll:
                        <input type='text' name='roll' value={props.teamMembers.roll} onChange={handleChange}></input>
                    </label>
                    <label>Member Email:
                        <input type='text' name='email' value={props.teamMembers.email} onChange={handleChange}></input>
                    </label>

                    <button>Submit!</button>
                    </>
                </form>
            </fieldset>
        </>
    )
}

export default Form
