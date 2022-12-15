import knockoutimage from './knockout.PNG'
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
        <section class="position">
            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="Choose Your Own Adventure"><img class="workimg" src={project1} alt="filler"></img></a>
                <h6>Choose Your Own Adventure</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Choose Your Own Adventure</h5>
                    <h5 className="cardBackTextStyling">Description</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Group_9_Project_2">GITHUB</a></button>
                    </div>
                </div>
            </section>
            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Accessibility-with-CSS-HTML"><img class="workimg" src={project2} alt="filler"></img></a>
                <h6>Accessibility</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Accessibility</h5>
                    <h5 className="cardBackTextStyling">Description</h5>
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
                    <h5 className="cardBackTextStyling">Description</h5>
                    <button><a className="buttonLink" href="https://pariselectra.github.io/JavaScript-Window-Edit/">GITHUB</a></button>
                    </div>
                </div>
            </section>
            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Web-APIs-Timed-Quiz"><img class="workimg" src={project4} alt="filler"></img></a>
                <h6>API Quiz</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">API Quiz</h5>
                    <h5 className="cardBackTextStyling">Description</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Web-APIs-Timed-Quiz">GITHUB</a></button>
                    </div>
                </div>
            </section>
            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Workday-Calendar-Schedule"><img class="workimg" src={project5} alt="filler"></img></a>
                <h6>Local Storage Cal</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Local Storage Cal</h5>
                    <h5 className="cardBackTextStyling">Description</h5>
                    <button><a className="buttonLink" href="https://github.com/pariselectra/Workday-Calendar-Schedule">GITHUB</a></button>
                    </div>
                </div>
            </section>
            <section className= "flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <a href="https://github.com/pariselectra/Five-Day-Weather-Forecast"><img class="workimg" src={project6} alt="filler"></img></a>
                <h6>Weather API</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Weather API</h5>
                    <h5 className="cardBackTextStyling">Description</h5>
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
                    <h5 className="cardBackTextStyling">Description</h5>
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
                    <h5 className="cardBackTextStyling">Description</h5>
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
                <a href="https://github.com/pariselectra/Express-Note-Taker"><img class="workimg" src={project12} alt="filler"></img></a>
                <h6>Express Note Taker</h6>
                </div>
                <div class="flip-card-back">
                    <h5 className="cardBackHeader">Express Note Taker</h5>
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
        <h3>Education</h3>
            <p>Parish Episcopal School, Dallas, TX, Class of 2017</p>
            <p>University of Texas at Austin, Class of 2019</p>
        <ul>
            <li>Plan I Honors</li>
            <li>Churchill Scholar</li>
            <li>International Relations and Global Studies</li>
            <li>McCombs School of Business</li>
        </ul>
            <p>UT Coding Bootcamp w/ Trilogy Education</p>
            <ul>
                <li>September 2022 - December 2022</li>
                <li>HTML, CSS, Git, JavaScript, Bootstrap, APIs, JQuery, JSON, AJAX, Node, ES6, Express, MySQL, Progressive Web Apps, React, NoSQL, MERN Stack.</li>
            </ul>
        <h3>Work History</h3>
        <p>TabATX</p>
        <ul>
            <li><strong>Founder, CEO: October 2017 - March 2020</strong></li>
            <li>Primary focus was on event planning for Panhellenic groups</li>
            <li>Acquired a client list worth more than $50,000</li>
            <li>Acted as a liaison between clients and event venues.</li>
        </ul>
        <p>Tuple Labs</p>
        <ul>
            <li><strong>Account Executive: June 2019 - June 2020</strong></li>
            <li>Technology company serving large clients such as Half Price Books</li>
            <li>Acquired new business accounts within assigned territories</li>
            <li>Created and maintained sales relationships with clients</li>
        </ul>
        <p>Moment Makers LLC</p>
        <ul>
            <li><strong>Co-owner, Founder: March 2020 - August 2022</strong></li>
            <li>Primary focus is on event planning and boat rentals</li>
            <li>Responsible for all aspects of the business.</li>
        </ul>
        <p>Mattress Firm</p>
        <ul>
            <li><strong>Store Manager, Salesperson: July 2020 - September 2022</strong></li>
            <li>Million Dollar Writer</li>
            <li>Managed team for the largest Mattress Firm in Texas.</li>
        </ul>
    </section>

    </div>
  );
}

export default App;
