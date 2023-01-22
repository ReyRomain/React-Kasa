import React from "react";

export default function Host({owner}) {
    const [name, lastname] = owner.name.split(" ")

    return (
        <React.Fragment>
            <div className="owner">
                <div className="owner__name">
                    <p className="ower__firstname">
                        {name}
                    </p>
                    <p className="owner__lastname">
                        {lastname}
                    </p>
                </div>
                <img src={owner.picture} alt="Avatar du propriétaire" className="owner__picture" />
            </div>
        </React.Fragment>
    )
}