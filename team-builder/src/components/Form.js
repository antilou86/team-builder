import React from 'react';


function Form(props) {
    //const {teamMembers, setTeamMember} = props;
console.log('props in the form before functions are called...')
console.log(props)


    function handleChange(event) {
        console.log(event.target.value)
        props.setUser({...props.user, [event.target.name]: event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.setTeamMember([ ...props.teamMembers, {...props.user}]);
        console.log('teamMembers props after handling by handleSubmit...')
        console.log(props.teamMembers);
    }
    return (
        <>
            <fieldset>
                <form onSubmit={event => handleSubmit(event)}>
                    <>
                    <label>Input new member name:
                        <input type='text' name='name' value={props.user.name} onChange={handleChange} />
                    </label>
                    <label>Roll:
                        <input type='text' name='roll' value={props.user.roll} onChange={handleChange} />
                    </label>
                    <label>Member Email:
                        <input type='text' name='email' value={props.user.email} onChange={handleChange} />
                    </label>

                    <button>Submit!</button>
                    </>
                </form>
            </fieldset>
        </>
    )
}

export default Form
