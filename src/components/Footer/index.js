import * as React from "react";

import "@sass/components/Footer.scss";

const Footer = () => (
    <footer className="footer">
        <div className="footer__inner">
            <span className="footer__inner__text">&copy; 2022 Dodycode. Designed by Seb Kay.</span>
            <span className="footer__inner__text">Powered by React and Gatsby.js</span>
        </div>
    </footer>
);

export default Footer;