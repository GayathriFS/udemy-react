import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"
import c5 from "../assets/images/c5.jpg"
import c6 from "../assets/images/c6.jpg"
import c7 from "../assets/images/c7.jpg"
import c8 from "../assets/images/c8.jpg"
function Popular()
 {
    return(

       <div class="popular">
    <h1 class="popular__title">Most Popular Courses</h1>
    <p>Pick the best fit</p>
    <div class="popular-container">
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
            <h3>Selenium Java Full Course</h3>
            <p>Rahul Shetty</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>Rs.1999</del></p>
        </div>
        <div class="course-card">
            <img src={c5} alt=""/>
            <h3>Front End Development Course</h3>
            <p>Schwart Joe</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>Rs.449 <del>Rs.1999</del></p>
        </div>
        <div class="course-card">
            <img src={c6} alt=""/>
            <h3>Back End Development Course</h3>
            <p>John Smith</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>Rs.1999</del></p>
        </div>
        <div class="course-card">
            <img src={c7} alt=""/>
            <h3>HTML,CSS,JavaScript,ReactJS</h3>
            <p>Schwart Joe</p>
            <p>4.9 ⭐⭐⭐</p>
            <p>Rs.449 <del>Rs.1999</del></p>
        </div>
        <div class="course-card">
            <img src={c8} alt=""/>
            <h3>Data Analytics,Cloud Computing Course</h3>
            <p>Rahul Shetty</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>Rs.449 <del>Rs.1999</del></p>
        </div>

    </div>
</div>
)
}

export default Popular