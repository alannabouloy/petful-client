import React from 'react'

export default function Button(props){
    return(
        <div className='button-div'>
            <button type={props.type}>
                {props.buttonText}
            </button>
        </div>
        
    )
}