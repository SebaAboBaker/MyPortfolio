import { useEffect, useRef, useState } from 'react'
import './MyProject.css'
import ProjectCard from './ProjectCard'
import Project1 from '../../assets/flora.png'
import Project2 from '../../assets/Blog.png'
import Project3 from '../../assets/Dashboard.png'
import Project4 from '../../assets/EduPress.png'
import Project5 from '../../assets/Medical.png'
import Project6 from '../../assets/Shop.png'

const MyProject = ({ currentTheme }) => {
    const [showProjects, setShowProjects] = useState(false)
    const projectsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowProjects(entry.isIntersecting)
            },
            {
                threshold: 0.2
            }
        )

        if (projectsRef.current) {
            observer.observe(projectsRef.current)
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current)
            }
        }
    }, [])

    const projectsData = [
        {
        id: 1,
        title: 'flora',
        tech: 'HTML5 - CSS3',
        image: Project1,
        github: 'https://github.com/SebaAboBaker/flora',
        page: '/project1'
        },
        {
        id: 2,
        title: 'Blog Website',
        tech: 'HTML5 - CSS3 - javaScript',
        image: Project2,
        github: 'https://github.com/SebaAboBaker/Blog',
        page: '/project2'
        },
        {
        id: 3,
        title: 'Dashboard',
        tech: 'HTML5 - CSS3 - React',
        image: Project3,
        github: 'https://github.com/SebaAboBaker/Dashboard-',
        page: '/project3'
        },
        {
        id: 4,
        title: 'Educational Platform',
        tech: 'HTML5 - CSS3',
        image: Project4,
        github: 'https://github.com/SebaAboBaker/EduPress',
        page: '/project4'
        },
        {
        id: 5,
        title: 'Medical Project',
        tech: 'HTML5 - CSS3 - javaScript',
        image: Project5,
        github: 'https://github.com/SebaAboBaker/Medical-project',
        page: '/project5'
        },
        {
        id: 6,
        title: 'shop',
        tech: 'HTML5 - CSS3 - javaScript',
        image: Project6,
        github: 'https://github.com/SebaAboBaker/Shop',
        page: '/project6'
        }
    ]

    return (
        <section
            ref={projectsRef}
            className={`MyProject ${currentTheme === 'dark' ? 'MyProject-dark' : ''} ${showProjects ? 'show-projects' : ''}`}
            id="projects"
        >
            <div className="MyProjectContainer">
                <div className="MyProjectHeader">
                    <div className="MyProjectTitleBox">
                        <p className="MyProjectTitle1">Portfolio</p>
                        <h2 className="MyProjectTitle2">
                            My Creative Works <br />
                            Latest <span>Projects</span>
                        </h2>
                    </div>

                    <a
                        href="https://github.com/SebaAboBaker"
                        target="_blank"
                        rel="noreferrer"
                        className="MyProjectButton"
                    >
                        View Github
                    </a>
                </div>

                <div className="MyProjectGrid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyProject