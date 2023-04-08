import  Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';

function Home(props)
{ const tours = props.tours;
    return (
    <>

        <Header/>
            
          <div>
      <h1 style ={{color:"green"}} > Hello visitor you can watch our Tours</h1>
      

    </div> 
    
    <div>
      { <div className="tours">
        {tours.map((tour) => ( 
           <div className="tour">
          <Link to={`/city/${tour.id}`} elemnts={tour.id}>
           <h3>{tour.name}</h3>
              <img src={tour.image} alt={tour.name} />
             
           
           
          </Link>
           </div>
        ))}
      </div> }
    
    </div>   <Footer/>
        </>
    )
      
}
export default Home;