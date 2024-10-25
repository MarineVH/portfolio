import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt=""
                        />
                        <div className={styles.aboutItemText}>
                            <p>Based in Belgium,I am a junior front-end developer with a passion for creating responsive and user-friendly web applications. I have experience with HTML, CSS, JavaScript, and enjoy bringing designs to life with modern web technologies. I’m always eager to learn and grow, currently exploring React.js. When I’m not coding, I enjoy video games. Check out my projects!</p>
                        </div>    
                    </li>
                </ul>
            </div>
        </section>
    );
};