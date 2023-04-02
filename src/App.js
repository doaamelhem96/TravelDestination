import './App.css';
import Home from "./Components/home/Home"
const data =require("./data/db.json");
function App() {
  return (
   <>
  <Home tours={data} />


 </>
  );
}

export default App;
