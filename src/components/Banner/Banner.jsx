import React from "react";

export default function Banner({children}) {
    return (
        <React.Fragment>
            <section className="banner">
                {children}
            </section>
        </React.Fragment>
    )
}