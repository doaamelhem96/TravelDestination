import  Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props)
{
    return (
    <>

        <Header/>
            
          <div>
      <h1 style ={{color:"green"}} > Hello visitor you can watch our Tours</h1>
      <Tours tours={props.tours} />
    </div> 
    <Footer/> 
        </>
    )
      
}
export default Home;