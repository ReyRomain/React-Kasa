import React, { useState } from "react";
import PropTypes from "prop-types";

function Carousel({pictures}) {
    const [current, setCurrent] = useState(0)
    const lengthPictures = pictures.length

    // Change slide for right picture
    function nextSlide() {
        setCurrent(
            current === (lengthPictures -1) ? 0 : current +1
        )
    }

    // Change slide for left picture
    function backSlide() {
        setCurrent(
            current === 0 ? lengthPictures -1 : current -1
        )
    }

    return (
        <React.Fragment>
            <section className="carousel">
                <div className="carousel__box">
                    {pictures.length > 0 ? (
                        <img className="carousel__box__image" src={pictures[current]} alt="Une photo de la location" />
                    ) : (
                        <p className="carousel__box__text">
                            Aucune image disponible
                        </p>
                    )}
                </div>

                {pictures.length > 1 ? (
                    <nav className="carousel__nav">
                        <i className="fas fa-chevron-left" onClick={backSlide} />    
                        <i className="fas fa-chevron-right" onClick={nextSlide} />
                    </nav>
                ) : (
                    ""
                )}

                {pictures.length > 1 ? (
                    <div className="carousel__number">
                        {current + 1}/{pictures.length}
                    </div>
                ) : (
                    ""
                )}
            </section>
        </React.Fragment>
    )
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string)
}

export default Carousel