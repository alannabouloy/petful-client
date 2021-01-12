import React from 'react'
import Pet from '../Pet/Pet'
import Button from '../Button/Button'
import './PetSelection.css'

export default function PetSelection(props){
    let pets = 'All of the pets have been adopted! Yay!!'
    let button=<div className='button-div'></div>
    if(props.pets.cat || props.pets.dog){
        pets = [props.pets.cat, props.pets.dog].map((pet, i) => <Pet handleAdopt={props.handleAdopt} key={i} pet={pet}/>)
        button = (
            <Button handleAdopt={props.handleAdopt} adopt='both' buttonText='Adopt Both'/>
        )
    }
    return (
        <div>
            <div className='pet-selection'>
                {pets}
            </div>
            <div className='adopt-both'>
                    {button}
            </div>
        </div>
    )
        
}