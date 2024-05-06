import React from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import AllProjects from './components/Allprojects';  // Ensure the file name matches
import Projecttracting from './components/Projecttracting';  // Ensure the file name matches
import Leadform from './components/LeadForm';
import Tracker from './components/Tracker';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          
            <Route path="/all-projects" element={<AllProjects />} />
            <Route path="/project-tracking" element={<Projecttracting />} />
            <Route path="/form" element={<Leadform/>} />
            <Route path="/project-tracker" element={<Tracker/>} />


     
        </Routes>
      </Router>
    </div>
  );
}

export default App;
