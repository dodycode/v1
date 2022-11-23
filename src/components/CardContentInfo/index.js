import * as React from "react";

import "@sass/components/CardContentInfo.scss";

const CardContentInfo = (props) => (
    <div className="content-info">
        <h2 className="content-info__title">{props.title}</h2>
        <p className="content-info__desc">{props.desc}</p>
        {props.tags ? (
            props.tags.length > 0 ? (
                <div className="content-info__meta">
                    <ul className="list">
                        {props.tags.map((tag, index) => (
                            <li className="list__item" key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
            ) : <></>
        ) : <></>}

        {props.githubLink ? 
            <a href={props.githubLink} target="_blank" rel="noreferrer" className="content-info__btn">View Project on Github</a>
        : <></> }

        {props.projectLink ? 
            <a href={props.projectLink} target="_blank" rel="noreferrer" className="content-info__btn">View Project</a>
        : <></> }
    </div>
);

export default CardContentInfo;