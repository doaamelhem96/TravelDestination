import { Link } from "react-router-dom";


function Header ()
{
    return (

    <> 
    <h1 style ={{color:"red" , textAlign: "center"}}>Travel-Destination</h1>
    <hr  />
    <Link to="/">Home</Link>

    
     </>
  );
}
export default Header;
