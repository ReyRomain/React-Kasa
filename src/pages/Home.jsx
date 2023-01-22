import React from "react";
import Image from "../images/img-home.jpg";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner>
                    <img src={Image} alt="Une montagne embrumée" />
                    <h1>
                        Chez vous, partout et ailleurs
                    </h1>
                </Banner>
                <Cards />
            </main>
            <Footer />
        </>
    )
}