import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Card({id, cover, title, location}) {
    return (
        <React.Fragment>
            <Link to={`/accommodation/${id}`} key={`accommodation-${id}`} className="card">
                <article >
                    <img  src={cover} alt={`Une location située en ${location}`} />
                    <div >
                        <h2>
                            {title}
                        </h2>
                    </div>
                </article>
            </Link>
        </React.Fragment>
    )
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    location: PropTypes.string
}

export default Card;