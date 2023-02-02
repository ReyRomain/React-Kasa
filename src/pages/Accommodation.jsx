import React from "react";
import { useParams } from "react-router-dom";
import Data from "../datas/data.json";
import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";
import DropDown from "../components/DropDown/DropDown";
import Footer from "../components/Footer/Footer";
import Error from "./Error";

export default function Accommodation() {
    const {id} = useParams()
    
    // Get the Accommodation by id
    const accommodation = Data.find(data => data.id === id)

    // If accommodation doesn't exist return component Error 404
    if (!accommodation) {
        return <Error />
    }

    const stars = [1, 2, 3, 4, 5]

    return (
        <>
            <Header />
            <main>
                <Carousel pictures={accommodation.pictures} />

                <div className="accommodation">
                    <section className="accommodation__info">
                        <div className="accommodation__info__title">
                            <h1>
                                {accommodation.title}
                            </h1>
                            <p>
                                {accommodation.location}
                            </p>
                        </div>

                        <div className="accommodation__info__tag">
                            {accommodation.tags.map((tag, index) => (
                                <Tags key={index} getTag={tag} />
                            ))}
                        </div>
                    </section>

                    <section className="accommodation__owner">
                        <div className="rate">
                            {stars.map((star) => (
                                <i 
                                    className={`fas fa-star ${star <= accommodation.rating ? " rate__colored" : ""}`} 
                                    key={`star-${star}`} 
                                />
                            ))}
                        </div>

                        <Host owner={accommodation.host} />
                    </section>
                </div>

                <div className="container-title-textarray">
                    <DropDown title="Description" textArray={[accommodation.description]} />
                    <DropDown title="Equipements" textArray={accommodation.equipments} />
                </div>
            </main>
            <Footer />
        </>
    )
}