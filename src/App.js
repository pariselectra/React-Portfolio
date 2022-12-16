import knockoutimage from './knockout.PNG'
import migrate from './migrate.png'
import project1 from "./project1.png"
import project2 from "./project2.png"
import project3 from "./project3.png"
import project4 from "./project4.png"
import project5 from "./project5.png"
import project6 from "./project6.png"
import project7 from "./project7.png"
import project8 from "./project8.png"
import project9 from "./project9.png"
import project10 from "./project10.png"
// import project11 from "./project11.png"
import project12 from "./project12.png"
import project13 from "./project13.png"
import github from "./Github.png"
import mail from "./mail.png"
import linkedin from "./LinkedIn.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav className="navbar">
        <ul className="navUl">
            <li className="navmargin"><a href="#aboutme" id="aboutMeLink">About Me</a></li>
            <li className="navmargin"><a href="#work" id="workLink">Work</a></li>
            <li className="navmargin"><a href="#contactme" id="contactMeLink">Contact Me</a></li>
            <li className="navmargin"><a href="#resume" id="resumeLink">Resume</a></li>
        </ul>
    </nav>

    <div class="background-img">
        
        <section class="about-me-format">
            <div>
            <h2 id="aboutme">About Me</h2>
            <h1>PARIS BLAND</h1>
            <h4>Full Stack Developer</h4>
            </div>
            <p> Languages: <strong>HTML, CSS, JavaScript, SQL </strong> 
              <br></br>
            Skills: <strong>Bootstrap, APIs, JQuery, JSON, AJAX, Node, ES6, Express, Progressive Web Apps, React, and MERN Stack.</strong>
            <br></br>
            <br></br>
            From Dallas, TX. Based in Austin, TX.
            
            Sales and Management Background.
            </p>
        </section>
        <div className="container">
            <h3 className="outterContainer">container</h3>
            <h3 className="smallerContainer">container</h3>
            <img className="profileimg" src={knockoutimage} alt="profile"></img>
            <h3 className="line">c</h3>
            <h3 className="littleline"></h3>
        </div>  
    </div>

    <section>
        <h2 id="work">Work</h2>
        <h5>Check out some of my projects</h5>
            <section className="position">

                <section className= "feature-flip-card">
                <div className="feature-flip-card-inner">
                    <div className="feature-flip-card-front">
                    <a href="https://migrate-abroad.herokuapp.com/"><img class="featureImage" src={migrate} alt="filler"></img></a>
                    <h6 class= "migrateTitle">Migrate</h6>
                    </div>
                    <div class="feature-flip-card-back">
                        <h5 className="cardBackHeader">Migrate</h5>
                        <button className="checkItOutButton"><a className="buttonLink" href="https://migrate-abroad.herokuapp.com/">CHECK IT OUT</a></button>
                        <h5 className="cardBackTextStyling">This was a group collaboration project. Migrate is designed to provide data on countries and their social performance so users can make informed decisions about where in the world to live. This website features select data from the Social Progress Imperative. In addition to country information, we also provide a search bar that allows users to explore countries in different regions and find the best fit for them.</h5>
                        <button><a className="buttonLink" href="https://github.com/pariselectra/Group_9_Project_2">GITHUB</a></button>
                        </div>
                    </div>
                </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://the-survival-game.herokuapp.com/"><img class="workimg" src={project1} alt="filler"></img></a>
                <h6>Choose Your Own Adventure</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Choose Your Own Adventure</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://the-survival-game.herokuapp.com/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This was a group collaboration project. This project is a choose your own adventure game. A user follows a storyline and has the option to select their own destinty within the game. Depending on your selection, you will either live or die in this post apocalyptic storyline.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Group_9_Project_2">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://pariselectra.github.io/Accessibility-with-CSS-HTML/"><img class="workimg" src={project2} alt="filler"></img></a>
                <h6>Accessibility</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Accessibility</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://pariselectra.github.io/Accessibility-with-CSS-HTML/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This project utilizes starter code for a website. I added descriptive HTML elements and alt text. Additionally, I made the site readable for screen readers.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Accessibility-with-CSS-HTML">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://pariselectra.github.io/JavaScript-Window-Edit/"><img class="workimg" src={project3} alt="filler"></img></a>
                <h6>JS Window</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">JS Window</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://pariselectra.github.io/JavaScript-Window-Edit/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This project utilizes window prompts to capture user input choices. The user had the option to decide if they wanted numbers, lowercase letters, uppercase letters, or special characters in their password. The user also had the ability to set the desired length of their password. After they make their selections, a password is generated. </h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/JavaScript-Window-Edit">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://pariselectra.github.io/Web-APIs-Timed-Quiz/"><img class="workimg" src={project4} alt="filler"></img></a>
                <h6>API Quiz</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">API Quiz</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://pariselectra.github.io/Web-APIs-Timed-Quiz/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This project incorporate the usage of Web APIs to link HTML, CSS, and Javascript into one functional webpage. A user is prompted through a series of questions to complete a quiz. The application indicates if an answer is correct or incorrect upon selection. After submission, the user has the ability to enter their initials and save their score.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Web-APIs-Timed-Quiz">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://pariselectra.github.io/Workday-Calendar-Schedule/"><img class="workimg" src={project5} alt="filler"></img></a>
                <h6>Local Storage Cal</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Local Storage Cal</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://pariselectra.github.io/Workday-Calendar-Schedule/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This website utilizes local storage. I started this challenge with CSS and HTML code already written out. I appended Javascript elements to the existing framework to make a working calendar. The calendar has a functional "save" button, that saves a user's entry locally. Even if a user closes out of the browser, their entry is saved on the page through local storage.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Workday-Calendar-Schedule">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://pariselectra.github.io/Five-Day-Weather-Forecast/"><img class="workimg" src={project6} alt="filler"></img></a>
                <h6>Weather API</h6>
                </div>
                <div class="flip-card-back">                    
                    <h5 className="cardBackHeader">Weather API</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://pariselectra.github.io/Five-Day-Weather-Forecast/">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">This website utilizes a weather forecast API in order to pull temperature, wind, humidity, and potential forecasts in any given city. Once a user enters their destination of choice, the application will display select information of the weather forecast.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Five-Day-Weather-Forecast">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Professional-README-Generator"><img class="workimg" src={project7} alt="filler"></img></a>
                <h6>Generate README</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Generate README</h5>
                    <h5 className="cardBackTextStyling">This project is designed to automatically create customized README documents for users. This backend node.js application prompts a user to answer specific inputs. Once a user answers, the application generates a markdown document for the user, attractively displaying the user's input.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Professional-README-Generator">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Employee-List-Generator"><img class="workimg" src={project8} alt="filler"></img></a>
                <h6>Employee Lister</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Employee Lister</h5>
                    <h5 className="cardBackTextStyling">This challenge was centered around object oriented programing. This backend framework allows a user to enter and save employee information. Depending on user selection, the prompts will vary to create customized cards for each employee. This challenge features multiple interacting Javascript pages, and an interactive node framework, and Javascript testing. </h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Employee-List-Generator">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/SQL-Employee-Tracker"><img class="workimg" src={project9} alt="filler"></img></a>
                <h6>Employee Registry</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Employee Registry</h5>
                    <h5 className="cardBackTextStyling">In this project, I utilized SQL in order to create a database, and make it accessible through node. Once the database is complete, a user has the option to view an entire registrar of employees. Additionally, the user has the functionality to add departments, roles, and employees. If an employee gets a promption and switches to a different role, the database can easily be updated through node as well.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/SQL-Employee-Tracker">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/ORM-eCommerce-Backend"><img class="workimg" src={project10} alt="filler"></img></a>
                <h6>ORM eCommerce</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">ORM eCommerce</h5>
                    <h5 className="cardBackTextStyling">This project used starter code to build the backend for an ecommerce website. Starting with a database, I used API POST, PUT, and DELETE routes to allow the user to edit information in the database. I also set the parameters for the database models and add associations within the database to describe how the various models interact with each other.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/ORM-eCommerce-Backend">GITHUB</a></button>
                    </div>
                </div>
            </section>

            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://express-note-pariselectra.herokuapp.com/notes"><img class="workimg" src={project12} alt="filler"></img></a>
                <h6>Express Note Taker</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Express Note Taker</h5>
                    <button className="checkItOutButton"><a className="buttonLink" href="https://express-note-pariselectra.herokuapp.com/notes">CHECK IT OUT</a></button>
                    <h5 className="cardBackTextStyling">To develop this project, I started with some code that was the basic frame of a note taking website. I made the website functional by providing middleware and get routes. This connected the written javascript to the server and pushed the application to correctly deploy javascript functions when prompted with a click on the page.</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Express-Note-Taker">GITHUB</a></button>
                    </div>
                </div>
            </section>
            
            <section className= "flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    <a href="https://github.com/pariselectra"><img class="workimg" src={project13} alt="filler"></img></a>
                    <h6>Social Network API</h6>
                    </div>
                    <div class="flip-card-back">
                        <h5 className="cardBackHeader">Social Network API</h5>
                        <h5 className="cardBackTextStyling">This is a MongoDB (noSQL) based database that provides a model for what a social media networking backend database. I structured this MongoDB database to house a list of users, their thoughts, and their friends within the application.</h5>
                        <button><a className="buttonLink" href="https://github.com/pariselectra/Social-Network-API">GITHUB</a></button>
                    </div>
                </div>
            </section>
        </section>
    </section>

    <section>
        <h2 id="contactme">Contact Me</h2>
        <ul class="contactflex">
            <li><a href="https://github.com/pariselectra"><img class="contactimg" src={github} alt="Github"></img></a></li>
            <li><a href="https://www.linkedin.com/in/paris-bland-81928b193/"><img class="contactimg" src={linkedin} alt="LinkedIn"></img></a></li>
            <li><a href="mailto:paris@pariselectra.com"><img class="contactimg" src={mail} alt="email"></img></a></li>
        </ul>
    </section>

    <section>
        <h2 id="resume">Resume</h2>
        <iframe className="resumePdf" src="https://drive.google.com/file/d/1R18wZ4xMM0iE6pSmpT5pIjGCe3Ar8ORJ/preview" width="80%" height="1000px" allow="autoplay"></iframe>
    </section>

    </div>
  );
}

export default App;
