import * as React from "react";

// import { StaticImage } from "gatsby-plugin-image";
import UserProfileBg from "@images/dody.jpg";

// import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "@sass/components/Header.scss";

const Header = () => (
    <header className="header">
        <div className="header__logo">
            <div className="header__logo__picture-wrapper">
                <img src={UserProfileBg} alt="Dody Pras User Profile"/>
            </div>
            <a className="header__logo__title" href="/">Dody Prasetyo</a>
        </div>
        <div className="header__menus">
            <a className="header__menus__title" href="/">Dody Prasetyo</a>
            <nav className="header__menus__links">

                <AniLink className="menu-item" fade to="/" activeClassName="active">Home</AniLink>
                <AniLink className="menu-item" fade to="/work" activeClassName="active">Work</AniLink>
                <AniLink className="menu-item" fade to="/projects" activeClassName="active">Projects</AniLink>
                {/* <AniLink className="menu-item" fade to="/contact" activeClassName="active">Contact</AniLink> */}
                <a href="#" className="menu-item" onClick={() => alert('for more info, just contact me at prasetyodody17@gmail.com')}>Contact</a>
            </nav>
        </div>
    </header>
);

export default Header;