import React, { Component } from 'react'
import LandingPage from '../../routes/LandinPage/LandingPage'
import ApiService from '../../services/api-service'
import PeopleList from '../PeopleList/PeopleList'

export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount(){

    }

    getPeople = () => {
        ApiService.getPeople()
            .then(res => {
                const people = res
                this.setState({people})
            })
    }
    
    render(){
        return(
            <div>
                <LandingPage/>
            </div>
        )
    }
}