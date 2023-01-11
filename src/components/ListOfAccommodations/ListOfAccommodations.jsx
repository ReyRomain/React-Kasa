import React from "react";
import Data from "../../datas/data.json";
import AnAccommodation from "./AnAccommodation/AnAccommodation";

export default function ListOfAccommodations() {
    return (
        <>
            <ul>
                {Data.map(({id, cover, title, location}) =>
                    <li key={id}>
                        <AnAccommodation 
                            id={id} cover={cover} 
                            title={title} location={location} 
                        />
                    </li>
                )}
            </ul>
        </>
    )
}