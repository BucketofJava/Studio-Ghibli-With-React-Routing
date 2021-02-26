import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import studioGhibili from "./studioGhibili.svg"
import Films from "./pages/Films"
import Film from "./pages/Film";
import NavBar from './components/NavBar';
import People from "./pages/People"
import Person from './pages/Person';


const App = () => {

    const imageyStyle={
        display: "absolute",
        marginTop: "-7em",
        marginLeft: "0",
        marginRight: "0"
       

    }

    return (
        <div>
         
       <BrowserRouter>
       <NavBar />
       <Switch>
        <Route exact path="/">
            {()=>

            <main className="container">   
         
                        <div className="d-flex justify-content-center">
                        <img style={imageyStyle} className="" src={studioGhibili} height="800" width="800" />
                        </div>
                        </main>
            }
        </Route>
            <Route exact path="/films">
            {()=>
           
                <Films />
            

            }
            </Route>
            <Route exact path="/films/:pageName">
               {()=><Film />} 

            </Route>
            <Route exact path="/people">
            {()=>
           
                <People />
            

            }
            </Route>
            <Route exact path="/people/:pageName">
               {()=><Person />} 

            </Route>
       </Switch>
       </BrowserRouter>
       </div>
                              

    )
}
export default App;