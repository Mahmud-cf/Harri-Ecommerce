import React from 'react'
import './CssFile/About.css'
import Navbar from '../Components/GlobalComponents/Navbar'
import Footer from '../Components/GlobalComponents/Footer'
import AboutOurWork from '../Components/AboutPageComponent/AboutOurWork'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='about-header' >
        <h1>Welcome to Harri Shop</h1>
      </div>
      <div className="container-fluid about-page-container-fluid">
          <div className="about-page-wrapper">
            <div>
              <AboutOurWork/>
            </div>
          </div>
      </div>
      <div className="about-footer">
       <Footer/>
      </div>
    </div>
  )
}

export default About