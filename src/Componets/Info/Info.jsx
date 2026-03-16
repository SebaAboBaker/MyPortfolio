import { useEffect, useRef, useState } from 'react'
import './Info.css'
import BGInfo from '../../assets/BGInfo.svg'

const Info = ({ currentTheme }) => {

    const [showInfo, setShowInfo] = useState(false)
    const infoRef = useRef(null)

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowInfo(entry.isIntersecting)
            },
            { threshold: 0.3 }
        )

        if (infoRef.current) {
            observer.observe(infoRef.current)
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current)
            }
        }

    }, [])

    return (
        <section
            ref={infoRef}
            className={`Info ${currentTheme === 'dark' ? 'Info-dark' : ''} ${showInfo ? 'show-info' : ''}`}
            id="info"
        >

        <div className="InfoContainer">

            <img src={BGInfo} alt="info background" className="BGInfo" />

            <div className="InfoContent">

                <div className="InfoText">
                    <h2 className="InfoTitle">
                        Let's build something great together
                    </h2>

                    <p className="InfoDescription">
                        If you have an idea or a project you'd like to discuss,
                        feel free to contact me and let's make it happen.
                    </p>
                </div>

                <a href="#contact" className="InfoButton">
                    Contact
                </a>

            </div>

        </div>

        </section>
    )
}

export default Info