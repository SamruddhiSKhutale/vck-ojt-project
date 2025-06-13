

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



const App = () => {
  return (
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
    
    </div>
      <Footer/>
    </Router>
  
 
 
  )
}

export default App;