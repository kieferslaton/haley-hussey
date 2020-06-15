import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import hero from '../images/hero.png'

const IndexPage = () => (
  <Layout>
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <img src={hero} className="img-fluid" />
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage