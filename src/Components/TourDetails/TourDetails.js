// import './TourDetails.css';

// import { useParams } from 'react-router-dom';
// function TourDetails(props)
// {
//  const tours = props.tours;
//   const { id } = useParams();
//   const tour = tours.find((tour) => tour.id === id);

//   return (
//     <>
//     <div>
//       <h2>{tour.name}</h2>
//       <img src={tour.image} alt={tour.name} />
//       <p>{tour.info}</p>
//       <p>Price: {tour.price}</p>
     
//     </div>
  

//         </>
//     );
// }





//  export default TourDetails;
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Home from '../home/Home';
import App from '../../App';

function TourDetails({ tours }) {
  const { id } = useParams();
  const [showAll, setShowAll] = useState(false);
  const tour = tours.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Sorry, tour not found.</div>;
  }

  const { name, image, info } = tour;

  return (
    <>
   <Link to="/">Home</Link>
    
    <section>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        {showAll ? info : `${info.substring(0, 100)}...`}
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See Less' : 'See More'}
        </button>
      </p>
    </section>
    
    </>
  );
}

export default TourDetails;
