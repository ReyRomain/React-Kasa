import React from "react";
import { useParams } from "react-router-dom";
import datasList from "../datas/datasList.json";
import Header from "../components/Header/Header";
import Carousel from "../components/Carousel/Carousel";
import Tags from "../components/Tags/Tags";
import Host from "../components/Host/Host";
import DropDown from "../components/DropDown/DropDown";
import Footer from "../components/Footer/Footer";

export default function Accommodation() {
    const {id} = useParams()
    
    // Get the Accommodation by id
    const accommodation = datasList.find(data => data.id === id)
    if (!accommodation) {
        return <p>Error 404</p>
    }

    const stars = [1, 2, 3, 4, 5]

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}