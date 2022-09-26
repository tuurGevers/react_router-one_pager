import React from 'react';
import './App.css';
import Nav from "./Nav";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import useWindowDimensions from "./hooks/useWindowDimensions";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="App">
      {width>720?
          <div>
            <Nav/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/overons" element={<About/>}/>
            </Routes>
          </div>:
          <div>
            <Home/>
            <Contact/>
            <About/>
          </div>



      }

    </div>
  );
}

export default App;
