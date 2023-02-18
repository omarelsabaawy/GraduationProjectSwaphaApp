import React from "react";
import { Link } from "react-router-dom";

function Items() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/swap">Swap</Link></li>
                <li><Link to="/buy">Buy</Link></li>
                <li><Link to="/aboutUs">About Us</Link></li>
            </ul>
        </div>
    );
}

export default Items;