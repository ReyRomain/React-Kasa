import React from "react";
import Data from "../../datas/data.json";
import Card from "./Card/Card";

export default function Cards() {
    return (
        <>
            <section className="cards">
                {Data.map(({id, cover, title, location}) =>
                    <Card 
                        key={id}
                        id={id} cover={cover} 
                        title={title} location={location} 
                    />
                )}
            </section>
        </>
    )
}