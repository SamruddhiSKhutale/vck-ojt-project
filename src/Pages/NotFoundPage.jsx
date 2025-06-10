import React from "react"
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
const NotFoundPage = () => {
    return(
        <div>
            <Header/>
            <h1>404</h1>
            <p>Oops!! The page you're looking for doesn't exist.</p>
            <a href="/homepage">Go back home</a>
            <br></br>
                <br></br>
                    <nav class="nav">
                         <Footer/>
                    </nav>
        </div>

)
}
export default NotFoundPage
   