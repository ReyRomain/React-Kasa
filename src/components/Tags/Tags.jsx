import React from "react";

export default function Tags({getTag}) {
    return (
        <React.Fragment>
            <p>
                {getTag}
            </p>
        </React.Fragment>
    )
}