import React from "react";
import LogoImage from "../../images/logo-white.png";

export default function Footer() {
    return (
        <>
            <footer>
                <img src={LogoImage} alt="Le logo de Kasa" />
                <p>
                    © 2020 Kasa. All rights reserved
                </p>
            </footer>
        </>
    )
}