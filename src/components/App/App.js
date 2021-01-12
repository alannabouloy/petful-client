import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import AdoptionPage from '../../routes/AdoptionPage/AdoptionPage'
import LandingPage from '../../routes/LandingPage/LandingPage'
import './App.css'


export default class App extends Component { 
    render(){
        return(
            <div className='app'>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/adoption' component={AdoptionPage}/>
            </div>
        )
    }
}