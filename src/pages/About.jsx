import React from "react";
import Data from "../datas/dataAboutList.json";
import Image from "../images/img-snowy-mountain.jpg";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import DropDown from "../components/DropDown/DropDown";
import Footer from "../components/Footer/Footer";

export default function About() {

    return (
        <React.Fragment>
            <Header />
            <main>
                <Banner>
                    <img src={Image} alt="Des montagnes enneigées" />
                </Banner>
                <div className="container-dropdown-about">
                    {Data.map(({title, text}) => (
                        <DropDown key={`${title}`} title={title} textArray={[text]} />
                    ))}
                </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}