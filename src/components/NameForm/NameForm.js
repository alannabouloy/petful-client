import React from 'react'

export default function NameForm(props){
    return (
        <form id='name-form'>
            <div className='form-label'>
                <label htmlFor='name'>Full Name: </label>
            </div>
            <div className='form-field'>
            <input type='text' id='name'  placeholder='Jane Doe' required/>
            </div>
            <div className='button-div'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}