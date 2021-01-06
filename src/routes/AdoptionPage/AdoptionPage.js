import React, { Component } from 'react'
import AdoptionSection from '../../components/AdoptionSection/AdoptionSection'
import Header from '../../components/Header/Header'
import Queue from '../../components/Queue/Queue'

export default class AdoptionPage extends Component {
    state = {
        people: [],
        pets: {
            cat: {},
            dog: {}
        },
        userInQueue: false,
        adopting: false,
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

    getTopOfQueue = () => {
        if (this.state.people){
            return this.state.people[0]
        }
        return null
    }
    
    render(){
        let topOfQueue = this.getTopOfQueue()
        return (
            <div>
                <Header />
                <AdoptionSection pets={this.state.pets} name={topOfQueue} adopting={this.state.adopting}/>
                <Queue people={this.state.people}/>
            </div>
        )
    }
}