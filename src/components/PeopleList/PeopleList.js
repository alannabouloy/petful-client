import React from 'react'
import './PeopleList.css'

export default function PeopleList(props){
    const people = props.people.map((person, i) => <li key={i}>{person.name}</li>) || []
    return <div className='people-queue'>
        <ol>
            {people}
        </ol>
    </div>
}