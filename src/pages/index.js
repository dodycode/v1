import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Home.scss";


const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <h1>👋 Hi, I'm Dody.</h1>
      <p className="txt-large">
        I'm a Full Stack Developer with 4 years of experience working professionally in Web Development. 
        Specialized in Laravel PHP Framework as a Backend Framework, and experienced using Vue JS and React JS as a Frontend tools.
      </p>
      <p className="txt-large">Curriculum Vitae: <br />
      <a href="https://drive.google.com/file/d/1-AqkokZ_uQWzjOcU3NEaWXEZGU2GJWqW/view?usp=sharing" target="_blank" rel="noreferrer">Dody Prasetyo CV 2022.pdf</a>
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
