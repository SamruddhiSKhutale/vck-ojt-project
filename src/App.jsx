

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AdmissionPage from "./Pages/AdmissionPage";
import ChatbotComponent from "./Components/Chatbot/ChatbotComponents";
import "./App.css"
import DeveloperInfoPopup from "./Components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";



const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Samruddhi Shivaji Khutale"
          studentPhotoUrl="/Images/samruddhi.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
     <Router>
         <Header/>
        <div class="main-layout">
    
     
      <div class="content">
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/coursespage" element={<CoursesPage/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/notfoundpage" element={<NotFoundPage/>}/>
        <Route path="/admissionpage" element={<AdmissionPage/>}/>
       </Routes>
      </div>
      <ChatbotComponent/>
    <Footer/>
    </div>
    
    </Router>
   </>

 
  )
}

export default App;