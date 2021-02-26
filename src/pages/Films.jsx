import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Films = () =>{
    const [films, setFilms]=useState([])
 
    const [mapFilms, setMapFilms] = useState([]);
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
        fetch("https://ghibliapi.herokuapp.com/films").then(response => {
            return response.json()
        }).then(filmys => {
            setFilms(filmys)
        })
    }, [])
    useEffect(() =>{setMapFilms(films.map((m) => {
        const linkto=`/films/${m.id}`
        return (
       <div className="card mb-3" style={cardStyleStyle} key={m.id}>
       <div className="card-body">
       
        <h5 className="card-title">{m.title}</h5>
            
        <p className="card-text">{m.description.substring(0, Math.min(52, m.description.length))}<Link to={linkto}>...</Link></p>
       
       </div>
       </div>
       
           )}))}, [films])
    return (
        
  
         <div className="d-flex flex-wrap justify-content-start" style={styleCardsFilm}>
        {mapFilms}
         </div>
    );
}

export default Films;

