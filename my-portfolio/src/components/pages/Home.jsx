import "../css/Home.css";
import waveIcon from "../../assets/icons/hello.png";
import instagramIcon from "../../assets/icons/ig.png";
import linkedinIcon from "../../assets/icons/li.png";
import githubIcon from "../../assets/icons/gb.png";
import karlPic from "../../assets/pics/huh.png";


export default function Home() {
    return (
        <section className="home" id="home">
            <div className="home-and-image-container">
                <div className="home-text">
                    <h2>
                        Hello, I’m Karl{" "}
                        <span className="wave">
                <img src={waveIcon} alt="wave" />
            </span>
                    </h2>

                    <h3>Front End Developer</h3>

                    <p>
                        I’m a Front End Developer based in the Philippines, passionate about
                        building clean and user-friendly web applications.
                    </p>

                    <div className="home-btn">
                        <a href="#contact" className="btn">Contact Info</a>
                        <a href="/Karl-Baricuatro-CV.pdf" className="btn btn-outline">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="home-img">
                    <img src={karlPic} alt="Karl profile" />
                </div>
            </div>


            {/* Social Icons */}    
            <div className="socials-icons">
                <a href="https://www.instagram.com/error404karlnotfound/" target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>

                <a href="https://www.linkedin.com/in/karl-baricuatro-389193348/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>

                <a href="https://github.com/KArruuuu" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
            </div>


            {/* Scroll Button */}
            <a href="#about" className="scroll-btn">
                Scroll down ↓
            </a>
        </section>
    );
}
