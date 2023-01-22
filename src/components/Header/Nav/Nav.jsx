import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <React.Fragment>
            <nav className="nav-header">
                <NavLink to={'/'}>
                    Accueil
                </NavLink>
                <NavLink to={'/'}>
                    A Propos
                </NavLink>
            </nav>
        </React.Fragment>
    )
}