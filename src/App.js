
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import { Archive } from "./pages/Archive";

function App() {
  return (
   <Routes>
    <Route path="/" element= { <Home /> }></Route>
    <Route path="/archive" element= { <Archive /> }></Route>
    <Route path="/bin" element= { <Archive /> }></Route>
   </Routes>
  );
}

export default App;
