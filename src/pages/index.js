import React from "react"
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                <Img fluid={props.data.imageOne.childImageSharp.fluid} className="img-fluid mb-4" />
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query{
  imageOne: file(relativePath: {eq: "hero.png"}) {
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`