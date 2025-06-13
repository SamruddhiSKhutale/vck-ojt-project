 import React from "react"
 import Header from "../Components/Header/Header"
 import Footer from "../Components/Footer/Footer"
 import "./Contact.css"
const ContactPage = () => {
    return(
        <div>
            
        <div className="page-container" style={{overflow:"auto"}}>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2><hr></hr>
            <p>Vivekanand College Main Campus<br></br>
        [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br></br>
        India<br></br><br></br>

        Phone: **+91 12345 67890**<br></br>
        Email: **info@vivekanandcollege.edu**<br></br>
        Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
        
        <h2>Admissions Office</h2>  <hr></hr> 
        <p>
        For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
        Phone: +91 98765 43210<br></br>
        Email: admissions@vivekanandcollege.edu
        </p>
        <h2>Find Us on the Map</h2><hr></hr>
        <p class="delta">[You can embed a Google Map here later using an iframe or a React map library.]<br></br>
            <a href="https://maps.google.com/?q=Vivekanand+College">view on Google Maps</a>
            </p>
        <h2>Send Us a Message</h2><hr></hr>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p><br></br><br></br>
   </div>     
        </div>
    )
}
export default ContactPage   