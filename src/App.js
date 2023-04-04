import './App.css';
import Home from "./Components/home/Home";
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route } from "react-router-dom";
const data =require("./data/db.json");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home tours={data} />} /> 
        <Route path="/city/:id" element={<TourDetails tours={data} />} />
      </Routes> 
    </>
  );
}

export default App;

