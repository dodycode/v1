import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Home.scss";


const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <h1>👋 Hi, I'm Dody.</h1>
      <p className="txt-large">
      I'm a Full Stack Web Developer with 4 years of experience working in Web Development. 
      Specialized in Backend Development with Laravel PHP Framework and 
      Skilled with Frontend Development too, especially with some javascript frameworks 
      like React JS and Vue JS. 
      </p>
      <p className="txt-large">For my Resume / CV, you can download from here: <br />
      <a href="https://drive.google.com/file/d/1DieKvPkJ8fJPMhaS6S9rYFdRSXwo1PyS/view">Dody Prasetyo CV 2022.pdf</a>
      </p>
      <p className="txt-large" style={{marginBottom: '10px'}}>My other Social Media, let's get connected!:</p>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/dodycode" target="_blank" rel="noreferrer">Linkedin</a>
        <a href="https://www.github.com/dodycode" target="_blank" rel="noreferrer">Github</a>
        <a href="https://www.facebook.com/prasdody" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://instagram.com/__dodypras" target="_blank" rel="noreferrer">Instagram</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
