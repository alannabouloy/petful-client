import React from 'react'
import Button from '../Button/Button'

export default function Pet(props){
    if(props.pet.name){
        return(
            <div className='pet'>
                <img src={props.pet.imageURL} alt={props.pet.description}/>
                <p>Hi! My name is {props.pet.name}. I'm a {props.pet.age} year-old {props.pet.gender} {props.pet.breed}. My story? {props.pet.story}</p>
                <Button handleAdopt={props.handleAdopt} adopt={props.pet.type} buttonText='Adopt Me'/>
            </div>
        )
    }
    return <div></div>
}