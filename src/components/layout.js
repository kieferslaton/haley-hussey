/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaLinkedinIn} from 'react-icons/fa';
import MainMenu from './main-menu'
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <div>
      <MainMenu />
      <div className="mt-4">
      {children}
      </div>
      <div className="row justify-content-center mt-3 mb-5">
        <a href="https://www.facebook.com/haley.hussey" target="_blank"><FaFacebookF className="fab" /></a>
        <a href="https://www.instagram.com/hiphiphaley" target="_blank"><FaInstagram className="fab" /></a>
        <a href="https://www.linkedin.com/in/haley-hussey-04566119/" target="_blank"><FaLinkedinIn className="fab" /></a>
      </div>
    </div>
  )
}

export default Layout
