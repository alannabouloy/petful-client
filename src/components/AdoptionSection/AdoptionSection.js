import React from 'react'
import PetSelection from '../PetSelection/PetSelection'

export default function AdoptionSection(props){
    let adoptionMsg='There is no one in line at the moment.'
    
    if(props.name){
        adoptionMsg = `${props.name}, it's time to pick your new pet!`
        
        if(props.adopting){
            adoptionMsg = props.message
        }
    }
    
    if(props.user.name){
        return(
            <section className='adoption'>
                <PetSelection pets={props.pets}/>
                <div className='adoption-msg'>
                    <h3>{adoptionMsg}</h3>
                </div>
            </section>
        )
    }
    
    return(
        <section className='adoption'>
            <div className='adoption-msg'>
                <h3>{adoptionMsg}</h3>
            </div>
        </section>
    )
}