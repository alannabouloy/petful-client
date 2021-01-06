import React from 'react'

export default function Pet(props){
    return(
        <div className='pet'>
            <img src={props.pet.imgUrl} alt={props.pet.description}/>
            <p>Hi! My name is {props.pet.name}. I'm a {props.pet.age} year-old {props.pet.gender.toLowerCase()} {props.pet.breed}. My story? {props.pet.story}</p>
            <button>Adopt Me</button>
        </div>
    )
}