import React from "react";

import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Marine</h1>
                <p className={styles.description}>I'm a Junior Front-End Developer.</p>
                <a className={styles.contactBtn} href="mailto:vanheesmarine@gmail.com">Contact Me</a>
            </div>
            <img
            className={styles.heroImg}
            src={getImageUrl("hero/heroImage.png")}
            alt="Me"
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};