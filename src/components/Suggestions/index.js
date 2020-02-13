import React from "react";

import "./index.scss";

const Suggestions = ({ suggestions, addPointHandler }) => (
    <ul className="suggestions">
        {suggestions.map(point => (
            <li onMouseDown={e => addPointHandler(point)} key={point.value}>
                {point.value}
            </li>
        ))}
    </ul>
);

export default Suggestions;
