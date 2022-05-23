import * as React from "react";

import Layout from "@components/Layout";
import CardContentInfo from "@components/CardContentInfo";
import CardContentMedia from "@components/CardContentMedia";

import techableMachineImg from "@images/projects/techable-machine.jpg";
import premiereLeagueImg from "@images/projects/premiere-league.jpg";
import reactSpotifyImg from "@images/projects/react-spotify.png";

import "@sass/pages/Work.scss";

const Projects = () => {
    return (
        <Layout>
            <div className="work">
            <div className="work__page-title-wrapper">
                <h1 className="work__page-title-wrapper__title">Projects</h1>
                <p className="txt-large">My personal projects that build for practice purposes</p>
            </div>
            <div className="work__page-content-wrapper">
                {/* react js spotify cloning app */}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={reactSpotifyImg} alt="Preview of React JS Spootify"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Spootify" 
                        desc="React JS WebApp that consume data from Spotify WEB API and use Spotify Playback SDK for playing a tracks."
                        tags={['Web App Development', 'Front End Development', 'React JS', 'React Context', 'Spotify Web Playback SDK']}
                        githubLink="https://github.com/dodycode/react-js-spotify-clone"
                    />
                </div>

                {/* premiere league */}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={premiereLeagueImg} alt="Preview of Premiere League"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Premiere League" 
                        desc="Premiere League Web App based on data generated from footbal-data.org. This webapp already implement ServiceWorker, so this web can be accessed in offline."
                        tags={['Web App Development', 'Front End Development', 'Javascript', 'Progressive Web App (PWA)']}
                        githubLink="https://github.com/dodycode/premiere-league-webapp"
                    />
                </div>

                {/*Techable Machine*/}
                <div className="work__page-content-wrapper__content">
                    <CardContentMedia>
                        <img src={techableMachineImg} alt="Preview of Techable Machine"/>
                    </CardContentMedia>

                    <CardContentInfo 
                        title="Techable Machine Mie Instant Classifier" 
                        desc="Simple web app that classifies mie instant using Google Techable Machine"
                        tags={['Web App Development', 'Front End Development', 'Javascript', 'Google Techable Machine']}
                        githubLink="https://github.com/dodycode/techablemachine-mie-instant-classifier"
                    />
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Projects;