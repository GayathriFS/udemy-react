import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
function Recommended() {
     return(
        <div class="recommended">
        <h1 class="recommended__title">Recommeded Course for you</h1>
        <p>Pick the best fit</p>
        <div class="recommeded-container">
            <div class="course-card">
                <img src={c1} alt=""/>
                <h3>MERN Full Stack Development Course</h3>
                <p>Agnela Joe</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>Rs.449 <del>Rs.1999</del></p>
            </div>

            <div class="course-card">
                <img src={c2} alt=""/>
                <h3>JavaFull Stack Development Course</h3>
                <p>John Smith</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>Rs.449 <del>Rs.1999</del></p>
            </div>

            <div class="course-card">
                <img src={c3} alt=""/>
                <h3>Python Full Stack Development Course</h3>
                <p>Schwart Joe</p>
                <p>4.9 ⭐⭐⭐</p>
                <p>Rs.449 <del>Rs.1999</del></p>
            </div>

            <div class="course-card">
                <img src={c4} alt=""/>
                <h3>Java Selenium</h3>
                <p>Rahul Shetty</p>
                <p>4.9 ⭐⭐⭐⭐</p>

                <p>Rs.449 <del>Rs.1999</del></p>
            </div>

        </div>
    </div>
     )
}

export default Recommended