import { useState, useMemo } from "react";
import "../css/Skills.css";

const skillData = [
    { name: "C", level: 58, distribution: 8.9, color: "#a8b9cc" },
    { name: "PHP", level: 49, distribution: 7.5, color: "#8993be" },
    { name: "Java", level: 68, distribution: 10.4, color: "#007396" },
    { name: "HTML", level: 78, distribution: 12.1, color: "#e34c26" },
    { name: "CSS", level: 73, distribution: 11.2, color: "#2965f1" },
    { name: "Python", level: 71, distribution: 10.9, color: "#3776ab" },
    { name: "JavaScript", level: 64, distribution: 9.8, color: "#f7df1e" },
    { name: "React", level: 72, distribution: 11.1, color: "#61dafb" },
    { name: "Kotlin", level: 43, distribution: 6.6, color: "#7f52ff" },
    { name: "Cardano", level: 28, distribution: 4.3, color: "#0033ad" },
    { name: "Spring Boot", level: 47, distribution: 7.2, color: "#6db33f" },
];

export default function Skills() {
    const [activeSkill, setActiveSkill] = useState(null);

    // Calculate Donut Segments based on the fixed distribution percentages
    const donutData = useMemo(() => {
        let cumulativePercent = 0;
        return skillData.map((skill) => {
            const startPercent = cumulativePercent;
            const slicePercent = skill.distribution;
            cumulativePercent += slicePercent;
            return { ...skill, startPercent, slicePercent };
        });
    }, []);

    const getPoints = () => {
        const total = skillData.length;
        const radius = 140;
        const center = 200;
        return skillData.map((skill, i) => {
            const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
            const dist = (radius * skill.level) / 100;
            return `${center + dist * Math.cos(angle)},${center + dist * Math.sin(angle)}`;
        }).join(" ");
    };

    return (
        <section className="skills">
            <h2>Technical Skills</h2>

            <div className="skills-layout">
                {/* INTERACTIVE RADAR */}
                <div className="radar-wrapper">
                    <svg viewBox="0 0 400 400" className="manual-radar">
                        {[20, 40, 60, 80, 100].map((tick) => (
                            <polygon key={tick} className="radar-grid-line"
                                     points={skillData.map((_, i) => {
                                         const angle = (Math.PI * 2 * i) / skillData.length - Math.PI / 2;
                                         return `${200 + (140 * tick / 100) * Math.cos(angle)},${200 + (140 * tick / 100) * Math.sin(angle)}`;
                                     }).join(" ")}
                            />
                        ))}
                        <polygon points={getPoints()} className="radar-shape" />

                        {skillData.map((skill, i) => {
                            const angle = (Math.PI * 2 * i) / skillData.length - Math.PI / 2;
                            const x = 200 + 175 * Math.cos(angle);
                            const y = 200 + 175 * Math.sin(angle);
                            const isActive = activeSkill === skill.name;

                            return (
                                <g
                                    key={i}
                                    className={`radar-node ${isActive ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveSkill(skill.name)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    <circle
                                        cx={200 + (140 * skill.level / 100) * Math.cos(angle)}
                                        cy={200 + (140 * skill.level / 100) * Math.sin(angle)}
                                        r={isActive ? 8 : 4} // Logic stays here
                                        fill={skill.color}
                                        className="node-dot"
                                    />
                                    <text x={x} y={y} textAnchor="middle" className="radar-label">{skill.name}</text>
                                </g>
                            );
                        })}
                    </svg>
                </div>

                {/* INTERACTIVE DONUT */}
                <div className="donut-wrapper">
                    <div className="donut-container">
                        <svg viewBox="0 0 100 100" className="donut-chart">
                            {donutData.map((skill, i) => (
                                <circle key={i} cx="50" cy="50" r="40" fill="transparent"
                                        stroke={skill.color} strokeWidth={activeSkill === skill.name ? "14" : "10"}
                                        strokeDasharray={`${skill.slicePercent} ${100 - skill.slicePercent}`}
                                        strokeDashoffset={-skill.startPercent + 25}
                                        className={`donut-segment ${activeSkill === skill.name ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveSkill(skill.name)}
                                        onMouseLeave={() => setActiveSkill(null)}
                                />
                            ))}
                        </svg>
                        <div className="donut-center">
                            {activeSkill ? (
                                <div className="center-info fade-in">
                                    <span className="center-name">{activeSkill}</span>
                                    <span className="center-val">{skillData.find(s => s.name === activeSkill).distribution}%</span>
                                    <span className="center-sub">proficiency: {skillData.find(s => s.name === activeSkill).level}%</span>
                                </div>
                            ) : (
                                <span className="center-hint">Hover to explore</span>
                            )}
                        </div>
                    </div>

                    <div className="donut-legend">
                        {skillData.map((skill, i) => (
                            <button key={i}
                                    className={`legend-item ${activeSkill === skill.name ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveSkill(skill.name)}
                                    onMouseLeave={() => setActiveSkill(null)}
                            >
                                <span className="legend-dot" style={{ backgroundColor: skill.color }}></span>
                                {skill.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}