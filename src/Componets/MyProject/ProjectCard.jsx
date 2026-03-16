import './ProjectCard.css'
import { Link } from 'react-router-dom'
import ArrowIcon from '../../assets/Icon.png'

const ProjectCard = ({ project }) => {
    return (
        <div className="ProjectCard">

        <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="ProjectImageLink"
        >
            <img
            src={project.image}
            alt={project.title}
            className="ProjectImage"
            />
        </a>

        <div className="ProjectInfo">

            <div className="ProjectText">

            <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="ProjectTitle"
            >
                {project.title}
            </a>

            <p className="ProjectTech">
                {project.tech}
            </p>

            </div>

            <Link
            to={project.page}
            className="ProjectArrow"
            >
            <img src={ArrowIcon} alt="project details" />
            </Link>

        </div>

        </div>
    )
}

export default ProjectCard