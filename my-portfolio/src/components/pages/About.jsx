import "../css/About.css";

import pic1 from "../../assets/pics/dia.gif";
import pic2 from "../../assets/pics/sonic.gif";
import pic3 from "../../assets/pics/genshin-impact-furina.gif";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <h2>About Me</h2>

                {/* ROW 1 */}
                <div className="about-row">
                    <p>
                        Hi, I’m <span>Karl T. Baricuatro</span>, an endeavoring UI/UX web designer.
                        I came from the town of Vallehermoso in Negros Oriental and I am
                        currently staying in the City of Talisay. I find UI/UX design
                        fascinating—from crafting visuals to shaping the overall structure
                        and feel of a project. Witnessing stunning visuals brings me pure bliss.
                    </p>

                    <div className="about-image">
                        <img src={pic1} alt="About visual 1" />
                    </div>
                </div>

                {/* ROW 2 */}
                <div className="about-row reverse">
                    <div className="about-image">
                        <img src={pic2} alt="About visual 2" />
                    </div>

                    <p>
                        Throughout my journey as an IT student at Cebu Institute of Technology,
                        most of the projects I’ve worked on involved design. UI/UX design comes
                        with its own hurdles and challenges, but with determination, anything
                        is possible. This passion fuels me to overcome obstacles and continue
                        improving my craft.
                    </p>
                </div>

                {/* ROW 3 */}
                <div className="about-row">
                    <p>
                        Sometimes I experience coding fatigue, and that’s where my hobbies come
                        in. I enjoy listening to music and playing games. I am also part of an
                        organization called <span>Wildcats eSports League</span>, where I have
                        been affiliated for two years. The community has been nothing short
                        of magnificent.
                    </p>

                    <div className="about-image">
                        <img src={pic3} alt="About visual 3" />
                    </div>
                </div>
            </div>
        </section>
    );
}
