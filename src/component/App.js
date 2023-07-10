import React, { useState } from "react";
import data from "./data";
import Tour from "./Tour";

const App = () =>{

    const[tour, setTour] = useState(data);
     

    function removeTour(id){
    const newTour= tour.filter(e => e.id !== id);
    setTour(newTour);
    }

    if(tour.length === 0){
        return(
            <div className="refresh">
            <h1>No Tour Left Sorry...</h1>
            <button className="btn-white" onClick={()=> setTour(data)}>Refresh</button>
            </div>
            
        );
    }

    return(
        <div className="App">
        <Tour tour={tour} removeTour={removeTour}/>
        </div>
    )
}

export default App;