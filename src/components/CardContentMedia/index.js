import * as React from "react";

import "@sass/components/CardContentMedia.scss";

const CardContentMedia = (props) => (
    <figure className="content-media">
        <a className="content-media__img-wrapper" href="/work">
            {props.children}
        </a>
    </figure>
);

export default CardContentMedia;