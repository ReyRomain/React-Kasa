import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../images/logo.png";

export default function Logo() {
    return (
        <>
            <Link to={'/'}>
                <img src={LogoImage} alt='Le logo de Kasa' />
            </Link>
        </>
    )
}