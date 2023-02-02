import React from "react";
import { Link } from "react-router-dom";

export default function Card({id, cover, title, location}) {
    return (
        <>
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
        </>
    )
}