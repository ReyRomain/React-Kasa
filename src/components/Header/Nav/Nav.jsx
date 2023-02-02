import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav className="nav-header">
                <NavLink to={'/'}>
                    Accueil
                </NavLink>
                <NavLink to={'/about'}>
                    A Propos
                </NavLink>
            </nav>
        </>
    )
}