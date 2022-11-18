import * as React from "react";

import Header from "@components/Header";

import Footer from "@components/Footer";

import { Helmet } from "react-helmet";

// global styles
import "@sass/main.scss";

const Layout = (props) => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dody Prasetyo | Web Developer</title>
        </Helmet>
        
        <div className="wrapper">
            <Header />
            
            <main className="wrapper__main">
                {props.children}
            </main>

            <Footer />
        </div>
    </>
);

export default Layout;
