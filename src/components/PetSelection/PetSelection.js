import React from 'react'
import Pet from '../Pet/Pet'

export default function PetSelection(props){
    let pets = [props.pets.cat, props.pets.dog].map((pet, i) => <Pet key={i} pet={pet}/>) || 'All of the pets have been adopted! Yay!!'
    let button=<div className='button-div'></div>
    if(props.pets){
        button = (
        <div className='button-div'>
            <button>Adopt Both</button>
        </div>
        )
    }
    return (
        <div className='pet-selection'>
            {pets}
            {button}
        </div>
    )
}