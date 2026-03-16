import './Education.css'
import BG2 from '../../assets/line.svg'
const Education = ({ currentTheme }) => {
    return (
        <section className={`Education ${currentTheme === 'dark' ? 'Education-dark' : ''}`} id="education">
        <div className="EducationContainer">
            <div className="EducationHeader">
            <p className="EducationTitle1">Education and Experience</p>
            <h2 className="EducationTitle2">Education & Experience</h2>
            </div>
            <div className="EducationContent">
            <div className="EducationColumn">
               <div className="line">
                    <img src={BG2} alt="line" className="lineImg" />
                    </div>
                <div className="EducationAll">
                <div className="EducationInfo">
                    <h3 className="Title">Front-End Development</h3>
                    <p className="Description">
                    Developing modern and responsive web interfaces using HTML, CSS,
                    JavaScript, and React with a focus on clean design and user experience.
                    </p>
                </div>

                <div className="EducationInfo">
                    <h3 className="Title">Web Interface Design</h3>
                    <p className="Description">
                    Designing user-friendly and visually balanced layouts while turning
                    interface ideas into interactive and functional web pages.
                    </p>
                </div>
                </div>
            </div>

            <div className="EducationColumn">
                 <div className="line">
  <img src={BG2} alt="line" className="lineImg" />
</div>
                <div className="EducationAll">
                <div className="EducationInfo">
                    <h3 className="Title">Academic Background</h3>
                    <p className="Description">
                    Information Engineering student with a strong interest in software
                    development, modern web technologies, and practical problem solving.
                    </p>
                </div>

                <div className="EducationInfo">
                    <h3 className="Title">Personal Projects</h3>
                    <p className="Description">
                    Building personal and academic projects to improve front-end skills
                    and gain hands-on experience in real-world web application development.
                    </p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    )
}

export default Education