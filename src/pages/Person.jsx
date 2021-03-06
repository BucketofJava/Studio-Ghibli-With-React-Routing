import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import UnknownPage from './UnknownPage';

const Person = () =>{
    const [person, setPerson]=useState(null);
    const { pageName }=useParams();
    const [requestSuccess, setRequestSuccess]=useState(true)
    const cardStyleStyle={
        width: "96rem",
        height: "15.5rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        marginTop: "8rem"
    }
   
    useEffect(()=>{
        console.log('hi')
        fetch(`https://ghibliapi.herokuapp.com/people/${pageName}`).then(response => {
            setRequestSuccess(response.ok)
            return response.json()
        }).then(persony=> {
            setPerson(persony)
        })
    }, [])
    
return requestSuccess ? (
<main className="container d-flex justify-content-center align-items-center">
<div className="card rounded-0 border-primary" style={cardStyleStyle}>
<h2 className="card-title">{person?.name}</h2>
<ul className="list-group list-group-flush">
<li className="list-group-item">Gender: {person?.gender}</li>
<li className="list-group-item">Age: {person?.age}</li>
    <li className="list-group-item">Hair color: <span style={{color: person?.hair_color}}>{person?.hair_color}</span></li>
<li className="list-group-item">Eye color: <span style={{color: (person?.eye_color=="White") ? "beige" : person?.eye_color}}>{person?.eye_color}</span></li>

    </ul>


</div>


</main>

) : (
    <UnknownPage pageType="person with id" />
);


}
export default Person;