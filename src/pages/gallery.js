import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from '../components/seo'

const Gallery = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState("")

  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        gallery_photos {
          nodes {
            id
            uri
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const images = data.wpgraphql.gallery_photos.nodes

  return (
    <Layout>
      <SEO title="Gallery" />
      <div class="container-fluid">
        <div class="row justify-content-center">
          {images.map(image => (
            <div
              onClick={() => {
                setShowModal(true)
                setModalImg(image.featuredImage.sourceUrl)
              }}
              class="col-lg-3 col-md-4 col-5 m-1"
              style={{
                width: 100,
                height: 250,
                backgroundImage: `url(${image.featuredImage.sourceUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>
      <div id="modal" class={showModal ? "d-block" : "d-none"}>
        <div class="container-fluid mt-5">
          <div class="row justify-content-center">
            <div id="modal-image" class="col-10 col-lg-8">
              <img src={modalImg} alt='modal'/>
              <button
                id="modal-close"
                onClick={() => {
                  setShowModal(false)
                  setModalImg("")
                }}
              >
                <span class="close-one"></span>
                <span class="close-two"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
