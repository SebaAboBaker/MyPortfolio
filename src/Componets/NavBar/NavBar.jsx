import { useEffect, useState } from 'react'
import './NavBar.css'
import moonIcon from '../../assets/Moon.png'
import sunIcon from '../../assets/Sun_fill.png'

const Navbar = ({ currentTheme, changeTheme }) => {
    const [currentSection, setCurrentSection] = useState('home')
    const [menuOpen, setMenuOpen] = useState(false)

    const NavItem = [
        { label: 'Home', to: '#home' },
        { label: 'About me', to: '#aboutme' },
        { label: 'Education', to: '#education' },
        { label: 'Projects', to: '#projects' },
        { label: 'Contact', to: '#contact' },
    ]

    useEffect(() => {
        const allSections = document.querySelectorAll('section[id]')

        const sectionObserver = new IntersectionObserver(
            (items) => {
                items.forEach((item) => {
                    if (item.isIntersecting) {
                        setCurrentSection(item.target.id)
                    }
                })
            },
            { threshold: 0.5 }
        )

        allSections.forEach((item) => sectionObserver.observe(item))

        return () => {
            allSections.forEach((item) => sectionObserver.unobserve(item))
        }
    }, [])

    const moveToSection = (event, sectionId) => {
        event.preventDefault()
        setMenuOpen(false)

        const targetSection = document.getElementById(sectionId)
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${currentTheme === 'dark' ? 'navbar-dark' : ''}`}>
            <div className="NavBarContainer">
                <div className="NavBarLogo">Seba</div>

                <ul className="NavBarLinks">
                    {NavItem.map((item) => (
                        <li key={item.to}>
                            <a
                                href={item.to}
                                className={
                                    currentSection === item.to.slice(1)
                                        ? 'navbar-item navbar-item-active'
                                        : 'navbar-item'
                                }
                                onClick={(event) => moveToSection(event, item.to.slice(1))}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="NavBarRight">
                    <button className="NavBarButton" onClick={changeTheme}>
                        <img
                            src={currentTheme === 'light' ? moonIcon : sunIcon}
                            alt="theme icon"
                        />
                    </button>

                    <button
                        className={`HamburgerBtn ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div
                className={`MobileMenu ${menuOpen ? 'MobileMenu-open' : ''} ${currentTheme === 'dark' ? 'MobileMenu-dark' : ''}`}
            >
                <ul>
                    {NavItem.map((item) => (
                        <li key={item.to}>
                            <a
                                href={item.to}
                                className={
                                    currentSection === item.to.slice(1)
                                        ? 'navbar-item navbar-item-active'
                                        : 'navbar-item'
                                }
                                onClick={(event) => moveToSection(event, item.to.slice(1))}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar