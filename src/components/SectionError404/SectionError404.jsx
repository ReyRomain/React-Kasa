import React from "react";
import { Link } from "react-router-dom";

export default function SectionError404() {
    return (
        <>
            <section className="section-error404">
                <h1>
                    404
                </h1>
                <p>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link to="/">
                    Retourner sur la page d'accueil
                </Link>
            </section>
        </>
    )
}