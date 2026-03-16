import { useEffect, useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Componets/NavBar/NavBar.jsx'
import Hero from './Componets/Hero/Hero.jsx'
import About from './Componets/About/About.jsx'
import Education from './Componets/Education/Education.jsx'
import Info from './Componets/Info/Info.jsx'
import MyProject from './Componets/MyProject/MyProject.jsx'
import ProjectDetails from './Componets/MyProject/ProjectDetails.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Footer from './Componets/Footer/Footer.jsx'
import './App.css'

const App = () => {
  const [pageTheme, setPageTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', pageTheme)
    document.body.style.backgroundColor = pageTheme === 'dark' ? '#1d2130' : '#fdfdfd'
    document.body.style.transition = '0.3s'
  }, [pageTheme])

  const handleTheme = () => {
    setPageTheme((oldTheme) => (oldTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <HashRouter>
      <Navbar currentTheme={pageTheme} changeTheme={handleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <Hero currentTheme={pageTheme} />
              </section>

              <section id="aboutme" className="page-section">
                <About currentTheme={pageTheme} />
              </section>

              <section id="education" className="page-section">
                <Education currentTheme={pageTheme} />
              </section>

              <section id="info" className="page-section">
                <Info currentTheme={pageTheme} />
              </section>

              <section id="projects">
                <MyProject currentTheme={pageTheme} />
              </section>

              <section id="contact" className="page-section">
                <Contact currentTheme={pageTheme} />
              </section>

              <Footer currentTheme={pageTheme} />
            </main>
          }
        />

        <Route
          path="/project1"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Flora"
              description="A clean and responsive real estate landing page built with pure HTML & CSS, designed to showcase properties and drive sales conversions. The page features a curated property listings section, an integrated contact form for inquiries, and a location map to help buyers explore available units. Focused on elegant UI with smooth layout structure, Flora delivers a premium browsing experience that guides visitors from discovery to decision."
              languages="HTML5, CSS3"
              framework="None"
              libraries="None"
              github="https://github.com/SebaAboBaker/flora"
            />
          }
        />

        <Route
          path="/project2"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Blog Website"
              description="A clean blog website built with React, HTML & CSS, featuring a newsletter subscription, dynamic post grid, and authentication pages."
              languages="HTML5, CSS3, JavaScript"
              framework="None"
              libraries="None"
              github="https://github.com/SebaAboBaker/Blog"
            />
          }
        />

        <Route
          path="/project3"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Dashboard"
              description="A responsive admin dashboard built with React & Laravel API, supporting full CRUD operations with a clean modern UI."
              languages="HTML5, CSS3, JavaScript"
              framework="None"
              libraries="None"
              github="https://github.com/SebaAboBaker/Dashboard-"
            />
          }
        />

        <Route
          path="/project4"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Educational Platform"
              description="A fully responsive multi-page educational platform built with HTML & CSS. Includes dedicated pages for course listings with category browsing, a blog, FAQs, contact form, and user login — all tied together with a clean and structured layout."
              languages="HTML5, CSS3"
              framework="None"
              libraries="None"
              github="https://github.com/SebaAboBaker/EduPress"
            />
          }
        />

        <Route
          path="/project5"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Medical Project"
              description="Where healthcare meets clean design. A modern medical landing page built with HTML, CSS & JavaScript, bringing together everything a patient needs in one place — browse medications, explore doctors and their specialties, book appointments, and get in touch, all behind a smooth login experience."
              languages="HTML5, CSS3, JavaScript"
              framework="Bootstrap"
              libraries="None"
              github="https://github.com/SebaAboBaker/Medical-project"
            />
          }
        />

        <Route
          path="/project6"
          element={
            <ProjectDetails
              currentTheme={pageTheme}
              title="Shop"
              description="A simple web project built with HTML, CSS & JavaScript to practice core data operations — search and delete functionality."
              languages="HTML5, CSS3, JavaScript"
              framework="None"
              libraries="None"
              github="https://github.com/SebaAboBaker/Shop"
            />
          }
        />
      </Routes>
    </HashRouter>
  )
}

export default App
