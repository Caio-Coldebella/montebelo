import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Home from "./elements/Home";
import Galeria from "./elements/Galeria";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/galeria" element={<Galeria/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}