import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

export default function Header() {
    return (
        <>
            <header>
                <Logo />
                <Nav />
            </header>
        </>
    )
}