
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import "./App.css"
import AdmissionPage from "./Pages/AdmissionPage";




const App = () => {
  return (
    <div>
    <Router>
    <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/coursespage" element={<CoursesPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/notfoundpage" element={<NotFoundPage/>}/>
        <Route path="/admissionpage" element={<AdmissionPage/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;