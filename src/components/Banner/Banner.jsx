import React from "react";

export default function Banner({children}) {
    return (
        <>
            <section className="banner">
                {children}
            </section>
        </>
    )
}