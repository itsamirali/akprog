import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

import cx from "classnames"

import styles from "./Home.module.css"

function HomePage() {
    return (
        <div className={cx(styles.homeStyles)}>
            <div className="particle-con">
                <Particle />
            </div>
            <div className={cx(styles.typography)}>
                <h1>Hi, I'm <span>Amirali Karimi</span></h1>
                <p>
                Frontend Web Developer | efficient web development services
                </p>
                <div className={cx(styles.icons)}>
                    <a href="https://codepen.io/pen/" className={cx(styles.icon, "i-facebook")}>
                        <FacebookIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className={cx(styles.icon, "i-github")}>
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className={cx(styles.icon, "i-youtube")}>
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default HomePage;
