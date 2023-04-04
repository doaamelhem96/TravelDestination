import Tours from "../Tours"
import './Tour.css';
import { Link } from 'react-router-dom';

function Tour({ tour }) {
  const { id, name, image, info } = tour;

  return (
    <>
    <article>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{info.substring(0, 100)}...</p>
      <Link to={`/city/${id}`}>See Details</Link>
    </article>
    </>
  );
}

export default Tour;
