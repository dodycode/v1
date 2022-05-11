import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "@sass/components/Header.scss";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <div className="header__logo__picture-wrapper">
                <StaticImage src="../../images/dody.jpg" alt="Dody Pras Profile Picture"/>
            </div>
            <a className="header__logo__title" href="/">Dody Prasetyo</a>
        </div>
        <div className="header__menus">
            <a className="header__menus__title" href="/">Dody Prasetyo</a>
            <nav className="header__menus__links">

                <AniLink className="menu-item" fade to="/" activeClassName="active">Home</AniLink>
                <AniLink className="menu-item" fade to="/work" activeClassName="active">Work</AniLink>
                <AniLink className="menu-item" fade to="/contact" activeClassName="active">Contact</AniLink>
            </nav>
        </div>
    </header>
);

export default Header;