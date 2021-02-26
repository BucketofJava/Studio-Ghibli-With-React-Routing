import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const People = () =>{
    const [people, setPeople]=useState([])
 
    const [mapPeople, setMapPeople] = useState([]);
    const styleCardsFilm={
        width: "100%",
        height: "20em",
        marginTop: "7rem",
        marginRight: "-10rem"

    }
    
    const cardStyleStyle={
        width: "24rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        marginTop: "2rem"
    }
    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/people").then(response => {
            return response.json()
        }).then(filmys => {
            setPeople(filmys)
        })
    }, [])
    useEffect(() =>{setMapPeople(people.map((m) => {
        const linkto=`/people/${m.id}`
        return (
       <div className="card mb-3 border-success" style={cardStyleStyle} key={m.id}>
       <div className="card-body">
       
        <h5 className="card-title">{m.name}</h5>
        <Link className="btn btn-success" to={linkto}>More info</Link>
            
        
       
       </div>
       </div>
       
           )}))}, [people])
    return (
        
  
         <div className="d-flex flex-wrap justify-content-start" style={styleCardsFilm}>
        {mapPeople}
         </div>
    );
}

export default People;

