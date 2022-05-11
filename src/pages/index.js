import * as React from "react";

import Layout from "@components/Layout";

import "@sass/pages/Home.scss";


const IndexPage = () => (
  <Layout>
    <div className="jumbotron">
      <h1>👋 Hi, I'm Dody.</h1>
      <p className="txt-large">
      Full Stack Developer with +3 years of experience in Web Development. 
      Specialized in Laravel PHP Framework and Skilled in Frontend Development too with some javascript frameworks like VueJS and React JS.  
      Focus on developer experience as well as user experience and web performance. 
      Building things that people can enjoy or making their lives easier.
      </p>
      <p className="txt-large" style={{marginBottom: '10px'}}>You can find me here too:</p>
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
