import React, { useState } from "react";

export default function DropDown({title, textArray}) {
    const [showIsOpen, setShowIsOpen] = useState(false)

    function updateShow() {
        setShowIsOpen(!showIsOpen)
    }

    const changeIcon = `fas ${showIsOpen ? "fa-chevron-up" : "fa-chevron-down"}`

    return (
        <React.Fragment>
            <section className={`collapse ${showIsOpen ? "collapse__is-open" : "collapse__is-close"}`}>
                <div className="collapse__title" onClick={updateShow}>
                    <h2>
                        {title}
                    </h2>
                    <span className={changeIcon} />
                </div>
                <ul className={`collapse__text`}>
                    {textArray.map((item, index) =>(
                        <li key={`item-${index}`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </React.Fragment>
    )
}