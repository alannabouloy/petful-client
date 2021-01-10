import config from '../config'

const ApiService = {
    //function to GET people
    getPeople(){
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res.json()
            )
    },
    //function to POST person to queue
    queuePerson(person){
        if(person){
            return fetch(`${config.API_ENDPOINT}/people`, {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${config.API_TOKEN}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(person)
            })
            .then(res => 
                (!res.ok)
                    ?res.json().then(e => Promise.reject(e))
                    :res.json()
                    )
        }
        else{
            return fetch(`${config.API_ENDPOINT}/people`, {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${config.API_TOKEN}`
                }
                .then(res =>
                    (!res.ok)
                        ?res.json().then(e => Promise.reject(e))
                        :res.json()
                        )
            })
        }
        
    },
    //function to dequeue person
    dequeuePerson(){
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res
            )
    },
    //function to GET animals
    getPets(){
        return fetch(`${config.API_ENDPOINT}/pets`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${config.API_TOKEN}`
            }
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res.json()
            )
    },
    //function to DEQUEUE an animal
    dequeuePet(petType){
        return fetch(`${config.API_ENDPOINT}/pets`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${config.API_TOKEN}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({'type': petType})
            
        })
        .then(res => 
            (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            :res.json()
            )
    }
}

export default ApiService