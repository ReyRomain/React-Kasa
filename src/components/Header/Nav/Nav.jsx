import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <NavLink to={'/'}>
                    Accueil
                </NavLink>
                <NavLink to={'/'}>
                    A Propos
                </NavLink>
            </nav>
        </>
    )
}