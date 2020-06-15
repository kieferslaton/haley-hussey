import React, { useState } from "react"
import contactImg from "../images/contact.jpg"
import * as emailjs from "emailjs-com"

import Layout from "../components/layout"
import SEO from '../components/seo'
import apiConfig from '../apikeys'

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email, phone, message } = form

    let templateParams = {
      email: email,
      name: name,
      phone: phone,
      message: message,
    }

    let service_id = "default_service"
    let template_id = apiConfig.emailJsTemplate
    let user_id = apiConfig.emailJsUser

    emailjs.send(service_id, template_id, templateParams, user_id).then(
      function (response) {
        setSubmitted(true)

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      },
      function (error) {
      }
    )
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prevState => ({ ...prevState, [name]: value }))
  }

  if (!submitted) {
    return (
      <Layout>
        <SEO title="Contact" />
        <div id="about" class="container-fluid p-0">
          <div className="row mt-2 mb-1 justify-content-center">
            <div className="col-10 col-sm-8 col-md-5 col-lg-4 my-auto p-2">
              <img className="img-fluid" src={contactImg} alt="contact" />
            </div>
            <div id="contactForm" className="col-md-5 col-lg-6 m-4 text-center">
              <form onSubmit={handleSubmit}>
                <div class="form-row justify-content-center">
                  <div className="form-group col-sm-10 col-md-8 col-lg-6">
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      onChange={handleChange}
                      value={form.name}
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="form-row justify-content-center">
                  <div className="form-group col-sm-10 col-md-8 col-lg-6">
                    <label for="email">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      value={form.email}
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="form-row justify-content-center">
                  <div className="form-group col-sm-10 col-md-8 col-lg-6">
                    <label for="phone">Phone:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      onChange={handleChange}
                      value={form.phone}
                      id="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div class="form-row justify-content-center">
                  <div className="form-group col-sm-10">
                    <label for="message">Message:</label>
                    <textarea
                      className="form-control"
                      name="message"
                      onChange={handleChange}
                      value={form.message}
                      id="message"
                      placeholder="Your Message Here."
                      rows="4"
                    />
                  </div>
                </div>
                <div class="form-row justify-content-center">
                  <button type="submit" class="btn btn-dark col-6">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 text-center">
              <p>Thanks!</p>
              <button class="btn btn-dark" onClick={() => setSubmitted(false)}>
                Back
              </button>
              <p>{form.name}</p>
              <p>{form.email}</p>
              <p>{form.phone}</p>
              <p>{form.message}</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
