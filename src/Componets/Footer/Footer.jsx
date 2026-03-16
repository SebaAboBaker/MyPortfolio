import './Footer.css'
import FacebookIcon from '../../assets/Facebook.png'
import TwitterIcon from '../../assets/X.png'
import LinkedInIcon from '../../assets/linkedin.png'
import InstagramIcon from '../../assets/instagram.png'
const Footer = ({ currentTheme }) => {
    return (
        <footer className={`Footer ${currentTheme === 'dark' ? 'Footer-dark' : ''}`}>
        <div className="FooterContainer">
            <p className="FooterText">© 2026. All Rights Reserved</p>

            <p className="FooterText">Development by Seba</p>

            <div className="FooterSocials">
            <a href="https://www.facebook.com/seba.abo.baker.2025/" target="_blank" rel="noreferrer" className="FooterIcon">
                <img src={FacebookIcon} alt="facebook" />
            </a>

            <a href="https://X.com" target="_blank" rel="noreferrer" className="FooterIcon">
                <img src={TwitterIcon} alt="twitter" />
            </a>

            <a href="https://linkedin.com/in/seba-abo-baker" target="_blank" rel="noreferrer" className="FooterIcon">
                <img src={LinkedInIcon} alt="linkedin" />
            </a>

            <a href="https://instagram.com/s.e.b.a_ab/" target="_blank" rel="noreferrer" className="FooterIcon">
                <img src={InstagramIcon} alt="instagram" />
            </a>
            </div>
        </div>
        </footer>
    )
}

export default Footer