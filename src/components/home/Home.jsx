import React from 'react'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import { FaDribbble , FaTwitter, FaBehance} from "react-icons/fa";
import './home.css'
import CV from '../../assets/cv.pdf'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home__wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Hello, <span>My Name Is</span>
            </p>
            <h1 className="home__title text-cs"><span>DULANJALI </span></h1>
            <p className="home__job">
                <span className="text-cs">I Am </span><b>Web Developer</b>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileImg} alt="" className='home__profile' />
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">3 <b>+</b></span>
                    <span className="text-sm text-cs">Years of <span>Experience</span></span>
                </p>

                <p className="home__data home__data-two">
                    <span className="text-lg">50</span>
                    <span className="text-sm text-cs">Completed <span>Projects</span></span>
                </p>

                <img src={shapeOne} className="img shape shape__1"/>
                <img src={shapeTwo} className="img shape shape__2"/>
                <img src={shapeTwo} className="img shape shape__3"/>
            </div>
            <p className="home__text">From Sri Lanka, I have rich experience in web design, also I am good at React Js. I love to talk with you about our unique</p>
            <div className="home__socials">
                <a href="" className="home__social-links">
                    <FaTwitter/>
                </a>
                <a href="" className="home__social-links">
                    <FaDribbble/>
                </a>
                <a href="" className="home__social-links">
                    <FaBehance/>
                </a>
            </div>

            <div className="home__btns">
                <a download='' href={CV} className="btn text-cs">Download CV</a>
                <a href="#skills" className="hero__link text-cs">My Skills</a>
            </div>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </div>
    </section>
  )
}

export default Home