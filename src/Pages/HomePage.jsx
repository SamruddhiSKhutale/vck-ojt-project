import React from "react"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import {Link} from 'react-router-dom';
import "./Home.css"

const HomePage = () =>{
    return(

      
    <div class="page-container">
                <div div className="hero-banner">
                    <img src="/Images/background.png" alt="College" />
                    <h1>Welcome to Vivekanand College!</h1>
                    <h3>Your journey to excellence starts here.</h3>
                    <Link className="root" to="/admissionpage">
                        <button className="apply-btn">Apply Now!</button>
                    </Link></div>
                     <div>
                    <p>**Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br></br><br></br>
                        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
                    </p>
                        <h2>Why Choose Vivekanand College?</h2>
                            <ul>
                                <li><b>**Legacy of Excellence:** </b>Decades of commitment to quality education.</li>
                                <li><b>**Experienced Faculty:** </b>Learn from renowned experts and passionate educators.</li>
                                <li><b>**Modern Facilities:**</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                                <li><b>**Holistic Development:**</b> Focus on co-curricular activities, sports, and community service.</li>
                                 <li><b>**Strong Placements:**</b> Excellent career opportunities with leading companies.</li>
                            </ul>
                        <h2>Campus Life & Facilities</h2>  
                            <img alt="Students studying in library" src="/Images/Fvck.jpeg"/>
                            <img alt="Students on campus ground" src="/Images/campus.jpg"/>
                            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                        <h3>Ready to explore our courses?</h3>
                            <Link class="root" to="/coursespage"><button>Explore Courses </button></Link><br></br> <br></br>

                </div>       
                </div> 
           
       
          
    

       
    )
}
export default HomePage