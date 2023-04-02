import './Tours.css'

function Tours(props)
{ const tours = props.tours;
    return(
        
        <>
    
      {tours.map((tour) => (
        <div>
          <h2 style={{ color: "orange"}}>Name of City:{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
          <hr style={{ color:"green", height:"16px"}}/> 
        </div>
      ))}
   
        </>
    )
}
export default Tours;