import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from "./nav";
import { BrowserRouter, Route, Routes } from 'react-router';
import{About} from './About'
import{Footer} from './footer'
import{ProjectCards} from './ProjectCards'
import { ExperienceCards } from './Experience.jsx';




function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<About></About>}></Route>
          <Route path="/ProjectCards" element={<ProjectCards></ProjectCards>}></Route>
          <Route path="/Experience" element={<ExperienceCards></ExperienceCards>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>

  );
}

export default App;