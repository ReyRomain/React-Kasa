import React from "react";
import Header from "../components/Header/Header";
import SectionError404 from "../components/SectionError404/SectionError404";
import Footer from "../components/Footer/Footer";

export default function Error() {
    return (
        <>
            <Header />
            <main>
                <SectionError404 />
            </main>
            <Footer />
        </>
    )
}