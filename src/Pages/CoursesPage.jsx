import React from "react"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import "./Courses.css"
const coursesPage = () =>{
    return(
        <div>
            
             <h1>Our Academic Programs</h1>
          <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
          <h2>Discover Campus Life</h2> 
          <hr></hr> 
          <video src="/Videos/college-tour.mp4" controls autoplay height="400px" width="500"></video>
            <p class="video-caption">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
            <h2>Undergraduate Programs (UG)</h2> <hr></hr>
<ul>
    <li>**Bachelor of Science (B.Sc.)**
  
    <ul>
      <li>Computer Science (3 years)</li>
      <li>Information Technology (3 years)</li>
      <li>Biotechnology (3 years)</li>
    </ul>

  <li>**Bachelor of Commerce (B.Com)**</li>
    <ul>
      <li>Accounting & Finance (3 years)</li>
      <li>Banking & Insurance (3 years)</li>
    </ul>
  <li>**Bachelor of Arts (B.A.)*</li>
  <ul>
      <li>English Literature (3 years)</li>
      <li>Psychology (3 years)</li>
      </ul>
  </li> 
</ul>
<h2>Postgraduate Programs (PG)</h2><hr></hr>
<ul>
  <li>**Master of Science (M.Sc.)**</li>
    <ul>
      <li>Computer Science (2 years)</li>
      <li>Information Technology (2 years)</li>
    </ul>
  <li>**Master of Commerce (M.Com)** (2 years)</li>
  <li>**Master of Arts (M.A.)** (2 years)</li>
</ul> 
<h2>Program Details & Fees Structure (Annual)</h2>
<table border="black solid" class="table">
    <tr>
        <th>Program type</th>
        <th>Course Name</th>
        <th>Duration</th>
        <th>Annual Fee(INR)</th>
        <th>Eligibility</th>
    </tr>
    <tr>
        <td>UG</td>
            <td>B.Sc. Computer Science</td>
               <td>3 years</td>
               <td>₹ 85,000</td>
               <td>10+2 with PCM (50%)</td>
    </tr>
    <tr>
        <td>UG</td> 
        <td>B.Com. Accounting & Finance</td>
         <td>3 years</td>
          <td>₹ 70,000</td>
          <td>10+2 Commerce (45%)</td>
    </tr>
    <tr>
             
              <td>PG</td>
               <td>M.Sc. Information Technology</td>
               <td>2 Years</td>
                <td>₹ 95,000</td>
                 <td>B.Sc. IT/CS (50%)</td>
    </tr>
    
</table>
<h2>Specialized & Vocational Courses</h2><hr></hr>
<p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
<h2><center>Have questions about a specific course?</center></h2>

    <a href="/contactpage"><button>Inquire About Courses</button>
      <br></br></a>
      <br></br>
      <br></br>
              <nav class="nav">
                         <Footer/>
                    </nav>    
        </div>
    )
}
export default coursesPage