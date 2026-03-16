    import './ProjectDetails.css'
    import { Link } from 'react-router-dom'

    const ProjectDetails = ({
    currentTheme,
    title,
    description,
    languages,
    framework,
    libraries,
    github
    }) => {
    return (
        <section className={`ProjectDetails ${currentTheme === 'dark' ? 'ProjectDetails-dark' : ''}`}>
        <div className="ProjectDetailsContainer">
            <Link to="/" className="BackButton">
            ← Back
            </Link>

            <div className="ProjectDetailsCard">
            <div className="ProjectDetailsTop">
                <p className="ProjectDetailsMiniTitle">Project Details</p>
                <h1 className="ProjectDetailsTitle">{title}</h1>
                <p className="ProjectDetailsDescription">{description}</p>
            </div>

            <div className="ProjectDetailsInfoBox">
                <div className="ProjectDetailsRow">
                <span className="ProjectDetailsLabel">Basic Languages</span>
                <p className="ProjectDetailsValue">{languages}</p>
                </div>

                <div className="ProjectDetailsRow">
                <span className="ProjectDetailsLabel">Framework</span>
                <p className="ProjectDetailsValue">{framework}</p>
                </div>

                <div className="ProjectDetailsRow">
                <span className="ProjectDetailsLabel">Libraries</span>
                <p className="ProjectDetailsValue">{libraries}</p>
                </div>
            </div>

            <div className="ProjectDetailsActions">
                <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="ProjectDetailsButton"
                >
                View on Github
                </a>
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default ProjectDetails