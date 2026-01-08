import { useState } from "react"; // Added useState
import "../css/Home.css";
import waveIcon from "../../assets/icons/hello.png";
import instagramIcon from "../../assets/icons/ig.png";
import linkedinIcon from "../../assets/icons/li.png";
import githubIcon from "../../assets/icons/gb.png";
import karlPic from "../../assets/pics/huh.png";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

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
                        {/* Changed href to trigger toggleModal */}
                        <a href="#contact" className="btn" onClick={toggleModal}>
                            Contact Info
                        </a>
                        <a
                            href="/files/Karl-Baricuatro-CV.pdf"
                            download="Karl_Baricuatro_CV.pdf"
                            className="btn btn-outline"
                        >
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


            {/* CONTACT MODAL */}
            {isModalOpen && (
                <div className="contact-modal-overlay" onClick={toggleModal}>
                    <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="close-modal" onClick={toggleModal}>&times;</button>

                        {/* Header Section */}
                        <div className="modal-header">
                            <h2>get in touch</h2>
                            <p>I'm always open to new opportunities and collaborations.</p>
                        </div>

                        {/* Info List */}
                        <div className="contact-info-list">
                            <div className="info-group">
                                <span className="info-label">Mobile</span>
                                <p className="info-value">+63 927 795 5775</p>
                            </div>

                            <div className="info-group">
                                <span className="info-label">Email</span>
                                <p className="info-value">baricuatrokarl492@gmail.com</p>
                                <p className="info-sub">karl.baricuatro@cit.edu</p>
                            </div>
                        </div>

                        {/* Footer / Socials */}
                        <div className="modal-footer">
                            <div className="modal-socials">
                                <a href="https://www.facebook.com/Error404KarlNotFound/" target="_blank" rel="noreferrer">fb</a>
                                <a href="https://www.instagram.com/error404karlnotfound/" target="_blank" rel="noreferrer">ig</a>
                                <a href="https://x.com/Kkaarruu06" target="_blank" rel="noreferrer">x</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}