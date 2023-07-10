import React from "react";
import Card from "./Card";



const Tour = ({tour, removeTour}) => {
    return(
        <div className="container">
           <h2 className="title">Travel With Avinash</h2>
           <div className="cards">
              {tour.map((e)=>{
                return(
                    <Card {...e} removeTour={removeTour}/>
                )
              })}
           </div>
        </div>    
    )
}

export default Tour; 