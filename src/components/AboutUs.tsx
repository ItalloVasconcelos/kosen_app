
import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <section id="aboutUs" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>
                        {t.about.title}
                    </h2>

                    <p className={styles.description}>
                        {t.about.description}
                    </p>
                </div>
                
                
            </div>
        </section>
    );
};

export default AboutUs;
