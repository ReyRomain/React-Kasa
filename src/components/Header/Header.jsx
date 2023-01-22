import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <Logo />
                <Nav />
            </header>
        </React.Fragment>
    )
}