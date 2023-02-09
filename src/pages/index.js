import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Home.scss";


const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <h1>👋 Hi, I'm Dody.</h1>
      <p className="txt-large">
        I'm a Web Developer based in Bali, I've been learning/coding a website more than 5 years since I was in school, and I've been working professionally for 3 years. Mostly I'm working with popular libraries and framework such as React JS, Vue JS, Next JS, Nuxt JS, Nest JS, Express and Laravel.
      </p>
      <p className="txt-large">
        I love typescript too, currently I use typescript for all of my new projects.
      </p>
      {/* <p className="txt-large">Curriculum Vitae: <br />
      <a href="https://drive.google.com/file/d/1-AqkokZ_uQWzjOcU3NEaWXEZGU2GJWqW/view?usp=sharing" target="_blank" rel="noreferrer">Dody Prasetyo CV 2022.pdf</a>
      </p> */}
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
