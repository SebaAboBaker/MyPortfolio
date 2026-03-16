import { useEffect, useRef, useState } from 'react'
import './Hero.css'
import BG from '../../assets/Lines.svg'
import Squers from '../../assets/squers.svg'
import HeroImg from '../../assets/HeroBG.png'
import Nora from '../../assets/Sbsbbb.svg'
import CircleBg from '../../assets/circle.png'
import CVFile from '../../assets/Seba_Khalid_Abo_Baker_Resume1.pdf'

const Hero = ({ currentTheme }) => {
    const [showHero, setShowHero] = useState(false)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const heroRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowHero(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current)
            }
        }
    }, [])

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window
        const x = (e.clientX - innerWidth / 2) / 80
        const y = (e.clientY - innerHeight / 2) / 80
        setOffset({ x, y })
    }

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 })
    }

    return (
        <section
            ref={heroRef}
            className={`${currentTheme === 'dark' ? 'Hero Hero-dark' : 'Hero'} ${showHero ? 'show-hero' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img src={HeroImg} alt="hero background" className="HeroBg" />
            <img src={BG} alt="lines" className="HeroLines" />
            <img src={Squers} alt="squers" className="HeroSquers" />

            <div className="HeroContainer">
                <div className="HeroText">
                    <h2 className="Text1">
                        <span className="HeyText">HEY!</span> I’m Seba,
                        <br />
                        Frontend Developer
                    </h2>

                    <p className="TextDescription">
                        Professional frontend developer creating modern
                        <br />
                        and high-quality web interfaces.
                    </p>

                    <a
                        href={CVFile}
                        download="Seba_Khalid_Abo_Baker_Resume1.pdf"
                        className="HeroCVButton"
                    >
                        Download CV
                    </a>
                </div>

                <div className="HeroImageSide">
                    <div
                        className="HeroImageWrapper"
                        style={{
                            transform: `translate(${offset.x}px, ${offset.y}px)`,
                        }}
                    >
                        <img src={CircleBg} alt="circle background" className="CircleImg" />
                        <img src={Nora} alt="Seba" className="MyImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero