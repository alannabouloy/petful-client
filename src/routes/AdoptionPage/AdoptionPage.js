import React, { Component } from 'react'
import AdoptionSection from '../../components/AdoptionSection/AdoptionSection'
import Header from '../../components/Header/Header'
import Queue from '../../components/Queue/Queue'
import ApiService from '../../services/api-service'
import helper from '../../helper'

export default class AdoptionPage extends Component {
    state = {
        people: [],
        pets: {
            cat: {},
            dog: {}
        },
        userInQueue: false,
        adopting: false,
        user: {}
    }
    componentDidMount(){
        ApiService.getPeople()
            .then(res => {
                const people = res
                this.setState({people})
            })
            .then(() => this.timedDequeue())
    }
    handleJoinQueue = () => {
        this.enqueuePerson(this.state.user)
        .then(() => {
            this.timedEnqueue()
        })
    }

    handlePetAdoption = (person, petType) => {
        if(!petType){
            petType = helper.generatePet()
            console.log('pet type is', petType)
        }
        if(petType === 'both'){
            const cat = this.dequeuePet('cat')
            const dog = this.dequeuePet('dog')
            return `Yay! ${person.name} has adopted ${cat.name} and ${dog.name}!`     
        }
        const pet = this.dequeuePet(petType).then(() => `Yay! ${person.name} has adopted ${pet.name}!`)

    }

    enqueuePerson = person => {
        if(person){
            ApiService.enqueuePerson(person)
            .then(res => {
                const people = res
                this.setState({people})
            })
        }
        else {
            ApiService.enqueuePerson()
            .then(res => {
                const people = res
                this.setState({people})
            })
        }
    }

    dequeuePerson = () => {
        ApiService.dequeuePerson()
        .then(res => {
            const person = res.name
            return person
        })
    }

    dequeuePet = petType => {
        ApiService.dequeuePet(petType)
        .then(res => res)
    }

    timedEnqueue = () => {
        const userIndex = this.state.people.findIndex(person => person.user === true)
        const behindUser = this.state.people.slice(userIndex, this.state.people.length)
          //check if 5 people in queue behind user
        if(behindUser.length >= 5){
            //returns if true
            return
        }
        setTimeout(this.enqueuePerson(), 5000)
        this.timedEnqueue()
    }

    timedDequeue = () => {
        if(this.state.people[0].user){
            return
        }
        if(this.state.people.length === 0){
            return
        }
        setTimeout(this.handlePetAdoption(this.state.people[0]), 5000)
        this.timedDequeue()
    }

    getTopOfQueue = () => {
        if (this.state.people.length > 0){
            return this.state.people[0].name
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