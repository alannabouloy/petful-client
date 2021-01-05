import React, { Component } from 'react'
import Header from '../../components/Header/Header'

export default class AdoptionPage extends Component {
    state = {
        people: [],
        pets: {
            cat: {},
            dog: {}
        },
        userInQueue: false,
    }

    handleJoinQueue = () => {
        //enqueues person
        //sets state to update queue
        //starts timed enqueue function
    }

    handlePetAdoption = (person, petType) => {
        //check petType
        //if both dequeue two pets
        //else dequeue one pet
        //return message about adoption
    }

    enqueuePerson = person => {
        //if person then enqueues them
        //else randomly generate person
        //enqueue generated person
    }

    dequeuePerson = () => {
        //takes top person of queue
        //dequeues person
        //returns dequeued person
    }

    dequeuePet = petType => {
        //dequeues pet
        //returns dequeues pet
    }

    timedEnqueue = () => {
        //check if 5 people in queue behind user
        //returns if true
        //counts to 5 seconds
        //enqueues person
        //updates state
        //calls timedEnqueue
    }

    timedDequeue = () => {
        //check if user is at top of queue
        //returns if true
        //else counts to 5 seconds
        //dequeues person
        //updates state
        //calls timedDequeue
    }


    
    render(){
        return (
            <div>
                {/* Heading */}
                <Header />
                <section className='adoption'>
                    <div className='pet-selection'>
                        {/* Image if there is one (and if user has joined queue) */}
                        {/* Pet information and Adopt Me Button */}
                    </div>
                    {/* Button to adopt both pets*/}
                    {/* Name of who is up in queue */}
                </section>
                <section className='queue'>
                    {/* Current Queue */}
                    {/* Button to join queue */}
                </section>
            </div>
        )
    }
}