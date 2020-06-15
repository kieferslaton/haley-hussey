/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';
import Header from "./header"
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
        <FaFacebookF className="fab" />
        <FaInstagram className="fab" />
        <FaYoutube className="fab" />
      </div>
    </div>
  )
}

export default Layout
