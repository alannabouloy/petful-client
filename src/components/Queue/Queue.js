import React from 'react'
import NameForm from '../NameForm/NameForm'
import PeopleList from '../PeopleList/PeopleList'
import './Queue.css'

export default function Queue(props){
    return(
        <section className='queue'>
            <h3>People waiting to adopt:</h3>
            <PeopleList people={props.people}/>
           
           
            <div className='join-queue'>
                <h3>Join the queue!</h3>
                <NameForm addUser={props.addUser}/>
            </div>
            
        </section>
    )
}