import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../../images/logo.png";

export default function Logo() {
    return (
        <React.Fragment>
            <Link to={'/'}>
                <div className="logo__header">
                    <img className="logo__header__image" src={LogoImage} alt='Le logo de Kasa' />
                </div>
            </Link>
        </React.Fragment>
    )
}