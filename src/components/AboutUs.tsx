import React from "react";
import { useTranslation } from "@/lib/i18n/TranslationContext";
import styles from "./Benefits.module.css";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <section id="aboutUs" className={styles.section}>
            <h2 className={styles.heading}>
                {t.about.title}
            </h2>

            <p className={styles.description}>
                {t.about.description}
            </p>
        </section>
            )
            }

            export default AboutUs;