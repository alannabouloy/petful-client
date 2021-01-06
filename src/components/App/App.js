import React, { Component } from 'react'
import AdoptionPage from '../../routes/AdoptionPage/AdoptionPage'
import LandingPage from '../../routes/LandinPage/LandingPage'
import ApiService from '../../services/api-service'

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
                <AdoptionPage/>
            </div>
        )
    }
}