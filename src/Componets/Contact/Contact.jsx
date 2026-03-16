import { useEffect, useRef, useState } from 'react'
import './Contact.css'
import PhoneIcon from '../../assets/Call.png'
import MailIcon from '../../assets/MSg.png'
import LocationIcon from '../../assets/Address.png'

const Contact = ({ currentTheme }) => {
    const [showContact, setShowContact] = useState(false)
    const contactRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowContact(entry.isIntersecting)
            },
            { threshold: 0.25 }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current)
            }
        }
    }, [])

    return (
        <section
            ref={contactRef}
            className={`Contact ${currentTheme === 'dark' ? 'Contact-dark' : ''} ${showContact ? 'show-contact' : ''}`}
            id="contact"
        >
            <div className="ContactContainer">
                <div className="ContactHeader">
                    <p className="ContactTitle1">Contact</p>
                    <h2 className="ContactTitle2">
                        Let’s Discuss Your <span>Project</span>
                    </h2>
                </div>

                <div className="ContactContent">
                    <div className="ContactInfo">
                        <a href="tel:+963696073194" className="ContactItem">
                            <div className="ContactIcon">
                                <img src={PhoneIcon} alt="phone" />
                            </div>
                            <div className="ContactDatails">
                                <p className="ContactLabel">Call me</p>
                                <p className="ContactValue">+963696073194</p>
                            </div>
                        </a>

                        <a href="mailto:sebaabobaker@gmail.com" className="ContactItem">
                            <div className="ContactIcon">
                                <img src={MailIcon} alt="email" />
                            </div>
                            <div className="ContactDatails">
                                <p className="ContactLabel">Email me</p>
                                <p className="ContactValue">sebaabobaker@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://maps.google.com/?q=Damascus,Syria"
                            target="_blank"
                            rel="noreferrer"
                            className="ContactItem"
                        >
                            <div className="ContactIcon">
                                <img src={LocationIcon} alt="location" />
                            </div>
                            <div className="ContactDatails">
                                <p className="ContactLabel">Address</p>
                                <p className="ContactValue">Damascus, Syria</p>
                            </div>
                        </a>
                    </div>

                    <div className="ContactFormContainer">
                        <form className="ContactForm">
                            <div className="ContactRow">
                                <input type="text" placeholder="Full name" />
                                <input type="email" placeholder="Your email" />
                            </div>

                            <input type="text" placeholder="Phone number" className="FullInput" />

                            <textarea placeholder="Message"></textarea>

                            <button type="submit" className="ContactButton">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact