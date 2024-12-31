import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./container/About";
import Contact from "./container/Contact";
import Home from "./container/Home";
import Project from "./container/Project";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/about' element={<About/>} /> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
