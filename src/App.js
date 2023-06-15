import React from 'react';
import Intro from './components/Intro';
import Resume from './components/Resume';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Project from './components/Project';
import About from './components/About';
import Education from './components/Education';
import Challange from './components/Challange';
import Experience from './components/Experience';
import Strength from './components/Strength';
import Weakness from './components/Weakness';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    
    <BrowserRouter>
           <Routes>
           
            <Route path ='/' element={<About/>}></Route>
            <Route index element={<Welcome/>}></Route>
            <Route path='/intro' element={<Intro/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/Education' element={<Education/>}></Route>
            <Route path='/Challange' element={<Challange/>}></Route>
            <Route path='/Experience' element={<Experience/>}></Route>
            <Route path='/Strength' element={<Strength/>}></Route>
            <Route path='/Weakness' element={<Weakness/>}></Route>
            <Route path='/Hobby' element={<Hobby/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            
           </Routes>
           </BrowserRouter>


    </>
  )
}

export default App