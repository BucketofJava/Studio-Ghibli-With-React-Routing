import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import UnknownPage from './UnknownPage';

const Film = () =>{
    const [film, setFilm]=useState(null);
    const { pageName }=useParams();
    const [requestSuccess, setRequestSuccess]=useState(true)
    const cardStyleStyle={
        width: "96rem",
        height: "36rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        marginTop: "8rem"
    }
   
    useEffect(()=>{
        console.log('hi')
        fetch(`https://ghibliapi.herokuapp.com/films/${pageName}`).then(response => {
            setRequestSuccess(response.ok)
            return response.json()
        }).then(filmy=> {
            setFilm(filmy)
        })
    }, [])
    
return requestSuccess ? (
<main className="container d-flex justify-content-center align-items-center">
<div className="card border-primary rounded-0" style={cardStyleStyle}>
<h2 className="card-title">{film?.title}</h2>
<ul className="list-group list-group-flush">
    <li className="list-group-item">Film Rating: <span style={{color: (film?.rt_score>=70) ? "green" : "red"}}>{film?.rt_score}</span></li>
<li className="list-group-item">Directed by: {film?.director}</li>
<li className="list-group-item">Produced by: {film?.producer}</li>
<li className="list-group-item">Released in: {film?.release_date}</li>
    </ul>
    <div className="card-body">
<p className="card-text">{film?.description}</p>
    </div>
</div>


</main>

) : (
    <UnknownPage pageType="film with id" />
);


}
export default Film;