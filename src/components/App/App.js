import React, { Component } from 'react'
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
        return <div></div>
    }
}