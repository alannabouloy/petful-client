import React, { Component } from 'react'

export default class NameForm extends Component{
    state = {
        name: ''
    }
    
    changeName = e => {
        const name = e.target.value
        this.setState({name})
    }

    onSubmit = e => {
        e.preventDefault()
        const name = this.state.name
        this.props.addUser(name)
    }

    render(){
        return (
            <form id='name-form'onSubmit={e => this.onSubmit(e)}>
                <div className='form-label'>
                    <label htmlFor='name'>Full Name: </label>
                </div>
                <div className='form-field'>
                <input type='text' id='name'  placeholder='Jane Doe' required onChange={e => this.changeName(e)}/>
                </div>
                <div className='button-div'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
    
}