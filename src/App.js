import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Home from "./elements/Home";

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Site em construção</p>}/>
        <Route path="/development" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}