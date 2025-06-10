import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            <header>
                 <nav style={{display:"flex",alignItems:"right",gap:"30px",padding:"10px",color:"white"}}>
                  
              
                
                <Link to="/homepage">Home</Link>
                <Link to="/aboutpage">About</Link>    
                <Link to="/contactpage">Contact</Link>    
                <Link to="/coursespage">Courses</Link>
                 
                <Link to="/admissionpage"><button id="link">Applay Now</button></Link>
                </nav>
            </header>
        </div>
    
    )
}
export default Header