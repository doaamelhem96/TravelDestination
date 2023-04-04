//import { Route } from 'react-router';
import './Tours.css'

function Tours(props)
{ const f = props.tours;
    return(
        
        <>
    
      {f.map((tour) => (
        <div>
          <h2 style={{ color: "orange"}}>Name of City:{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
          <hr style={{ color:"gold", height:"16px"}}/> 
        </div>
      ))}
   
        </>
    )
}
export default Tours;
