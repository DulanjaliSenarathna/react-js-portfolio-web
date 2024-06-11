import React from 'react'
import { FaDribbble , FaTwitter, FaBehance} from "react-icons/fa";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
                <a href="" className="footer__social-links">
                    <FaTwitter/>
                </a>
                <a href="" className="footer__social-links">
                    <FaDribbble/>
                </a>
                <a href="" className="footer__social-links">
                    <FaBehance/>
                </a>
            </div>
            <p className="footer__copyright text-cs"> &copy;<span>Dulanjali</span>All Rights Reserved</p>
  
            <p className="footer__copyright text-cs">Developed by <span>Dulanjali Senarathna</span></p>
        </div>
    </footer>
  )
}

export default Footer