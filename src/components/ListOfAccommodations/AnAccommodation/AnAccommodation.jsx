import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AnAccommodation({id, cover, title, location}) {
    return (
        <>
            <Link to={`/accommodation/${id}`} key={`accommodation-${id}`}>
                <figure>
                    <figcaption>
                        {title}
                    </figcaption>
                    <img src={cover} alt={`Une location située en ${location}`} />
                    <div className="filter" />
                </figure>
            </Link>
        </>
    )
}

AnAccommodation.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    location: PropTypes.string
}

export default AnAccommodation;