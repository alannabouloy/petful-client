import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import image from '../../cat-and-dog.jpg'
import './LandingPage.css'


export default class LandingPage extends Component {
    render(){
        return (
            <div className='landing-page'>
                <Header />
                <img className='main-image' alt='cat and dog snuggling' src={image}/>
                <section className='welcome'>
                    <div className='welcome-heading'>
                        <h2>Welcome to the Petful Adoption Site!</h2>
                    </div>
                    <div className='welcome-msg'>
                        <p>
                            Here at Petful, we're dedicated to making sure that every pet finds their forever home.
                            That's why we have a well-developed system for the adoption process.
                        </p>
                        <p>
                            Once you click on the button down below, you'll be taken to our Adoption page where you can see a list of the people in line to adopt. At any point,
                            you'll be able to join the list of people waiting to adopt. Once you've joined the queue, you'll be able to see the current pets up for adoption.
                        </p> 
                        <p>
                            To make sure that each animal finds their forever home, Petful only displays the animals next in line for adoption at any given point.
                            Once your name pops up in queue, you'll be able to see whichever animals are next in line, and choose if you'd like to adopt them.
                            If you're not crazy about the animal you see, you can always choose not to adopt and rejoin the line to see if you'll fit better
                            with the next animal.
                        </p>
                        <p>
                            Be warned! We have a limited number of animals at the shelter, and if we run out before your name is called,
                            you'll have to wait until we get more in.
                        </p>
                        <p>
                            Now that you know the process, you can click the button down below to get started. Your new furry companion is just a click away!
                        </p>
                    </div>
                    <div className='button-div'>
                        <button>Get Started</button>
                    </div> 
                </section>
                
            </div>
        )
    }
}