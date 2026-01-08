import { useState } from "react";
import "../css/Projects.css";
import c from "../../assets/projects/c.png";
import bcd from "../../assets/projects/bdc.png";
import wch from "../../assets/projects/wch.png";
import edu from "../../assets/projects/edu.png";
import pnp from "../../assets/projects/pnp.png";
import ch from "../../assets/projects/ch.png";
import ks from "../../assets/projects/ks.png";
import jfs from "../../assets/projects/jfs.png";

import sp from "../../assets/designs/sp.png";
import bcde from "../../assets/designs/bcde.png";
import bcd1 from "../../assets/designs/bcd1.png";
import bcd2 from "../../assets/designs/bcd2.png";
import eduw from "../../assets/designs/eduw.png";
import gly from "../../assets/designs/gly.png";
import rr from "../../assets/designs/rr.png";
import rr1 from "../../assets/designs/rr1.png";
import rr2 from "../../assets/designs/rr2.png";
import tr from "../../assets/designs/tr.png";



const projects = [
    {
        name: "Jen Flower Shop",
        image: jfs,
        github: "https://github.com/KArruuuu/Jen-Flower-Shop",
        languages: [
            { name: "CSS", percent: 43.6, color: "#2965f1" },
            { name: "Hack", percent: 19.8, color: "#222" },
            { name: "PHP", percent: 26.5, color: "#8993be" },
            { name: "JS", percent: 10.1, color: "#f7df1e" }
        ]
    },
    {
        name: "Karl's Shack",
        image: ks,
        github: "https://github.com/KArruuuu/Karl-s-Shack",
        languages: [
            { name: "CSS", percent: 36.6, color: "#2965f1" },
            { name: "HTML", percent: 32.4, color: "#e34c26" },
            { name: "JS", percent: 21.1, color: "#f7df1e" },
            { name: "PHP", percent: 9.9, color: "#8993be" }
        ]
    },
    {
        name: "Notes App",
        image: ch,
        github: "https://github.com/EveryonesTalking/blockchain-popularmonster",
        languages: [
            { name: "JS", percent: 57.5, color: "#f7df1e" },
            { name: "CSS", percent: 31.6, color: "#2965f1" },
            { name: "HTML", percent: 10.9, color: "#e34c26" }
        ]
    },
    {
        name: "Pets and Pals",
        image: pnp,
        github: "https://github.com/Amarok1214/PetAndPals",
        languages: [
            { name: "JS", percent: 39.7, color: "#f7df1e" },
            { name: "Java", percent: 33.6, color: "#007396" },
            { name: "CSS", percent: 24.4, color: "#2965f1" },
            { name: "HTML", percent: 2.4, color: "#e34c26" }
        ]
    },
    {
        name: "Edu Wheels",
        image: edu,
        github: "https://github.com/JeckTupir/IT342-EduWheels",
        languages: [
            { name: "JS", percent: 57.9, color: "#f7df1e" },
            { name: "Java", percent: 26.1, color: "#007396" },
            { name: "Kotlin", percent: 9.7, color: "#7f52ff" },
            { name: "CSS", percent: 6, color: "#2965f1" }
        ]
    },
    {
        name: "Wildcats Circuit Hub",
        image: wch,
        github: "https://github.com/ElReyDeLosGorditos/WildCats-CircuitHub",
        languages: [
            { name: "JS", percent: 50.3, color: "#f7df1e" },
            { name: "CSS", percent: 29.4, color: "#2965f1" },
            { name: "Java", percent: 20.1, color: "#007396" }
        ]
    },
    {
        name: "BCD Car Rental",
        image: bcd,
        github: "https://github.com/Amarok1214/BCD",
        languages: [
            { name: "HTML", percent: 67.8, color: "#e34c26" },
            { name: "Python", percent: 31.5, color: "#3776ab" },
            { name: "CSS", percent: 0.7, color: "#2965f1" }
        ]
    },
    {
        name: "The Calamity",
        image: c    ,
        github: "https://github.com/KArruuuu/The-Calamity",
        languages: [
            { name: "Java", percent: 100, color: "#007396" }
        ]
    }
];

const designs = [
    { name: "BCD Car Rental(Book)", image: bcde }, // Replace with design imports
    { name: "BCD Car Rental(Home Page)", image: bcd1 },
    { name: "BCD Car Rental(Book Now)", image: bcd2 },
    { name: "Edu Wheels(Log In)", image: eduw },
    { name: "GLYPH(Connect Wallet)", image: gly },
    { name: "Room Radar(Landing Page)", image: rr },
    { name: "Room Radar(Reservation)", image: rr1 },
    { name: "Room Radar(Room Details)", image: rr2 },
    { name: "Soul Play(Log In)", image: sp },
    { name: "Tasker(Log In)", image: tr },

    // Add more as needed
];

export default function Projects() {
    const [activeImage, setActiveImage] = useState(null);
    // Track hover state per card using an object { index: languageData }
    const [hoveredLang, setHoveredLang] = useState({});

    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        onClick={() => setActiveImage(project.image)}
                    >
                        <h3>{project.name}</h3>
                        <img src={project.image} alt={project.name} />

                        {/* Language Info Container */}
                        <div className="language-section">
                            <div className="language-label">
                                {hoveredLang[index] ? (
                                    <span className="fade-in">
                                        <span
                                            className="dot"
                                            style={{ backgroundColor: hoveredLang[index].color }}
                                        ></span>
                                        <strong>{hoveredLang[index].name}</strong> {hoveredLang[index].percent}%
                                    </span>
                                ) : (
                                    <span className="placeholder">Languages</span>
                                )}
                            </div>

                            <div className="language-bar">
                                {project.languages.map((lang, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            width: `${lang.percent}%`,
                                            backgroundColor: lang.color
                                        }}
                                        onMouseEnter={() => setHoveredLang({ ...hoveredLang, [index]: lang })}
                                        onMouseLeave={() => setHoveredLang({ ...hoveredLang, [index]: null })}
                                    />
                                ))}
                            </div>
                        </div>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>

            {/* Modal remains unchanged */}
            {activeImage && (
                <div className="project-modal-overlay" onClick={() => setActiveImage(null)}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <img src={activeImage} alt="Project preview" />
                    </div>
                </div>
            )}

            <h2 className="section-divider">Designs</h2>
            <div className="projects-grid">
                {designs.map((design, index) => (
                    <div
                        key={index}
                        className="project-card design-card"
                        onClick={() => setActiveImage(design.image)}
                    >
                        <h3>{design.name}</h3>
                        <img src={design.image} alt={design.name} />
                        <p className="view-text">Click to view design</p>
                    </div>
                ))}
            </div>

            {/* Shared Modal */}
            {activeImage && (
                <div className="project-modal-overlay" onClick={() => setActiveImage(null)}>
                    <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                        <img src={activeImage} alt="Preview" />
                    </div>
                </div>
            )}
        </section>
    );
}
