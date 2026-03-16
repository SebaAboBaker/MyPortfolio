import { useEffect, useRef, useState } from 'react'
import './About.css'
import CircleBg from '../../assets/Circle2.svg'
import HtmlIcon from '../../assets/HTML.png'
import JsIcon from '../../assets/JS.png'
import ReactIcon from '../../assets/REACT.png'
import FigmaIcon from '../../assets/FIGMA.png'
import GithubIcon from '../../assets/GITHUB.png'
import GithubWIcon from '../../assets/GITHUBW.png'
import Percent90 from '../../assets/90.svg'
import Percent85 from '../../assets/85.svg'
import Percent95 from '../../assets/95.svg'

const About = ({ currentTheme }) => {
    const [showAbout, setShowAbout] = useState(false)
    const aboutRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowAbout(entry.isIntersecting)
            },
            {
                threshold: 0.25
            }
        )

        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current)
            }
        }
    }, [])

    return (
        <section
            ref={aboutRef}
            className={`About ${currentTheme === 'dark' ? 'About-dark' : ''} ${showAbout ? 'show-about' : ''}`}
            id="aboutme"
        >
            <div className="AboutContainer">
                <div className="AboutLeft">
                    <div className="Box">
                        <img src={CircleBg} alt="circle background" className="CBG" />
                        <img src={HtmlIcon} alt="HTML" className="HtmlIcon" />
                        <img src={JsIcon} alt="JavaScript" className="JsIcon" />
                        <img src={FigmaIcon} alt="Figma" className="FigmaIcon" />
                        <img
                            src={currentTheme === 'dark' ? GithubWIcon : GithubIcon}
                            alt="GitHub"
                            className="GitHubIcon"
                        />
                        <img src={ReactIcon} alt="React" className="ReactIcon" />
                    </div>
                </div>

                <div className="AboutRight">
                    <h2 className="AboutTitle">About Me</h2>
                    <p className="AboutDescription">
                        I’m a passionate Front-End Developer who enjoys building clean, responsive, and user-friendly web interfaces using modern technologies like React, HTML, and CSS.
                    </p>

                    <div className="SkillsBox">

                        <div className="SkillItem">
                            <div className="SkillTop">
                                <span>HTML5</span>
                                <img src={Percent90} alt="90%" className="SkillPercentImg HtmlPercentImg" />
                            </div>
                            <div className="SkillBar">
                                <div className="HtmlFill"></div>
                            </div>
                        </div>

                        <div className="SkillItem">
                            <div className="SkillTop">
                                <span>CSS3</span>
                                <img src={Percent85} alt="85%" className="SkillPercentImg CSSPercentImg" />
                            </div>
                            <div className="SkillBar">
                                <div className="CSSFill"></div>
                            </div>
                        </div>

                        <div className="SkillItem">
                            <div className="SkillTop">
                                <span>Javascript</span>
                                <img src={Percent95} alt="95%" className="SkillPercentImg JSPercentImg" />
                            </div>
                            <div className="SkillBar">
                                <div className="JSFill"></div>
                            </div>
                        </div>

                        <div className="SkillItem">
                            <div className="SkillTop">
                                <span>React</span>
                                <img src={Percent90} alt="90%" className="SkillPercentImg ReactPercentImg" />
                            </div>
                            <div className="SkillBar">
                                <div className="ReactFill"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About