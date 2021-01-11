import React from 'react'

export default function Button(props){
    if(props.type){
        return(
            <div className='button-div'>
                <button type={props.type}>
                    {props.buttonText}
                </button>
            </div>
            
        )
    }
    if(props.adopt)
    return (
        <div className='button-div'>
            <button onClick={() => props.handleAdopt(props.adopt)}>
                {props.buttonText}
            </button>
        </div>
    )
    
}